import { execSync } from 'child_process';

const exitIfCI = (): false => {
  if (process.env.CI === 'true') {
    process.exit(1);
  }

  return false;
};

const executeCommandWithOutput = (command: string): string => {
  try {
    return execSync(command, { encoding: 'utf-8' });
  } catch (error) {
    console.error(`❌ Failed to execute command with output: "${command}"`);
    return '';
  }
};

const executeCommandWithInheritIO = (command: string): boolean => {
  try {
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`❌ Failed to execute command with inherited: "${command}"`);

    return exitIfCI();
  }
};

export const runShellCommand = (command: string, returnOutput: boolean = false): string | boolean => {
  return returnOutput ? executeCommandWithOutput(command) : executeCommandWithInheritIO(command);
};
