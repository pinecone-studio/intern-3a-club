import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { getCreatorId } from 'gql-utils/user/user.util';
import { GraphQLError } from 'graphql';
import { getAllClubsByCreatorId } from 'graphql-gql/resolvers/queries';

// Drizzle-ийн chain-ийг mock хийх объект
const mockChain = {
  from: jest.fn().mockReturnThis(),
  where: jest.fn(),
};

jest.mock('db/drizzle', () => ({
  DB: {
    select: jest.fn(() => mockChain),
  },
}));

jest.mock('gql-utils/user/user.util', () => ({
  getCreatorId: jest.fn(),
}));

describe('getAllClubsByCreatorId query', () => {
  const mockClerkId = 'clerk-user-123';
  const mockCreatorId = 'creator-uuid-456';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Хэрэглэгч нэвтрээгүй үед UNAUTHENTICATED алдаа шидэх ёстой', async () => {
    try {
      await getAllClubsByCreatorId(null, {}, { clerkId: undefined });
      fail('Should have thrown UNAUTHENTICATED error');
    } catch (error) {
      const gqlError = error as GraphQLError;
      expect(gqlError.message).toBe('Нэвтрээгүй байна.');
      expect(gqlError.extensions?.code).toBe('UNAUTHENTICATED');
    }
  });

  it('Хэрэглэгчийн creatorId олдоогүй үед NOT_FOUND алдаа шидэх ёстой', async () => {
    (getCreatorId as jest.Mock).mockResolvedValueOnce(null);

    try {
      await getAllClubsByCreatorId(null, {}, { clerkId: mockClerkId });
      fail('Should have thrown NOT_FOUND error');
    } catch (error) {
      const gqlError = error as GraphQLError;
      expect(gqlError.message).toBe('Хэрэглэгч олдсонгүй.');
      expect(gqlError.extensions?.code).toBe('NOT_FOUND');
    }
  });

  it('Амжилттай үед тухайн creator-ийн клубүүдийг буцаах ёстой', async () => {
    const mockData = [
      { id: 'club-1', name: 'Basketball', creatorId: mockCreatorId },
      { id: 'club-2', name: 'Coding', creatorId: mockCreatorId },
    ];

    (getCreatorId as jest.Mock).mockResolvedValueOnce(mockCreatorId);
    mockChain.where.mockResolvedValueOnce(mockData);

    const result = await getAllClubsByCreatorId(
      null,
      {},
      { clerkId: mockClerkId }
    );

    expect(result).toEqual(mockData);
    expect(getCreatorId).toHaveBeenCalledWith(mockClerkId);
    expect(DB.select).toHaveBeenCalled();
    expect(mockChain.from).toHaveBeenCalledWith(clubs);
  });

  it('Өгөгдлийн сангийн алдаа гарсан үед ерөнхий GraphQLError шидэх ёстой', async () => {
    (getCreatorId as jest.Mock).mockResolvedValueOnce(mockCreatorId);
    mockChain.where.mockRejectedValueOnce(new Error('DB connection lost'));

    try {
      await getAllClubsByCreatorId(null, {}, { clerkId: mockClerkId });
      fail('Should have thrown error');
    } catch (error) {
      const gqlError = error as GraphQLError;
      expect(gqlError.message).toBe('Клубүүдийг авахад алдаа гарлаа.');
    }
  });
});
