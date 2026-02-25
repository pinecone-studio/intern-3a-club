/* eslint-disable no-secrets/no-secrets */
import runExecutor from './executor';
import { ExecutorContext } from '@nx/devkit';
import * as helpers from './helpers';

jest.mock('./helpers', () => ({
  generateChangedFilesHash: jest.fn(),
  checkRemoteCacheOrSetIfMissing: jest.fn(),
}));

describe('runExecutor', () => {
  const mockContext: ExecutorContext = {
    projectName: 'my-project',
    root: '',
    cwd: '',
    isVerbose: false,
    target: null,
    workspace: {
      version: 2,
      projects: {},
    },
    projectsConfigurations: null,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (helpers.generateChangedFilesHash as jest.Mock).mockReturnValue('mocked-hash');
  });

  it('1. should call generateChangedFilesHash and checkRemoteCacheOrSetIfMissing with correct arguments', async () => {
    await expect(runExecutor({ target: 'build' }, mockContext)).resolves.toEqual({ success: true });

    expect(helpers.generateChangedFilesHash).toHaveBeenCalled();
    expect(helpers.checkRemoteCacheOrSetIfMissing).toHaveBeenCalledWith({
      projectName: 'my-project',
      hash: 'mocked-hash-my-project-build',
      task: 'build',
    });
  });
});
