import { Redis } from '@upstash/redis';

const stripWrappedQuotes = (value?: string) => {
  if (!value) return value;
  return value.replace(/^"+|"+$/g, '');
};

const url = stripWrappedQuotes(process.env.UPSTASH_REDIS_REST_URL);
const token = stripWrappedQuotes(process.env.UPSTASH_REDIS_REST_TOKEN);

export const redis = url && token ? new Redis({ url, token }) : null;
