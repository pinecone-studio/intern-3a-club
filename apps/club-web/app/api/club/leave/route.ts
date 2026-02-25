import { redis } from 'apps/club-web/lib/redis';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    console.log('Incoming leave request');

    const body = await req.json();
    console.log('Body:', body);

    const { userId, clubId } = body;

    if (!userId || !clubId) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    const key = `club:ban:${clubId}:${userId}`;
    console.log('Setting key:', key);

    // 2 минут ban (120 секунд)
    await redis.set(key, '1', { ex: 120 });

    // Redis TTL-г шалгах → frontend-д буцаана
    const ttl = await redis.ttl(key);

    console.log('Ban set success, TTL:', ttl);

    return NextResponse.json({ success: true, remainingTime: ttl });
  } catch (error: any) {
    console.error('LEAVE ERROR:', error);
    return NextResponse.json(
      { error: error?.message || 'Server error' },
      { status: 500 }
    );
  }
}
