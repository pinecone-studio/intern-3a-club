import { execSync } from 'child_process';
import { runShellCommand } from '../helpers/run-shell-command';

jest.mock('child_process', () => ({
  execSync: jest.fn(),
}));

const mockedExecSync = execSync as jest.Mock;

describe('runShellCommand', () => {
  const originalEnv = process.env;
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
    throw new Error('process.exit called');
  });

  beforeEach(() => {
    process.env = { ...originalEnv }; // reset env
    jest.clearAllMocks();
  });

  afterAll(() => {
    process.env = originalEnv;
    mockExit.mockRestore();
  });

  it('1. should return output when command succeeds with returnOutput=true', () => {
    mockedExecSync.mockReturnValue('mocked output');
    const result = runShellCommand('echo Hello', true);
    expect(result).toBe('mocked output');
    expect(mockedExecSync).toHaveBeenCalledWith('echo Hello', { encoding: 'utf-8' });
  });

  it('2. should return empty string when command fails with returnOutput=true', () => {
    mockedExecSync.mockImplementation(() => {
      throw new Error('Command failed');
    });
    const result = runShellCommand('invalid-cmd', true);
    expect(result).toBe('');
  });

  it('3. should return true when command succeeds with returnOutput=false', () => {
    mockedExecSync.mockImplementation(() => {});
    const result = runShellCommand('echo Hello');
    expect(result).toBe(true);
    expect(mockedExecSync).toHaveBeenCalledWith('echo Hello', { stdio: 'inherit' });
  });

  it('4. should return false when command fails locally (CI=false)', () => {
    process.env.CI = 'false';
    mockedExecSync.mockImplementation(() => {
      throw new Error('Command failed');
    });

    const result = runShellCommand('invalid-cmd');
    expect(result).toBe(false);
    expect(mockExit).not.toHaveBeenCalled();
  });

  it('5. should call process.exit when command fails in CI=true', () => {
    process.env.CI = 'true';
    mockedExecSync.mockImplementation(() => {
      throw new Error('Command failed');
    });

    expect(() => runShellCommand('invalid-cmd')).toThrow('process.exit called');
    expect(mockExit).toHaveBeenCalledWith(1);
  });
});
