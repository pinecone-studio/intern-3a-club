import { DB } from 'db/drizzle';
import { students, teachers } from 'db/schema';
import { eq } from 'drizzle-orm';

export const syncUser = async (_: unknown, __: unknown, context: any) => {
  const { clerkId, email } = context;

  if (!clerkId || !email) {
    throw new Error('Authentication context missing');
  }

  const teacher = await DB.select()
    .from(teachers)
    .where(eq(teachers.azureEmail, email))
    .get();
  if (teacher) {
    const [updated] = await DB.update(teachers)
      .set({ authUserId: clerkId })
      .where(eq(teachers.id, teacher.id))
      .returning();
    return { ...updated, __typename: 'Teacher' };
  }

  const student = await DB.select()
    .from(students)
    .where(eq(students.azureEmail, email))
    .get();
  if (student) {
    const [updated] = await DB.update(students)
      .set({ authUserId: clerkId })
      .where(eq(students.id, student.id))
      .returning();
    return { ...updated, __typename: 'Student' };
  }

  throw new Error('Бүртгэлгүй хэрэглэгч байна.');
};
