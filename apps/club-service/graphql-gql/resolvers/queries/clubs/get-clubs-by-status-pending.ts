import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { eq } from 'drizzle-orm';
import { normalizeFrequency } from 'gql-utils';

export const getAllPendingClubs = async () => {
  try {
    const rows = await DB.select().from(clubs).where(eq(clubs.status, 'pending'));
    return rows.map((club) => ({
      ...club,
      frequency: normalizeFrequency(club.frequency),
    }));
  } catch (error) {
    console.error('Error in getAllPendingClubs:', error);
    throw new Error('Хүлээгдэж буй клубүүдийн мэдээллийг авахад алдаа гарлаа.');
  }
};
