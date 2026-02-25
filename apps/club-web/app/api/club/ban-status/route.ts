// api/club/ban-status/route.ts
<<<<<<< HEAD
import { redis } from '../../../../lib/redis';
=======
import { redis } from 'apps/club-web/lib/redis';
>>>>>>> 88fe588 (codegen config)
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  const clubId = searchParams.get('clubId');

  if (!userId || !clubId) {
    return NextResponse.json({ error: 'Missing params' }, { status: 400 });
  }

  const key = `club:ban:${clubId}:${userId}`;
<<<<<<< HEAD
  const ttl = await redis.ttl(key);
  const remainingTime = Math.max(ttl, 0);

  return NextResponse.json({ remainingTime });
=======
  const ttl = await redis.ttl(key); // seconds

  return NextResponse.json({ remainingTime: ttl > 0 ? ttl : 0 });
>>>>>>> 88fe588 (codegen config)
}
