import { ExecutorContext, readProjectConfiguration } from '@nx/devkit';
import { execSync } from 'child_process';
import deployWithSecretsExecutor from './executor';

jest.mock('child_process');
jest.mock('nx/src/generators/tree');
jest.mock('@nx/devkit', () => ({
  ...jest.requireActual('@nx/devkit'),
  readProjectConfiguration: jest.fn(),
}));

const mockExecSync = execSync as jest.MockedFunction<typeof execSync>;
const mockReadProjectConfiguration = readProjectConfiguration as jest.MockedFunction<typeof readProjectConfiguration>;

describe('DeployWithSecretsExecutor', () => {
  const mockContext: ExecutorContext = {
    root: '/root',
    cwd: '/root',
    isVerbose: false,
    projectName: 'test-project',
    projectsConfigurations: {
      version: 2,
      projects: {},
    },
  };

  const mockProjectConfig = {
    root: 'apps/test-project',
    targets: {
      build: {
        options: {
          main: 'apps/test-project/src/index.ts',
        },
      },
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockReadProjectConfiguration.mockReturnValue(mockProjectConfig);
  });

  it('should deploy worker and upload secrets successfully', async () => {
    mockExecSync.mockReturnValue(Buffer.from('success'));

    const result = await deployWithSecretsExecutor(
      {
        environment: 'test',
        workerName: 'test-worker',
        secretsFile: 'secrets.json',
      },
      mockContext
    );

    expect(result.success).toBe(true);
    expect(mockExecSync).toHaveBeenCalledTimes(2);
    expect(mockExecSync).toHaveBeenNthCalledWith(
      1,
      expect.stringContaining('npx wrangler deploy'),
      expect.objectContaining({
        cwd: 'apps/test-project',
        stdio: 'inherit',
      })
    );
    expect(mockExecSync).toHaveBeenNthCalledWith(
      2,
      expect.stringContaining('npx wrangler secret bulk secrets.json --name test-worker --env test'),
      expect.objectContaining({
        cwd: 'apps/test-project',
        stdio: 'inherit',
      })
    );
  });

  it('should use project name as worker name when not provided', async () => {
    mockExecSync.mockReturnValue(Buffer.from('success'));

    const result = await deployWithSecretsExecutor(
      {
        environment: 'production',
      },
      mockContext
    );

    expect(result.success).toBe(true);
    expect(mockExecSync).toHaveBeenNthCalledWith(
      2,
      expect.stringContaining('--name test-project'),
      expect.anything()
    );
  });

  it('should use default secrets file when not provided', async () => {
    mockExecSync.mockReturnValue(Buffer.from('success'));

    const result = await deployWithSecretsExecutor(
      {
        environment: 'test',
      },
      mockContext
    );

    expect(result.success).toBe(true);
    expect(mockExecSync).toHaveBeenNthCalledWith(
      2,
      expect.stringContaining('secrets.json'),
      expect.anything()
    );
  });

  it('should return failure when deployment fails', async () => {
    mockExecSync.mockImplementation(() => {
      throw new Error('Deployment failed');
    });

    const result = await deployWithSecretsExecutor(
      {
        environment: 'test',
        workerName: 'test-worker',
      },
      mockContext
    );

    expect(result.success).toBe(false);
  });
});
