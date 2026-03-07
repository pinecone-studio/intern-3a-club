import { DB } from 'db/drizzle';
import { clubs, timetable } from 'db/schema';
import { inArray, eq } from 'drizzle-orm';
import { GraphQLError } from 'graphql';
import { resolveStartDate, resolveEndDate } from 'gql-utils';
import { publishClubEvent } from 'gql-utils/realtime-publisher';

const syncClubDatesAfterDelete = async (clubId: string): Promise<void> => {
  const allSchedules = await DB.select({ date: timetable.date })
    .from(timetable)
    .where(eq(timetable.clubId, clubId));

  await DB.update(clubs)
    .set({
      startDate: resolveStartDate(allSchedules),
      endDate: resolveEndDate(allSchedules),
    })
    .where(eq(clubs.id, clubId));
};

const processAffectedClubs = async (
  clubIds: Set<string>,
  clerkId?: string
): Promise<void> => {
  for (const clubId of clubIds) {
    await syncClubDatesAfterDelete(clubId);
  }

  await Promise.all(
    Array.from(clubIds).map((clubId) =>
      publishClubEvent({
        type: 'club_updated',
        clubId,
        clerkId: clerkId ?? 'system',
        at: Date.now(),
      })
    )
  );
};

const performDeletion = async (ids: string[]) => {
  const deletedItems = await DB.delete(timetable)
    .where(inArray(timetable.id, ids))
    .returning({ clubId: timetable.clubId });

  if (!deletedItems?.length) {
    throw new GraphQLError('Устгах хуваарь олдсонгүй.', {
      extensions: { code: 'NOT_FOUND' },
    });
  }
  return deletedItems;
};

const handleDeletionError = (error: unknown): never => {
  if (error instanceof GraphQLError) throw error;
  throw new GraphQLError('Олон хуваарь устгахад алдаа гарлаа.', {
    extensions: { code: 'INTERNAL_SERVER_ERROR' },
  });
};

export const deleteManyTimetables = async (
  _: unknown,
  { ids }: { ids: string[] },
  context?: { clerkId?: string }
): Promise<boolean> => {
  if (!ids?.length) return false;

  try {
    const deletedItems = await performDeletion(ids);
    const affectedClubIds = new Set(deletedItems.map((item) => item.clubId));

    await processAffectedClubs(affectedClubIds, context?.clerkId);
    return true;
  } catch (error) {
    return handleDeletionError(error);
  }
};
