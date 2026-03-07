import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { eq } from 'drizzle-orm';
import { handleMutationError } from 'gql-utils';
import { publishClubEvent } from 'gql-utils/realtime-publisher';

const notifyClubUpdate = async (
  clubId: string | undefined,
  clerkId?: string
): Promise<void> => {
  if (!clubId) return;

  await publishClubEvent({
    type: 'club_updated',
    clubId: clubId,
    clerkId: clerkId ?? 'system',
    at: Date.now(),
  });
};

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
  },
  context?: { clerkId?: string }
) => {
  try {
    const { id, ...dataToUpdate } = input;

    // Шинэчлэх датаг бэлдэх
    const finalUpdate = {
      ...dataToUpdate,
      updatedAt: new Date().toISOString(),
    };

    // Database update хийх
    const [updatedClub] = await DB.update(clubs)
      .set(finalUpdate)
      .where(eq(clubs.id, id))
      .returning();

    /**
     * Helper функцийг дуудсанаар үндсэн updateClub функцийн
     * Complexity оноо 4-өөс 2 болж буурч байна.
     */
    await notifyClubUpdate(updatedClub?.id, context?.clerkId);

    return updatedClub;
  } catch (error) {
    handleMutationError(error);
  }
};
