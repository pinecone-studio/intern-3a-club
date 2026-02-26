import { ExecutorContext, joinPathFragments, readProjectConfiguration, workspaceRoot } from '@nx/devkit';
import { execSync } from 'child_process';
import { FsTree } from 'nx/src/generators/tree';
import { DeployWithSecretsExecutorSchema } from './schema';

function getProjectConfig(projectName: string) {
  const tree = new FsTree(process.cwd(), false);
  return readProjectConfiguration(tree, projectName);
}

function deployWorker(mainFile: string, environment: string, cwd: string) {
  console.log(`\n🚀 Deploying worker to ${environment}...`);
  execSync(`npx wrangler deploy ${mainFile} --env ${environment}`, {
    cwd,
    stdio: 'inherit',
  });
  console.log(`\n✅ Worker deployed successfully!`);
}

function uploadSecrets(secretsFile: string, workerName: string, environment: string, cwd: string) {
  console.log(`\n🔐 Uploading secrets...`);
  execSync(`npx wrangler secret bulk ${secretsFile} --name ${workerName} --env ${environment}`, {
    cwd,
    stdio: 'inherit',
  });
  console.log(`\n✅ Secrets uploaded successfully!`);
}

function executeDeployment(
  mainFile: string,
  environment: string,
  cwd: string,
  secretsFile: string,
  workerName: string
): { success: boolean } {
  try {
    deployWorker(mainFile, environment, cwd);
    uploadSecrets(secretsFile, workerName, environment, cwd);
    return { success: true };
  } catch (error) {
    console.error(`\n❌ Deployment failed:`, error);
    return { success: false };
  }
}

export default async function deployWithSecretsExecutor(
  options: DeployWithSecretsExecutorSchema,
  context: ExecutorContext
): Promise<{ success: boolean }> {
  const projectName = context.projectName;
  const projectConfiguration = getProjectConfig(projectName);
  const mainFile = joinPathFragments(workspaceRoot, projectConfiguration.targets.build.options.main);
  const workerName = options.workerName || projectName;
  const secretsFile = options.secretsFile || 'secrets.json';

  return executeDeployment(mainFile, options.environment, projectConfiguration.root, secretsFile, workerName);
}
