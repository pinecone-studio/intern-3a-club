import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { eq } from 'drizzle-orm';

export const getClubById = async (_: any, { id }: { id: string }) => {
  const result = await DB.select().from(clubs).where(eq(clubs.id, id));

  return result[0] || null;
};
