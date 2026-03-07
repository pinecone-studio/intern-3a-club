import { DB } from 'db/drizzle';
import { timetable } from 'db/schema';
import { eq } from 'drizzle-orm';
import { UpdateTimetableArgs } from 'gql-type';
import { handleMutationError } from 'gql-utils';
import { publishClubEvent } from 'gql-utils/realtime-publisher';

const notifyTimetableUpdate = async (
  clubId: string,
  clerkId?: string
): Promise<void> => {
  await publishClubEvent({
    type: 'club_updated',
    clubId: clubId,
    clerkId: clerkId ?? 'system',
    at: Date.now(),
  });
};

export const updateTimetable = async (
  _: unknown,
  args: UpdateTimetableArgs,
  context?: { clerkId?: string }
) => {
  console.log('UPDATE TIMETABLE START:', args.input);

  try {
    const { id, date, room, clubStartTime, duration } = args.input;

    const [updatedSchedule] = await DB.update(timetable)
      .set({
        date: date,
        room: room,
        clubStartTime: clubStartTime,
        duration: duration,
      })
      .where(eq(timetable.id, id))
      .returning();

    if (!updatedSchedule) {
      throw new Error('Засах хуваарь олдсонгүй.');
    }

    await notifyTimetableUpdate(updatedSchedule.clubId, context?.clerkId);

    console.log('SUCCESS: Timetable updated.', updatedSchedule);
    return updatedSchedule;
  } catch (error) {
    handleMutationError(error);
  }
};
