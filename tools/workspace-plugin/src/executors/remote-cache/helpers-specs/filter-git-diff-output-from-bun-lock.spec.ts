/* eslint-disable no-secrets/no-secrets */
import { filterGitDiffOutputFromBunLock } from '../helpers/filter-git-diff-output-from-bun-lock';
describe('filterGitDiffOutputFromBunLock', () => {
  it('removes diff block for bun.lockb file', () => {
    const input = `
diff --git a/bun.lockb b/bun.lockb
index abc1234..def5678 100644
@@ -1,9 +1,9 @@
-some line
+another line
diff --git a/src/index.ts b/src/index.ts
index 1111111..2222222 100644
@@ -1,4 +1,4 @@
-console.log("Hello");
+console.log("World");
    `.trim();

    const output = filterGitDiffOutputFromBunLock(input);
    expect(output).toContain('diff --git a/src/index.ts b/src/index.ts');
    expect(output).toContain('+console.log("World");');
    expect(output).not.toContain('diff --git a/bun.lockb b/bun.lockb');
    expect(output).not.toMatch(/@@\s.*\s@@/);
    expect(output).not.toMatch(/^index\s[0-9a-f]{7,}\.\.[0-9a-f]{7,}/m);
  });

  it('retains valid non-bun.lockb diff lines', () => {
    const input = `
diff --git a/app.js b/app.js
index 1234567..89abcde 100644
@@ -2,7 +2,7 @@
-function test() {
+function run() {
  console.log("Hello");
}
    `.trim();

    const output = filterGitDiffOutputFromBunLock(input);
    expect(output).toContain('diff --git a/app.js b/app.js');
    expect(output).toContain('+function run() {');
    expect(output).not.toMatch(/^@@\s.*\s@@/);
    expect(output).not.toMatch(/^index\s/);
  });

  it('handles input with no bun.lockb', () => {
    const input = `
diff --git a/utils.js b/utils.js
+export const add = (a, b) => a + b;
    `.trim();

    const output = filterGitDiffOutputFromBunLock(input);
    expect(output).toContain('+export const add = (a, b) => a + b;');
  });

  it('returns empty string if only bun.lockb diff is present', () => {
    const input = `
diff --git a/bun.lockb b/bun.lockb
index abc1234..def5678 100644
@@ -1,9 +1,9 @@
-some line
+another line
    `.trim();

    const output = filterGitDiffOutputFromBunLock(input);
    expect(output).toBe('');
  });
});
