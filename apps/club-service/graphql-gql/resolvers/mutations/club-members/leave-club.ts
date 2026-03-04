import { DB } from 'db/drizzle';
import { clubMembers, students } from 'db/schema';
import { and, eq } from 'drizzle-orm';
import { handleMutationError } from 'gql-utils';
import { GraphQLError } from 'graphql';

// Сурагчийг Clerk ID-аар олж баталгаажуулах
async function getAuthenticatedStudent(clerkId: string) {
  const student = await DB.query.students.findFirst({
    where: eq(students.authUserId, clerkId),
  });
  if (!student) throw new GraphQLError('Сурагч олдсонгүй.');
  return student;
}

// Клубийн гишүүнчлэлийг устгах
async function performDeleteMember(clubId: string, studentId: string) {
  const deletedRows = await DB.delete(clubMembers)
    .where(
      and(eq(clubMembers.clubId, clubId), eq(clubMembers.studentId, studentId))
    )
    .returning();

  if (deletedRows.length === 0) {
    throw new GraphQLError('Та энэ клубийн гишүүн биш байна.');
  }
}

// Үндсэн Mutation функц
export const leaveClub = async (
  _: unknown,
  { clubId }: { clubId: string },
  context: { clerkId?: string }
) => {
  try {
    if (!context.clerkId) throw new GraphQLError('Нэвтрээгүй байна.');

    const student = await getAuthenticatedStudent(context.clerkId);
    await performDeleteMember(clubId, student.id);

    return clubId;
  } catch (error) {
    handleMutationError(error);
  }
};
