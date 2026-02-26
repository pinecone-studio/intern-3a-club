import axios from 'axios';
import { runShellCommand } from '../helpers/run-shell-command';
import { cacheIfLocal, checkRemoteCacheOrSetIfMissing, fetchRemoteCache, isLocalEnv, runTargetAndCache, sendCacheToRemote } from '../helpers/check-remote-cache-or-set-if-missing';

jest.mock('axios');
jest.mock('chalk', () => ({
  green: jest.fn((msg) => msg),
  blue: jest.fn((msg) => msg),
}));
jest.mock('../helpers/run-shell-command', () => ({
  runShellCommand: jest.fn(),
}));

const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedRunShellCommand = runShellCommand as jest.Mock;

describe('Remote Cache System', () => {
  const mockParams = {
    hash: 'abc123',
    projectName: 'demo-project',
    task: 'build' as const,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return true if CI is not set', () => {
    delete process.env.CI;
    expect(isLocalEnv()).toBe(true);
  });

  it('should return true if CI is "false"', () => {
    process.env.CI = 'false';
    expect(isLocalEnv()).toBe(true);
  });

  it('should return false if CI is "true"', () => {
    process.env.CI = 'true';
    expect(isLocalEnv()).toBe(false);
  });

  it('should POST to the remote caching endpoint and log hash', async () => {
    mockedAxios.post.mockResolvedValueOnce({ data: { hash: 'abc123' } });

    await sendCacheToRemote(mockParams);

    expect(mockedAxios.post).toHaveBeenCalledWith(expect.stringContaining('/build'), { hash: 'abc123', task: 'build' });
  });

  it('should return hash if cache is found', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: { hash: 'abc123' } });

    const result = await fetchRemoteCache(mockParams);

    expect(mockedAxios.get).toHaveBeenCalledWith(expect.stringContaining('/build/abc123'));
    expect(result).toBe('abc123');
  });
  it('should return undefined when data is empty', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: undefined });

    const result = await fetchRemoteCache(mockParams);

    expect(result).toBe(undefined);
  });

  it('should return undefined if request fails', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('not found'));

    const result = await fetchRemoteCache(mockParams);

    expect(result).toBeUndefined();
  });

  it('should call sendCacheToRemote if in local env', async () => {
    process.env.CI = 'false';
    const sendSpy = jest.spyOn(axios, 'post').mockResolvedValueOnce({ data: { hash: 'abc123' } });

    await cacheIfLocal(mockParams);

    expect(sendSpy).toHaveBeenCalled();
  });

  it('should skip sending if not in local env', async () => {
    process.env.CI = 'true';
    const sendSpy = jest.spyOn(axios, 'post');

    await cacheIfLocal(mockParams);

    expect(sendSpy).not.toHaveBeenCalled();
  });

  it('should run the command and call cacheIfLocal on success', async () => {
    mockedRunShellCommand.mockReturnValueOnce('output');
    const cacheSpy = jest.spyOn(axios, 'post').mockResolvedValueOnce({ data: { hash: 'abc123' } });

    process.env.CI = 'false';
    await runTargetAndCache(mockParams);

    expect(mockedRunShellCommand).toHaveBeenCalledWith('nx run demo-project:build');
    expect(cacheSpy).toHaveBeenCalled();
  });

  it('should not call cacheIfLocal if command returns nothing', async () => {
    mockedRunShellCommand.mockReturnValueOnce('');
    const cacheSpy = jest.spyOn(axios, 'post');

    await runTargetAndCache(mockParams);

    expect(cacheSpy).not.toHaveBeenCalled();
  });

  it('should run task if cache does not exist', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('not found'));
    mockedRunShellCommand.mockReturnValueOnce('output');
    mockedAxios.post.mockResolvedValueOnce({ data: { hash: 'abc123' } });

    process.env.CI = 'false';
    await checkRemoteCacheOrSetIfMissing(mockParams);

    expect(mockedRunShellCommand).toHaveBeenCalled();
  });

  it('should skip task if cache exists', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: { hash: 'abc123' } });

    await checkRemoteCacheOrSetIfMissing(mockParams);

    expect(mockedRunShellCommand).not.toHaveBeenCalled();
  });
});
