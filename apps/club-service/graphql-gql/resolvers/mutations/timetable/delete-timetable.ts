/* eslint-disable complexity */
import { DB } from 'db/drizzle';
import { timetable } from 'db/schema';
import { eq } from 'drizzle-orm';
import { GraphQLError } from 'graphql';
import { publishClubEvent } from 'gql-utils/realtime-publisher';

export const deleteTimetable = async (
  _: unknown,
  { id }: { id: string },
  context?: { clerkId?: string }
) => {
  const deletedTimetable = await DB.delete(timetable)
    .where(eq(timetable.id, id))
    .returning({ deletedId: timetable.id, clubId: timetable.clubId })
    .catch(() => {
      throw new GraphQLError('Хуваарь устгахад алдаа гарлаа.', {
        extensions: { code: 'INTERNAL_SERVER_ERROR' },
      });
    });

  if (!deletedTimetable || deletedTimetable.length === 0) {
    throw new GraphQLError('Устгах хуваарь олдсонгүй.', {
      extensions: {
        code: 'NOT_FOUND',
      },
    });
  }

  await publishClubEvent({
    type: 'club_updated',
    clubId: deletedTimetable[0].clubId,
    clerkId: context?.clerkId ?? 'system',
    at: Date.now(),
  });

  return true;
};
