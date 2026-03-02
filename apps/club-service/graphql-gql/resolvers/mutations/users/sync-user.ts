import { DB } from 'db/drizzle';
import { students, teachers } from 'db/schema';
import { eq } from 'drizzle-orm';

interface AuthContext {
  clerkId?: string;
  email?: string;
}

// const validateContext = (clerkId?: string, email?: string) => {
//   if (!clerkId || !email) {
//     throw new Error('Authentication context missing');
//   }
//   return { clerkId, email };
// };

const findAndUpdateUser = async (clerkId: string, email: string) => {
  // Багш мөн эсэхийг шалгаад шинэчлэх
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

  // Сурагч мөн эсэхийг шалгаад шинэчлэх
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

  return null;
};

export const syncUser = async (
  _: unknown,
  __: unknown,
  context: AuthContext
) => {
  const { clerkId, email } = context;

  if (!clerkId || !email) {
    throw new Error('Authentication context missing');
  }

  const result = await findAndUpdateUser(clerkId, email);

  if (!result) {
    throw new Error('Бүртгэлгүй хэрэглэгч байна.');
  }

  return result;
};
