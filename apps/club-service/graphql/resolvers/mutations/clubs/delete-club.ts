import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { eq } from 'drizzle-orm';

export const deleteClub = async ({ id }: { id: string }) => {
  await DB.delete(clubs).where(eq(clubs.id, id));
  return true;
};
