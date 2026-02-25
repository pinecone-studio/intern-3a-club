import { ExecutorContext } from '@nx/devkit';
import { execSync } from 'child_process';
import executor from './executor';
import { ExecutorSchema } from './schema';

jest.mock('child_process', () => ({
  execSync: jest.fn(),
}));

const options: ExecutorSchema = {
  mode: 'debug',
};

describe(' Executor', () => {
  const mockExecSync = execSync as jest.Mock;

  const context = {
    root: '/root',
    projectName: 'test-project',
    workspace: {
      projects: {
        'test-project': {
          root: '/root/apps/test-project',
        },
      },
    },
  } as unknown as ExecutorContext;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should run test and report commands successfully', async () => {
    const result = await executor(options, context);

    expect(mockExecSync).toHaveBeenCalledWith('bunx playwright test --debug', { stdio: 'inherit', cwd: '/root/apps/test-project' });
    expect(mockExecSync).toHaveBeenCalledWith('bunx nyc report --nycrc-path=/root/apps/test-project/.nycrc.playwright.json', { stdio: 'inherit', cwd: '/root/apps/test-project' });

    expect(result).toEqual({ success: true });
  });

  it('should run test and report commands successfully when mode is test', async () => {
    const result = await executor({ mode: 'test' }, context);

    expect(mockExecSync).toHaveBeenCalledWith('bunx playwright test', { stdio: 'inherit', cwd: '/root/apps/test-project' });
    expect(mockExecSync).toHaveBeenCalledWith('bunx nyc report --nycrc-path=/root/apps/test-project/.nycrc.playwright.json', { stdio: 'inherit', cwd: '/root/apps/test-project' });

    expect(result).toEqual({ success: true });
  });

  it('should return false if test command fails', async () => {
    mockExecSync.mockImplementationOnce(() => {
      throw new Error('Test failed');
    });

    const result = await executor(options, context);

    expect(result).toEqual({ success: false });
  });

  it('should log a warning if coverage report fails', async () => {
    mockExecSync
      .mockImplementationOnce(() => undefined)
      .mockImplementationOnce(() => {
        throw new Error('Test failed');
      });

    const result = await executor(options, context);

    expect(result).toEqual({ success: false });
  });
});
