import { DB } from 'db/drizzle';
import { students, teachers } from 'db/schema';
import { eq } from 'drizzle-orm';

export const getCreatorId = async (clerkId: string): Promise<string | null> => {
  const teacher = await DB.select()
    .from(teachers)
    .where(eq(teachers.authUserId, clerkId))
    .get();
  if (teacher) return teacher.id;

  const student = await DB.select()
    .from(students)
    .where(eq(students.authUserId, clerkId))
    .get();

  return student ? student.id : null;
};
