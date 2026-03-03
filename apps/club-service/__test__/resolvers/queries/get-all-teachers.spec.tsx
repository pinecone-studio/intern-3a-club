import { DB } from 'db/drizzle';
import { getAllTeachers } from 'graphql-gql/resolvers/queries';

// Drizzle DB-г mock хийх
jest.mock('db/drizzle', () => ({
  DB: {
    select: jest.fn(() => ({
      from: jest.fn(),
    })),
  },
}));

describe('getAllTeachers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('successfully fetches all teachers with specific fields', async () => {
    // 1. Mock дата бэлдэх
    const mockTeachers = [
      {
        id: 'teacher-1',
        firstName: 'Bold',
        lastName: 'Bat',
        azureEmail: 'bold.bat@nest.edu.mn',
        profilePicture: 'url-1',
      },
    ];

    // 2. Drizzle-ийн гинжин хэлхээг (chaining) mock хийх
    const fromMock = jest.fn().mockResolvedValue(mockTeachers);
    (DB.select as jest.Mock).mockReturnValue({ from: fromMock });

    // 3. Функцээ дуудаж ажиллуулах
    const result = await getAllTeachers();

    // 4. Шалгах (Assertions)
    expect(DB.select).toHaveBeenCalledWith({
      id: expect.anything(),
      firstName: expect.anything(),
      lastName: expect.anything(),
      azureEmail: expect.anything(),
      profilePicture: expect.anything(),
    });
    expect(result).toEqual(mockTeachers);
    expect(result[0]).toHaveProperty('firstName', 'Bold');
  });

  it('throws error when database query fails', async () => {
    // Алдаа гарах тохиолдлыг mock хийх
    const fromMock = jest
      .fn()
      .mockRejectedValue(new Error('Database connection lost'));
    (DB.select as jest.Mock).mockReturnValue({ from: fromMock });

    // Алдааны мессеж зөв эсэхийг шалгах
    await expect(getAllTeachers()).rejects.toThrow(
      'Багш нарын мэдээллийг авахад алдаа гарлаа.'
    );
  });
});
