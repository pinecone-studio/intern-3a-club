import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { eq } from 'drizzle-orm';
import { getCreatorId } from 'gql-utils/user/user.util';
import { GraphQLError } from 'graphql';

export const getAllClubsByCreatorId = async (
  _: unknown,
  __: unknown,
  context: { clerkId?: string }
) => {
  if (!context.clerkId) {
    throw new GraphQLError('Нэвтрээгүй байна.', {
      extensions: { code: 'UNAUTHENTICATED' },
    });
  }

  try {
    const creatorId = await getCreatorId(context.clerkId);

    if (!creatorId) {
      throw new GraphQLError('Хэрэглэгч олдсонгүй.', {
        extensions: { code: 'NOT_FOUND' },
      });
    }

    return await DB.select().from(clubs).where(eq(clubs.creatorId, creatorId));
  } catch (error) {
    console.error('Error:', error);
    throw new GraphQLError('Клубүүдийг авахад алдаа гарлаа.');
  }
};
