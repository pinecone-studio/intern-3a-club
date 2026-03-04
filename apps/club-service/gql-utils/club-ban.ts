const BAN_SECONDS = 120;

const getUpstashConfig = () => {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) return null;
  return { url, token };
};

const getBanKey = (clubId: string, clerkId: string) =>
  `club:ban:${clubId}:${clerkId}`;

const runRedisCommand = async (
  commandParts: string[]
): Promise<unknown | null> => {
  const config = getUpstashConfig();
  if (!config) return null;

  try {
    const endpoint = `${config.url}/${commandParts
      .map((part) => encodeURIComponent(part))
      .join('/')}`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${config.token}`,
      },
    });

    const payload = (await response.json()) as {
      result?: unknown;
      error?: string;
    };

    if (!response.ok || payload.error) {
      console.error('Upstash Redis command failed:', payload.error);
      return null;
    }

    return payload.result ?? null;
  } catch (error) {
    console.error('Upstash Redis request failed:', error);
    return null;
  }
};

export const getJoinBanTtlSeconds = async (
  clubId: string,
  clerkId: string
): Promise<number> => {
  const key = getBanKey(clubId, clerkId);
  const ttlResult = await runRedisCommand(['TTL', key]);
  const ttl = Number(ttlResult);

  if (!Number.isFinite(ttl) || ttl <= 0) return 0;
  return ttl;
};

export const setJoinBan = async (
  clubId: string,
  clerkId: string
): Promise<void> => {
  const key = getBanKey(clubId, clerkId);
  await runRedisCommand(['SET', key, '1', 'EX', String(BAN_SECONDS)]);
};
