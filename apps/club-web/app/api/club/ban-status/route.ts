// api/club/ban-status/route.ts
import { redis } from '../../../../lib/redis';
import { NextResponse } from 'next/server';

export const runtime = 'edge';
// eslint-disable-next-line complexity
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  const clubId = searchParams.get('clubId');

  if (!userId || !clubId) {
    return NextResponse.json({ error: 'Missing params' }, { status: 400 });
  }

  if (!redis) {
    return NextResponse.json({ remainingTime: 0 });
  }

  const key = `club:ban:${clubId}:${userId}`;
  const ttl = await redis.ttl(key);
  const remainingTime = Math.max(ttl, 0);

  return NextResponse.json({ remainingTime });
}
