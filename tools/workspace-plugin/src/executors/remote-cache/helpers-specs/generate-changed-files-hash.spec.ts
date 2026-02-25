import { createHash } from 'crypto';
import { filterGitDiffOutputFromBunLock } from '../helpers/filter-git-diff-output-from-bun-lock';
import { generateChangedFilesHash } from '../helpers/generate-changed-files-hash';
import { runShellCommand } from '../helpers/run-shell-command';

jest.mock('../helpers/run-shell-command');
jest.mock('../helpers/filter-git-diff-output-from-bun-lock');

describe('generateChangedFilesHash', () => {
  const mockRunShellCommand = runShellCommand as jest.Mock;
  const mockFilterGitDiffOutputFromBunLock = filterGitDiffOutputFromBunLock as jest.Mock;

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should generate a SHA256 hash based on filtered git diff output', () => {
    const fakeBase = 'abc123';
    const diffOutput = 'diff --git a/file.js b/file.js';
    const filteredOutput = 'filtered-diff-content';

    mockRunShellCommand.mockReturnValueOnce(fakeBase).mockReturnValueOnce(diffOutput);

    mockFilterGitDiffOutputFromBunLock.mockReturnValue(filteredOutput);

    const expectedHash = createHash('sha256').update(filteredOutput, 'utf8').digest('hex');

    const hash = generateChangedFilesHash();
    expect(hash).toBe(expectedHash);
    expect(mockRunShellCommand).toHaveBeenCalledWith('git merge-base HEAD origin/main', true);
    expect(mockRunShellCommand).toHaveBeenCalledWith(`git diff ${fakeBase}`, true);
    expect(mockFilterGitDiffOutputFromBunLock).toHaveBeenCalledWith(diffOutput);
  });

  it('should return empty string if git diff output is not a string', () => {
    mockRunShellCommand.mockReturnValueOnce('abc123').mockReturnValueOnce(null);

    const hash = generateChangedFilesHash();
    expect(hash).toBe('');
  });
});
