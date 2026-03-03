import { deleteClub } from 'graphql-gql/resolvers/mutations';
import { DB } from 'db/drizzle';

jest.mock('db/drizzle', () => ({
  DB: {
    delete: jest.fn().mockReturnThis(),
    where: jest.fn().mockReturnThis(),
    returning: jest.fn(),
  },
}));

describe('deleteClub logic full coverage tests', () => {
  const mockId = 'test-id-123';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return deleted ID on success', async () => {
    const mockReturning = jest.fn().mockResolvedValue([{ deletedId: mockId }]);

    (DB.delete as jest.Mock).mockReturnValue({
      where: jest.fn().mockReturnValue({
        returning: mockReturning,
      }),
    });

    const result = await deleteClub(null, { id: mockId });
    expect(result).toBe(mockId);
    expect(DB.delete).toHaveBeenCalled();
  });

  it('should throw "Устгах клуб олдсонгүй." when ID does not exist', async () => {
    const mockReturning = jest.fn().mockResolvedValue([]);

    (DB.delete as jest.Mock).mockReturnValue({
      where: jest.fn().mockReturnValue({
        returning: mockReturning,
      }),
    });

    await expect(deleteClub(null, { id: 'wrong-id' })).rejects.toThrow(
      'Устгах клуб олдсонгүй.'
    );
  });

  it('should throw "Клуб устгахад алдаа гарлаа." when database fails', async () => {
    const mockReturning = jest.fn().mockRejectedValue(new Error('DB Fail'));

    (DB.delete as jest.Mock).mockReturnValue({
      where: jest.fn().mockReturnValue({
        returning: mockReturning,
      }),
    });

    await expect(deleteClub(null, { id: mockId })).rejects.toThrow(
      'Клуб устгахад алдаа гарлаа.'
    );
  });
});
