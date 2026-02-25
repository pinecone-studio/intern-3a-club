import axios from 'axios';
import { blue, green } from 'chalk';
import { runShellCommand } from './run-shell-command';

type CacheResponse = { hash: string };

type CommonCacheParams = {
  hash: string;
  projectName: string;
  task: 'lint' | 'test' | 'build' | 'e2e:playwright';
};

const remoteCachingSystemEndpoint = 'https://remote-caching-system-production.shagai.workers.dev';

const isLocalEnv = (): boolean => {
  return !process.env.CI || process.env.CI === 'false';
};

const sendCacheToRemote = async ({ hash, task }: CommonCacheParams): Promise<void> => {
  const { data } = await axios.post<CacheResponse>(`${remoteCachingSystemEndpoint}/${task}`, { hash, task });

  console.log(green('✅ Cache stored remotely with hash ID:', data.hash));
};

const fetchRemoteCache = async ({ hash, task }: CommonCacheParams): Promise<string | undefined> => {
  try {
    const { data } = await axios.get<CacheResponse>(`${remoteCachingSystemEndpoint}/${task}/${hash}`);

    console.log(green('Fetched remote cache with hash ID: ', data?.hash));

    return data?.hash;
  } catch (error) {
    return undefined;
  }
};

const cacheIfLocal = async (params: CommonCacheParams): Promise<void> => {
  if (!isLocalEnv()) return;

  await sendCacheToRemote(params);
};

const runTargetAndCache = async ({ projectName, hash, task }: CommonCacheParams): Promise<void> => {
  console.log(blue(`Running task "${task}" for project "${projectName}"`));
  const output = runShellCommand(`nx run ${projectName}:${task}`);

  if (output) {
    console.log(blue('Task execution successful. Attempting to cache...'));
    await cacheIfLocal({ projectName, hash, task });
  }
};

const checkRemoteCacheOrSetIfMissing = async (params: CommonCacheParams): Promise<void> => {
  const existingCacheId = await fetchRemoteCache(params);

  if (!existingCacheId) {
    await runTargetAndCache(params);
  } else {
    console.log(green(`✅ Remote cache hit. Skipping task "${params.task}".`));
  }
};

export { checkRemoteCacheOrSetIfMissing, fetchRemoteCache, sendCacheToRemote, cacheIfLocal, runTargetAndCache, isLocalEnv };
