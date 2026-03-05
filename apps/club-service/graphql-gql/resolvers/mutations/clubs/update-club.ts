/* eslint-disable complexity */
import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { eq } from 'drizzle-orm';
import { handleMutationError } from 'gql-utils';
import { publishClubEvent } from 'gql-utils/realtime-publisher';

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

    const finalUpdate = {
      ...dataToUpdate,
      updatedAt: new Date().toISOString(),
    };

    const [updatedClub] = await DB.update(clubs)
      .set(finalUpdate)
      .where(eq(clubs.id, id))
      .returning();

    if (updatedClub?.id) {
      await publishClubEvent({
        type: 'club_updated',
        clubId: updatedClub.id,
        clerkId: context?.clerkId ?? 'system',
        at: Date.now(),
      });
    }

    return updatedClub;
  } catch (error) {
    handleMutationError(error);
  }
};
