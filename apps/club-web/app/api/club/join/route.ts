import { redis } from 'apps/club-web/lib/redis';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { userId, clubId } = await req.json();
  console.log({ userId, clubId });

  const key = `club:ban:${clubId}:${userId}`;
  console.log({ key });
  const banned = await redis.get(key);
  console.log({ banned });

  if (banned) {
    const ttl = await redis.ttl(key); // ⬅️ үлдсэн секунд
    return NextResponse.json(
      { error: 'BANNED', remainingTime: ttl },
      { status: 403 }
    );
  }

  return NextResponse.json({ success: true });
}
