import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { eq } from 'drizzle-orm';
import { normalizeFrequency } from 'gql-utils';

export const getAllApprovedClubs = async () => {
  try {
    const rows = await DB.select().from(clubs).where(eq(clubs.status, 'approved'));
    return rows.map((club) => ({
      ...club,
      frequency: normalizeFrequency(club.frequency),
    }));
  } catch (error) {
    console.error('Error in getAllApprovedClubs:', error);
    throw new Error('Батлагдсан клубүүдийн мэдээллийг авахад алдаа гарлаа.');
  }
};
