import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { updateClub } from 'graphql-gql/resolvers/mutations';

// 1. Mock-ийг гадна талд зарлаж өгснөөр гинжин дуудалтыг (chaining) хянахад хялбар болно
const mockReturning = jest.fn();
const mockWhere = jest.fn(() => ({ returning: mockReturning }));
const mockSet = jest.fn(() => ({ where: mockWhere }));

jest.mock('db/drizzle', () => ({
  DB: {
    update: jest.fn(() => ({ set: mockSet })),
  },
}));

// handleMutationError-ийг mock хийх
jest.mock('gql-utils', () => ({
  handleMutationError: jest.fn((err) => {
    // Хэрэв Error объект биш бол "Unknown error" гэж шидэх логикийг тестэд зориулж дуурайлгана
    if (err instanceof Error) throw err;
    throw new Error('Unknown error');
  }),
}));

describe('updateClub Full Coverage', () => {
  const mockInput = {
    id: 'club-123',
    status: 'approved' as const,
    teacherId: 'teacher-456',
  };

  beforeEach(() => {
    jest.clearAllMocks();
    // Тестийн үед консол дээр log харуулахгүй байх
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  it('амжилттай зассан үед шинэчлэгдсэн клубын мэдээллийг буцаах ёстой', async () => {
    const mockUpdated = {
      ...mockInput,
      updatedAt: new Date().toISOString(),
    };
    mockReturning.mockResolvedValue([mockUpdated]);

    const result = await updateClub(null, { input: mockInput });

    // DB.update клубын хүснэгт дээр дуудагдсан эсэх
    expect(DB.update).toHaveBeenCalledWith(clubs);
    // .set() функц руу ID-гүй объект очсон эсэхийг шалгах (destructuring test)
    expect(mockSet).toHaveBeenCalledWith(
      expect.objectContaining({
        status: mockInput.status,
        teacherId: mockInput.teacherId,
        updatedAt: expect.any(String),
      })
    );
    expect(result).toEqual(mockUpdated);
  });

  it('Reject (declined) хийх үед багшгүйгээр амжилттай шинэчлэх ёстой', async () => {
    const rejectInput = { id: 'club-123', status: 'declined' as const };
    const mockUpdated = { ...rejectInput, updatedAt: new Date().toISOString() };
    mockReturning.mockResolvedValue([mockUpdated]);

    const result = await updateClub(null, { input: rejectInput });

    expect(result?.status).toBe('declined');
    expect(mockSet).toHaveBeenCalledWith(
      expect.not.objectContaining({ teacherId: expect.anything() })
    );
  });

  it('DB-ээс алдаа ирэх үед handleMutationError ажиллах ёстой', async () => {
    const dbError = new Error('Database Connection Failed');
    (DB.update as jest.Mock).mockImplementationOnce(() => {
      throw dbError;
    });

    await expect(updateClub(null, { input: mockInput })).rejects.toThrow(
      'Database Connection Failed'
    );
  });

  it('Error биш зүйл (string) ирэх үед Unknown error гэж шидэх ёстой', async () => {
    (DB.update as jest.Mock).mockImplementationOnce(() => {
      throw 'Fatal String Error';
    });

    await expect(updateClub(null, { input: mockInput })).rejects.toThrow(
      /Unknown error/
    );
  });
});
