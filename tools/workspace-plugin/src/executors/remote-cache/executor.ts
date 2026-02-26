import { ExecutorSchema } from './schema';
import { ExecutorContext } from '@nx/devkit';
import { checkRemoteCacheOrSetIfMissing, generateChangedFilesHash } from './helpers';

export default async function runExecutor(options: ExecutorSchema, context: ExecutorContext) {
  const { target } = options;
  const { projectName } = context;

  const hash = generateChangedFilesHash();

  await checkRemoteCacheOrSetIfMissing({ projectName, hash: `${hash}-${projectName}-${target.replace(/:/g, '-')}`, task: target });

  return { success: true };
}
