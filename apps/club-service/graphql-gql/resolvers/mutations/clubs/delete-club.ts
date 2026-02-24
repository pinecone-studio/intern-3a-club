import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { eq } from 'drizzle-orm';
import { GraphQLError } from 'graphql';

export const deleteClub = async (_: unknown, { id }: { id: string }) => {
  try {
    const deletedRows = await DB.delete(clubs)
      .where(eq(clubs.id, id))
      .returning({ deletedId: clubs.id });

    if (deletedRows.length === 0) {
      throw new GraphQLError('Устгах клуб олдсонгүй.');
    }

    return deletedRows[0].deletedId;
  } catch (error) {
    if (error instanceof GraphQLError) throw error;
    throw new GraphQLError('Клуб устгахад алдаа гарлаа.');
  }
};
