import { DB } from 'db/drizzle';
import { clubMembers, clubs, students } from 'db/schema';
import { handleMutationError } from 'gql-utils';
import { getJoinBanTtlSeconds } from 'gql-utils/club-ban';
import { publishClubEvent } from 'gql-utils/realtime-publisher';
import { GraphQLError } from 'graphql';
import { eq, and, count } from 'drizzle-orm';

const createMemberId = (): string => {
  return (
    globalThis.crypto?.randomUUID?.() ??
    `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
  );
};

// Сурагчийг шалгах
async function getStudentOrThrow(clerkId: string) {
  const student = await DB.query.students.findFirst({
    where: eq(students.authUserId, clerkId),
  });
  if (!student) throw new GraphQLError('Сурагчийн бүртгэл олдсонгүй.');
  return student;
}

// Клубыг шалгах
async function getClubOrThrow(clubId: string) {
  const club = await DB.query.clubs.findFirst({
    where: eq(clubs.id, clubId),
  });
  if (!club) throw new GraphQLError('Клуб олдсонгүй.');
  return club;
}

// Өмнө нь бүртгүүлсэн эсэхийг шалгах
async function checkExistingMembership(clubId: string, studentId: string) {
  const existing = await DB.query.clubMembers.findFirst({
    where: and(
      eq(clubMembers.clubId, clubId),
      eq(clubMembers.studentId, studentId)
    ),
  });
  if (existing)
    throw new GraphQLError('Та аль хэдийн энэ клубийн гишүүн болсон байна.');
}

// Клубын багтаамжийг шалгах
async function checkClubCapacity(clubId: string, maxMember: number) {
  const countRes = await DB.select({ value: count() })
    .from(clubMembers)
    .where(eq(clubMembers.clubId, clubId));

  if ((countRes[0]?.value || 0) >= maxMember) {
    throw new GraphQLError('Клуб дүүрсэн байна.');
  }
}

// Нэгдсэн шалгалтын логик
async function validateJoinAction(clubId: string, clerkId: string) {
  const student = await getStudentOrThrow(clerkId);
  const club = await getClubOrThrow(clubId);

  await checkExistingMembership(clubId, student.id);
  await checkClubCapacity(clubId, club.maxMember ?? 0);

  return student;
}

const getClerkIdOrThrow = (context: { clerkId?: string }): string => {
  if (!context.clerkId) throw new GraphQLError('Нэвтрээгүй байна.');
  return context.clerkId;
};

const assertJoinNotBanned = async (clubId: string, clerkId: string) => {
  const banTtl = await getJoinBanTtlSeconds(clubId, clerkId);
  if (banTtl > 0) {
    throw new GraphQLError(
      `Та энэ клубт ${banTtl} секундийн дараа дахин нэгдэнэ үү.`
    );
  }
};

// Үндсэн Mutation функц
export const joinClub = async (
  _: unknown,
  { clubId }: { clubId: string },
  context: { clerkId?: string }
) => {
  try {
    const clerkId = getClerkIdOrThrow(context);
    await assertJoinNotBanned(clubId, clerkId);

    const student = await validateJoinAction(clubId, clerkId);

    const [newMember] = await DB.insert(clubMembers)
      .values({
        id: createMemberId(),
        clubId: clubId,
        studentId: student.id,
      })
      .returning();

    await publishClubEvent({
      type: 'club_member_joined',
      clubId,
      clerkId,
      at: Date.now(),
    });

    return newMember;
  } catch (error) {
    handleMutationError(error);
  }
};
