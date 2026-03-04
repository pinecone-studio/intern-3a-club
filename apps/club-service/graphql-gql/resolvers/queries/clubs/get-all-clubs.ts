import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { normalizeFrequency } from 'gql-utils';

export const getAllClubs = async () => {
  try {
    const rows = await DB.select().from(clubs);
    return rows.map((club) => ({
      ...club,
      frequency: normalizeFrequency(club.frequency),
    }));
  } catch (error) {
    console.error('Error in getAllClubs:', error);
    throw new Error('Клубүүдийн мэдээллийг авахад алдаа гарлаа.');
  }
};
