import { DB } from 'db/drizzle';
import { teachers } from 'db/schema';

export const getAllTeachers = async () => {
  try {
    return await DB.select({
      id: teachers.id,
      firstName: teachers.firstName,
      lastName: teachers.lastName,
      azureEmail: teachers.azureEmail,
      profilePicture: teachers.profilePicture,
    }).from(teachers);
  } catch (error) {
    console.error('Error in getAllTeachers:', error);
    throw new Error('Багш нарын мэдээллийг авахад алдаа гарлаа.');
  }
};
