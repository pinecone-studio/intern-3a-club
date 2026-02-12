import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { InferInsertModel } from 'drizzle-orm';
type NewClub = InferInsertModel<typeof clubs>;
type CreateClubInput = Omit<NewClub, 'id'>;
export const createClub = async ({ input }: { input: CreateClubInput }) => {
  const [newClub] = await DB.insert(clubs)
    .values({
      id: crypto.randomUUID(),
      ...input,
      type: input.type || 'self',
    })
    .returning();
  return newClub;
};
