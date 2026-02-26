/**
 * Pre-push hook script: runs lint and test (with 100% coverage) on affected projects.
 * Exit code is non-zero if lint has errors or coverage is below 100%.
 * Prints lint report and coverage report when they fail.
 */
import {
  execSync,
  type ExecSyncOptionsWithStringEncoding,
} from 'node:child_process';
import * as path from 'node:path';

const workspaceRoot = path.resolve(__dirname, '../../../');

const sharedExecOpts: ExecSyncOptionsWithStringEncoding = {
  cwd: workspaceRoot,
  encoding: 'utf-8',
};

function printReport(title: string, output: string, fallback: string): void {
  const sep = '═'.repeat(60);
  console.error('\n' + sep);
  console.error(`  ${title}`);
  console.error(sep);
  console.error(output || fallback);
  console.error(sep + '\n');
}

// Simple field extraction with defaults; complexity limit would require more code than value
function getOutputFromError(err: unknown): {
  stdout: string;
  stderr: string;
  message: string;
} {
  const e = err as { stdout?: string; stderr?: string; message?: string };
  const stdout = (e.stdout ?? '').trim();
  const stderr = (e.stderr ?? '').trim();
  const message = e.message ?? 'Command failed with no captured output.';
  return { stdout, stderr, message };
}

function handleFailedRun(
  err: unknown,
  reportTitle: string,
): { ok: false; output: string } {
  const { stdout, stderr, message } = getOutputFromError(err);
  const output = [stdout, stderr].filter(Boolean).join('\n');

  console.log(stdout);
  console.error(stderr);
  printReport(reportTitle, output, message);
  return { ok: false, output };
}

function runWithReport(
  cmd: string,
  description: string,
  reportTitle: string,
): { ok: boolean; output: string } {
  console.log(`\n▶ ${description}\n`);
  try {
    const output = execSync(cmd, {
      ...sharedExecOpts,
      stdio: 'pipe',
    });
    const out = (output || '').trim();
    console.log(out);
    return { ok: true, output: out };
  } catch (err: unknown) {
    return handleFailedRun(err, reportTitle);
  }
}

function main(): void {
  console.log(
    'Pre-push: checking affected projects (lint + 100% test coverage)...',
  );

  const lintResult = runWithReport(
    'npx nx affected -t lint --exclude=workspace-plugin',
    'Linting affected projects (no errors allowed)',
    'LINT REPORT (fix the errors above before pushing)',
  );
  if (!lintResult.ok) {
    console.error(
      '❌ Pre-push failed: lint reported errors. Fix them before pushing.\n',
    );
    process.exit(1);
  }

  const testResult = runWithReport(
    'npx nx affected -t test -c ci --exclude=workspace-plugin',
    'Running tests with coverage on affected projects (100% required)',
    'COVERAGE / TEST REPORT (ensure 100% coverage and passing tests)',
  );
  if (!testResult.ok) {
    console.error(
      '❌ Pre-push failed: tests or coverage failed. Coverage must be 100% on affected projects.\n',
    );
    process.exit(1);
  }

  console.log('\n✅ Pre-push passed: lint and coverage OK.\n');
  process.exit(0);
}

main();
