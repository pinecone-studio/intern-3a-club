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
    const [updatedClub] = await DB.update(clubs)
      .set({
        ...(input.status && { status: input.status }),
        // Хэрэв багш сонгосон бол шинэчилнэ, үгүй бол бааз дээрх хэвээрээ үлдэнэ
        ...(input.teacherId && { teacherId: input.teacherId }),
        updatedAt: new Date().toISOString(),
      })
      .where(eq(clubs.id, input.id))
      .returning();

    return updatedClub;
  } catch (error) {
    handleMutationError(error);
  }
};
