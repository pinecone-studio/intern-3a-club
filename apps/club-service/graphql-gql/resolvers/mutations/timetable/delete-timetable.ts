import { DB } from 'db/drizzle';
import { timetable } from 'db/schema';
import { eq } from 'drizzle-orm';
import { GraphQLError } from 'graphql';

export const deleteTimetable = async (_: unknown, { id }: { id: string }) => {
  const deletedTimetable = await DB.delete(timetable)
    .where(eq(timetable.id, id))
    .returning({ deletedId: timetable.id })
    .catch(() => {
      throw new GraphQLError('Хуваарь устгахад алдаа гарлаа.');
    });

  if (!deletedTimetable || deletedTimetable.length === 0) {
    throw new GraphQLError('Устгах хуваарь олдсонгүй.');
  }

  return true;
};
