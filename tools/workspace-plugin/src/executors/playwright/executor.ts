import { execSync } from 'child_process';
import { ExecutorSchema } from './schema';
import { ExecutorContext } from '@nx/devkit';

const getModeFlag = (mode: ExecutorSchema['mode']) => {
  const modeFlag = mode === 'test' ? '' : `--${mode}`;
  return modeFlag;
};

const runCommand = (command: string, cwd: string): boolean => {
  try {
    execSync(command, { stdio: 'inherit', cwd });
    return true;
  } catch (error) {
    console.error(`❌ Command failed: ${command}`);
    return false;
  }
};

const buildTestCommand = (modeFlag: string): string => `bunx playwright test ${modeFlag}`.trim();

const buildReportCommand = (projectRoot: string): string => `bunx nyc report --nycrc-path=${projectRoot}/.nycrc.playwright.json`;

const buildCheckCoverageCommand = (projectRoot: string): string => `bunx nyc check-coverage --nycrc-path=${projectRoot}/.nycrc.playwright.json`;

const runTests = (mode: ExecutorSchema['mode'], projectRoot: string): boolean => {
  const modeFlag = getModeFlag(mode);
  const testCommand = buildTestCommand(modeFlag);
  return runCommand(testCommand, projectRoot);
};

const generateCoverageReport = (projectRoot: string): boolean => {
  const reportCommand = buildReportCommand(projectRoot);
  return runCommand(reportCommand, projectRoot);
};

const checkCoverageThresholds = (projectRoot: string): boolean => {
  const checkCommand = buildCheckCoverageCommand(projectRoot);
  return runCommand(checkCommand, projectRoot);
};

export default async function runExecutor(options: ExecutorSchema, context: ExecutorContext) {
  const { projectName, workspace } = context;
  const { mode } = options;
  const projectRoot = workspace.projects[projectName].root;

  const testSuccess = runTests(mode, projectRoot);
  const reportSuccess = generateCoverageReport(projectRoot);
  const coverageSuccess = checkCoverageThresholds(projectRoot);

  const success = [testSuccess, reportSuccess, coverageSuccess].every(Boolean);

  return { success };
}
