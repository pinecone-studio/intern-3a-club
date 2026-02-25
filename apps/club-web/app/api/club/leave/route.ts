import { redis } from '../../../../lib/redis';
import { NextResponse } from 'next/server';

type LeavePayload = {
  userId: string;
  clubId: string;
};

const isRecord = (payload: unknown): payload is Record<string, unknown> => {
  return Boolean(payload) && typeof payload === 'object';
};

const hasLeaveFields = (payload: Record<string, unknown>): payload is LeavePayload => {
  return typeof payload.userId === 'string' && typeof payload.clubId === 'string';
};

const isLeavePayload = (payload: unknown): payload is LeavePayload => {
  if (!isRecord(payload)) {
    return false;
  }

  return hasLeaveFields(payload);
};

const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }

  return 'Server error';
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!isLeavePayload(body)) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    const { userId, clubId } = body;
    const key = `club:ban:${clubId}:${userId}`;
    await redis.set(key, '1', { ex: 120 });
    const ttl = await redis.ttl(key);
    return NextResponse.json({ success: true, remainingTime: ttl });
  } catch (error: unknown) {
    return NextResponse.json({ error: getErrorMessage(error) }, { status: 500 });
  }
}
