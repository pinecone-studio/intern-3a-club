import { createHash } from 'crypto';
import { runShellCommand } from './run-shell-command';
import { filterGitDiffOutputFromBunLock } from './filter-git-diff-output-from-bun-lock';

export const generateChangedFilesHash = () => {
  const base = runShellCommand('git merge-base HEAD origin/main', true);
  const mainDiffOutput = runShellCommand(`git diff ${String(base).trim()}`, true);

  if (typeof mainDiffOutput !== 'string') return '';

  const filteredOutput = filterGitDiffOutputFromBunLock(mainDiffOutput);

  const hash = createHash('sha256').update(filteredOutput, 'utf8').digest('hex');

  return hash;
};
