import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { createClub } from 'graphql/resolvers/mutations';

// 1. DB-г бүхэлд нь mock хийх (Method Chaining-ийг дуурайлгах)
jest.mock('db/drizzle', () => ({
  DB: {
    insert: jest.fn().mockReturnThis(),
    values: jest.fn().mockReturnThis(),
    returning: jest.fn(),
  },
}));

describe('createClub mutation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a club with provided input and return it', async () => {
    // 2. Mock өгөгдөл бэлдэх
    const mockInput = {
      name: 'Test Club',
      type: 'academic' as const,
      description: 'A test description',
    };

    const mockCreatedClub = { id: 'uuid-123', ...mockInput };

    // .returning() нь массив буцаах ёстой
    (
      DB.insert(clubs).values({} as any).returning as jest.Mock
    ).mockResolvedValue([mockCreatedClub]);

    // 3. Функцээ дуудах
    const result = await createClub({ input: mockInput });

    // 4. Шалгалт
    expect(result.id).toBe('uuid-123');
    expect(result.name).toBe('Test Club');
    expect(DB.insert).toHaveBeenCalledWith(clubs);
  });

  it('should use default type "self" if type is not provided (Branch coverage)', async () => {
    const mockInput = { name: 'No Type Club' } as any;
    const mockCreatedClub = {
      id: 'uuid-456',
      name: 'No Type Club',
      type: 'self',
    };

    (
      DB.insert(clubs).values({} as any).returning as jest.Mock
    ).mockResolvedValue([mockCreatedClub]);

    const result = await createClub({ input: mockInput });

    // Энэ хэсэг нь 6-14-р мөрийн input.type || 'self' гэсэн логикийг шалгана
    expect(result.type).toBe('self');

    // DB.values руу 'self' дамжуулагдсан эсэхийг баталгаажуулах
    expect(DB.insert(clubs).values).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'self',
      })
    );
  });
});
