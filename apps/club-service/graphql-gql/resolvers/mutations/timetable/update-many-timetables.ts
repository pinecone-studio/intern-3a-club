import { DB } from 'db/drizzle';
import { clubs, timetable } from 'db/schema';
import { eq, InferSelectModel } from 'drizzle-orm';
import { UpdateTimetableArgs } from 'gql-type';
import {
  handleMutationError,
  resolveStartDate,
  resolveEndDate,
} from 'gql-utils';
import { publishClubEvent } from 'gql-utils/realtime-publisher';

type Timetable = InferSelectModel<typeof timetable>;

const updateSchedules = async (
  inputs: UpdateTimetableArgs['input'][]
): Promise<{ updated: Timetable[]; clubIds: Set<string> }> => {
  const updated: Timetable[] = [];
  const clubIds = new Set<string>();

  for (const input of inputs) {
    const [res] = await DB.update(timetable)
      .set({
        date: input.date,
        room: input.room,
        clubStartTime: input.clubStartTime,
        duration: input.duration,
      })
      .where(eq(timetable.id, input.id))
      .returning();

    if (res) {
      updated.push(res);
      clubIds.add(res.clubId);
    }
  }
  return { updated, clubIds };
};

const syncClubs = async (clubIds: Set<string>): Promise<void> => {
  for (const clubId of clubIds) {
    const allSchedules = await DB.select({ date: timetable.date })
      .from(timetable)
      .where(eq(timetable.clubId, clubId));

    await DB.update(clubs)
      .set({
        startDate: resolveStartDate(allSchedules),
        endDate: resolveEndDate(allSchedules),
      })
      .where(eq(clubs.id, clubId));
  }
};

const notifyClubs = async (
  clubIds: Set<string>,
  clerkId?: string
): Promise<void> => {
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

const ensureUpdated = (updatedCount: number): void => {
  if (updatedCount === 0) {
    throw new Error('Шинэчлэх хуваарь олдсонгүй.');
  }
};

export const updateManyTimetables = async (
  _: unknown,
  args: { inputs: UpdateTimetableArgs['input'][] },
  context?: { clerkId?: string }
): Promise<Timetable[] | undefined> => {
  if (!args.inputs?.length) return [];

  try {
    const { updated, clubIds } = await updateSchedules(args.inputs);

    ensureUpdated(updated.length);

    await syncClubs(clubIds);
    await notifyClubs(clubIds, context?.clerkId);

    return updated;
  } catch (error) {
    handleMutationError(error);
    return undefined;
  }
};
