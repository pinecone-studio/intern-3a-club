import { DB } from 'db/drizzle';
import { timetable } from 'db/schema';
import { eq } from 'drizzle-orm';
import { UpdateTimetableArgs } from 'gql-type';
import { handleMutationError } from 'gql-utils';

export const updateTimetable = async (
  _: unknown,
  args: UpdateTimetableArgs
) => {
  console.log('UPDATE TIMETABLE START:', args.input);

  try {
    const { id, date, classroom, startTime, duration } = args.input;

    const [updatedSchedule] = await DB.update(timetable)
      .set({
        date: date,
        classroom: classroom,
        startTime: startTime,
        duration: duration,
      })
      .where(eq(timetable.id, id))
      .returning();

    if (!updatedSchedule) {
      throw new Error('Засах хуваарь олдсонгүй.');
    }

    console.log('SUCCESS: Timetable updated.', updatedSchedule);
    return updatedSchedule;
  } catch (error) {
    handleMutationError(error);
  }
};
