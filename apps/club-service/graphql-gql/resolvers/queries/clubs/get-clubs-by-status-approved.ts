import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { eq } from 'drizzle-orm';
import { normalizeFrequency } from 'gql-utils';

export const getAllApprovedClubs = async () => {
  try {
    const rows = await DB.select().from(clubs).where(eq(clubs.status, 'approved'));
    const safeRows = Array.isArray(rows) ? rows : [];
    return safeRows.map((club) => ({
      ...club,
      ...(club.frequency != null
        ? { frequency: normalizeFrequency(club.frequency) }
        : {}),
    }));
  } catch (error) {
    console.error('Error in getAllApprovedClubs:', error);
    throw new Error('Батлагдсан клубүүдийн мэдээллийг авахад алдаа гарлаа.');
  }
};
