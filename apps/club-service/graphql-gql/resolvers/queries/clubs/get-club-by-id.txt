import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { eq } from 'drizzle-orm';

export const getClubById = async (_: unknown, { id }: { id: string }) => {
  try {
    const result = await DB.select().from(clubs).where(eq(clubs.id, id));
    return result[0] || null;
  } catch (error) {
    console.error('Error in getClubById:', error);
    throw new Error('Клубын мэдээллийг авахад алдаа гарлаа.');
  }
};
