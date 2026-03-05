/* eslint-disable complexity */
import { DB } from 'db/drizzle';
import { timetable } from 'db/schema';
import { eq } from 'drizzle-orm';
import { UpdateTimetableArgs } from 'gql-type';
import { handleMutationError } from 'gql-utils';
import { publishClubEvent } from 'gql-utils/realtime-publisher';

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

    await publishClubEvent({
      type: 'club_updated',
      clubId: updatedSchedule.clubId,
      clerkId: context?.clerkId ?? 'system',
      at: Date.now(),
    });

    console.log('SUCCESS: Timetable updated.', updatedSchedule);
    return updatedSchedule;
  } catch (error) {
    handleMutationError(error);
  }
};
