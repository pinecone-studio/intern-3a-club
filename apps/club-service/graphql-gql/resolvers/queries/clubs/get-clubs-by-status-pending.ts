import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { eq } from 'drizzle-orm';

export const getAllPendingClubs = async () => {
  try {
    return await DB.select().from(clubs).where(eq(clubs.status, 'pending'));
  } catch (error) {
    console.error('Error in getAllPendingClubs:', error);
    throw new Error('Хүлээгдэж буй клубүүдийн мэдээллийг авахад алдаа гарлаа.');
  }
};
