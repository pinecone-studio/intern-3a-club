// api/club/ban-status/route.ts
import { redis } from 'apps/club-web/lib/redis';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  const clubId = searchParams.get('clubId');

  if (!userId || !clubId) {
    return NextResponse.json({ error: 'Missing params' }, { status: 400 });
  }

  const key = `club:ban:${clubId}:${userId}`;
  const ttl = await redis.ttl(key); // seconds

  return NextResponse.json({ remainingTime: ttl > 0 ? ttl : 0 });
}
