export interface DeployWithSecretsExecutorSchema {
  environment: string;
  workerName?: string;
  secretsFile?: string;
}
