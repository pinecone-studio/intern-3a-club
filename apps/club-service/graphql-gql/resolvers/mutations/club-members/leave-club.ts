import { DB } from 'db/drizzle';
import { clubMembers, students } from 'db/schema';
import { and, eq } from 'drizzle-orm';
import { handleMutationError } from 'gql-utils';
import { GraphQLError } from 'graphql';

export const leaveClub = async (
  _: unknown,
  { clubId }: { clubId: string },
  context: { clerkId?: string }
) => {
  try {
    if (!context.clerkId) throw new GraphQLError('Нэвтрээгүй байна.');

    const student = await DB.query.students.findFirst({
      where: eq(students.authUserId, context.clerkId),
    });

    if (!student) throw new GraphQLError('Сурагч олдсонгүй.');

    const deletedRows = await DB.delete(clubMembers)
      .where(
        and(
          eq(clubMembers.clubId, clubId),
          eq(clubMembers.studentId, student.id)
        )
      )
      .returning();

    if (deletedRows.length === 0) {
      throw new GraphQLError('Та энэ клубийн гишүүн биш байна.');
    }

    return clubId;
  } catch (error) {
    handleMutationError(error);
  }
};
