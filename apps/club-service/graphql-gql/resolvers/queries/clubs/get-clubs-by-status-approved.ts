import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { eq } from 'drizzle-orm';

export const getAllApprovedClubs = async () => {
  try {
    return await DB.select().from(clubs).where(eq(clubs.status, 'approved'));
  } catch (error) {
    console.error('Error in getAllApprovedClubs:', error);
    throw new Error('Батлагдсан клубүүдийн мэдээллийг авахад алдаа гарлаа.');
  }
};
