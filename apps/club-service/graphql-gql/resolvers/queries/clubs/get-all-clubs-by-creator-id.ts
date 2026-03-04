import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { eq } from 'drizzle-orm';
import { normalizeFrequency } from 'gql-utils';
import { getCreatorId } from 'gql-utils/user/user.util';
import { GraphQLError } from 'graphql';

const ensureCreatorId = async (clerkId?: string): Promise<string> => {
  if (!clerkId) {
    throw new GraphQLError('Нэвтрээгүй байна.', {
      extensions: { code: 'UNAUTHENTICATED' },
    });
  }

  const creatorId = await getCreatorId(clerkId);

  if (!creatorId) {
    throw new GraphQLError('Хэрэглэгч олдсонгүй.', {
      extensions: { code: 'NOT_FOUND' },
    });
  }

  return creatorId;
};

export const getAllClubsByCreatorId = async (
  _: unknown,
  __: unknown,
  context: { clerkId?: string }
) => {
  try {
    const creatorId = await ensureCreatorId(context.clerkId);

    const rows = await DB.select().from(clubs).where(eq(clubs.creatorId, creatorId));
    return rows.map((club) => ({
      ...club,
      frequency: normalizeFrequency(club.frequency),
    }));
  } catch (error) {
    if (error instanceof GraphQLError) throw error;

    console.error('Error:', error);
    throw new GraphQLError('Клубүүдийг creator id-аар авахад алдаа гарлаа.');
  }
};
