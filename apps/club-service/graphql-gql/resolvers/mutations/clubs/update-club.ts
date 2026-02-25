import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { eq } from 'drizzle-orm';
import { handleMutationError } from 'gql-utils';

export const updateClub = async (
  _: unknown,
  {
    input,
  }: {
    input: {
      id: string;
      status?: 'pending' | 'approved' | 'declined';
      teacherId?: string;
    };
  }
) => {
  try {
    const { id, ...dataToUpdate } = input;

    const finalUpdate = {
      ...dataToUpdate,
      updatedAt: new Date().toISOString(),
    };

    const [updatedClub] = await DB.update(clubs)
      .set(finalUpdate)
      .where(eq(clubs.id, id))
      .returning();

    return updatedClub;
  } catch (error) {
    handleMutationError(error);
  }
};
