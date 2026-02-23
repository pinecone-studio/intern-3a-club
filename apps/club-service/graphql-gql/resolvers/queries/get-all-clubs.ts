import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';

export const getAllClubs = async () => {
  try {
    return await DB.select().from(clubs);
  } catch (error) {
    console.error('Error in getAllClubs:', error);
    throw new Error('Клубүүдийн мэдээллийг авахад алдаа гарлаа.');
  }
};
