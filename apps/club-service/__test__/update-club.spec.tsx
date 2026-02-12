import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { eq } from 'drizzle-orm';
import { updateClub } from 'graphql/resolvers/mutations';

// 1. DB-г mock хийх (Method Chaining-ийг дуурайлгах)
jest.mock('db/drizzle', () => ({
  DB: {
    update: jest.fn().mockReturnThis(),
    set: jest.fn().mockReturnThis(),
    where: jest.fn().mockReturnThis(),
    returning: jest.fn(),
  },
}));

// eq функцийг mock хийх
jest.mock('drizzle-orm', () => ({
  ...jest.requireActual('drizzle-orm'),
  eq: jest.fn(),
}));

describe('updateClub mutation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Тест бүрийн өмнө Date-ийг "цацаж" тогтмол болговол шалгахад хялбар (optional)
    jest.useFakeTimers().setSystemTime(new Date('2024-01-01'));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should update a club and return the updated data', async () => {
    // 2. Mock өгөгдөл бэлдэх
    const mockInput = {
      id: 'club-123',
      name: 'Updated Name',
      description: 'New description',
    };

    const mockResult = {
      ...mockInput,
      updatedAt: new Date().toISOString(),
    };

    // Гинжин хэлхээний төгсгөлд массив буцаахаар тохируулах
    (
      DB.update(clubs)
        .set({} as any)
        .where({} as any).returning as jest.Mock
    ).mockResolvedValue([mockResult]);

    // 3. Функцийг ажиллуулах
    const result = await updateClub({ input: mockInput });

    // 4. Шалгалтууд:
    // 15-27-р мөрүүд энд бүрэн хамрагдана
    expect(DB.update).toHaveBeenCalledWith(clubs);

    // updatedAt талбар нэмэгдэж очсон эсэхийг шалгах
    expect(DB.update(clubs).set).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Updated Name',
        updatedAt: expect.any(String),
      })
    );

    // Зөв ID-аар шүүлт хийсэн эсэх
    expect(eq).toHaveBeenCalledWith(clubs.id, 'club-123');

    // Буцаасан утга зөв эсэх
    expect(result).toEqual(mockResult);
  });
});
