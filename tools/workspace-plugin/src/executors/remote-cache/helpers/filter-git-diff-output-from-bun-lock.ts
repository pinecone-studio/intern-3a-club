// eslint-disable-next-line complexity
export const filterGitDiffOutputFromBunLock = (mainDiffOutput: string) => {
  const lines = mainDiffOutput.split(/\r?\n/);
  const cleanedLines: string[] = [];

  const indexLineRegex = /^index\s[0-9a-fA-F]{7,}\.\.[0-9a-fA-F]{7,}(?:\s\d{6})?$/;
  const chunkMetadataRegex = /^@@\s.*\s@@$/;

  let skipBunLockBlock = false;

  for (const line of lines) {
    if (line.startsWith('diff --git a/bun.lockb b/bun.lockb')) {
      skipBunLockBlock = true;
      continue;
    }

    if (skipBunLockBlock && line.startsWith('diff --git')) {
      skipBunLockBlock = false;
    }

    if (skipBunLockBlock || indexLineRegex.test(line) || chunkMetadataRegex.test(line)) {
      continue;
    }

    cleanedLines.push(line.trimEnd());
  }

  return cleanedLines.join('\n').trim();
};
