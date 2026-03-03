import { DB } from 'db/drizzle';
import { clubMembers, clubs, students } from 'db/schema';
import { handleMutationError } from 'gql-utils';
import { GraphQLError } from 'graphql';
import { eq, and, count } from 'drizzle-orm';

export const joinClub = async (
  _: unknown,
  { clubId }: { clubId: string },
  context: { clerkId?: string }
) => {
  try {
    if (!context.clerkId) throw new GraphQLError('Нэвтрээгүй байна.');

    const student = await DB.query.students.findFirst({
      where: eq(students.authUserId, context.clerkId),
    });

    if (!student) {
      throw new GraphQLError('Сурагчийн бүртгэл олдсонгүй.');
    }

    const club = await DB.query.clubs.findFirst({
      where: eq(clubs.id, clubId),
    });

    if (!club) {
      throw new GraphQLError('Клуб олдсонгүй.');
    }

    const existingMember = await DB.query.clubMembers.findFirst({
      where: and(
        eq(clubMembers.clubId, clubId),
        eq(clubMembers.studentId, student.id)
      ),
    });

    if (existingMember) {
      throw new GraphQLError('Та аль хэдийн энэ клубийн гишүүн болсон байна.');
    }

    const memberCountResult = await DB.select({ value: count() })
      .from(clubMembers)
      .where(eq(clubMembers.clubId, clubId));

    const currentMemberCount = memberCountResult[0]?.value || 0;

    if (currentMemberCount >= club.maxMember) {
      throw new GraphQLError('Клуб дүүрсэн байна.');
    }

    const [newMember] = await DB.insert(clubMembers)
      .values({
        id: crypto.randomUUID(),
        clubId: clubId,
        studentId: student.id,
      })
      .returning();

    return newMember;
  } catch (error) {
    handleMutationError(error);
  }
};
