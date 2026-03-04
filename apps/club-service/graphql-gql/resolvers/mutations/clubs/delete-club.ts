import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { eq } from 'drizzle-orm';
import { publishClubEvent } from 'gql-utils/realtime-publisher';
import { GraphQLError } from 'graphql';

export const deleteClub = async (
  _: unknown,
  { id }: { id: string },
  context?: { clerkId?: string }
) => {
  const deletedRows = await DB.delete(clubs)
    .where(eq(clubs.id, id))
    .returning({ deletedId: clubs.id })
    .catch(() => {
      throw new GraphQLError('Клуб устгахад алдаа гарлаа.');
    });

  if (!deletedRows?.length) {
    throw new GraphQLError('Устгах клуб олдсонгүй.');
  }

  await publishClubEvent({
    type: 'club_deleted',
    clubId: id,
    clerkId: context?.clerkId || 'system',
    at: Date.now(),
  });

  return deletedRows[0].deletedId;
};
