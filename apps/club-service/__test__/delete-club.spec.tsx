import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { eq } from 'drizzle-orm';
import { deleteClub } from 'graphql/resolvers/mutations';

// DB-г mock хийх
jest.mock('db/drizzle', () => ({
  DB: {
    delete: jest.fn().mockReturnThis(),
    where: jest.fn().mockResolvedValue(true), // Promise шийдэгдсэнийг илэрхийлнэ
  },
}));

// drizzle-orm-ийн eq-г mock хийх (заавал биш ч илүү найдвартай)
jest.mock('drizzle-orm', () => ({
  ...jest.requireActual('drizzle-orm'),
  eq: jest.fn(),
}));

describe('deleteClub mutation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should delete a club by id and return true', async () => {
    const mockId = 'club-uuid-123';

    // Функцийг ажиллуулах
    const result = await deleteClub({ id: mockId });

    // Шалгалтууд:
    // 1. Устгах үйлдлийг зөв хүснэгт (clubs) дээр эхлүүлсэн үү?
    expect(DB.delete).toHaveBeenCalledWith(clubs);

    // 2. Зөв ID-аар шүүлт хийсэн үү? (5-7-р мөр энд хамрагдана)
    expect(DB.delete(clubs).where).toHaveBeenCalled();
    expect(eq).toHaveBeenCalledWith(clubs.id, mockId);

    // 3. Функц эцэст нь true буцааж байна уу?
    expect(result).toBe(true);
  });
});
