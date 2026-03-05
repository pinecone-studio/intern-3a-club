import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { normalizeFrequency } from 'gql-utils';

export const getAllClubs = async () => {
  try {
    const rows = await DB.select().from(clubs);
    const safeRows = Array.isArray(rows) ? rows : [];
    return safeRows.map((club) => ({
      ...club,
      ...(club.frequency != null
        ? { frequency: normalizeFrequency(club.frequency) }
        : {}),
    }));
  } catch (error) {
    console.error('Error in getAllClubs:', error);
    throw new Error('Клубүүдийн мэдээллийг авахад алдаа гарлаа.');
  }
};
