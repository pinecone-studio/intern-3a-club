import { DB } from 'db/drizzle';
import { timetable } from 'db/schema';
import { GraphQLError } from 'graphql';
import { deleteTimetable } from 'graphql-gql/resolvers/mutations';

const mockChain = {
  where: jest.fn().mockReturnThis(),
  returning: jest.fn(),
};

jest.mock('db/drizzle', () => ({
  DB: {
    delete: jest.fn(() => mockChain),
  },
}));

describe('deleteTimetable mutation', () => {
  const mockId = 'timetable-uuid-123';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Амжилттай устгасан үед true буцаах ёстой', async () => {
    mockChain.returning.mockResolvedValueOnce([{ id: mockId }]);

    const result = await deleteTimetable(null, { id: mockId });

    expect(result).toBe(true);
    expect(DB.delete).toHaveBeenCalledWith(timetable);
    expect(mockChain.where).toHaveBeenCalled();
  });

  it('Устгах хуваарь олдоогүй үед GraphQLError шидэх ёстой', async () => {
    mockChain.returning.mockResolvedValueOnce([]);

    try {
      await deleteTimetable(null, { id: mockId });
      fail('Should have thrown a GraphQLError');
    } catch (error) {
      const gqlError = error as GraphQLError;

      expect(gqlError).toBeInstanceOf(GraphQLError);
      expect(gqlError.message).toBe('Устгах хуваарь олдсонгүй.');
      expect(gqlError.extensions?.code).toBe('NOT_FOUND');
    }
  });

  it('Өгөгдлийн сангийн алдаа гарсан үед GraphQLError шидэх ёстой', async () => {
    const dbError = new Error('DB connection lost');
    mockChain.returning.mockRejectedValueOnce(dbError);

    try {
      await deleteTimetable(null, { id: mockId });
      fail('Should have thrown an error');
    } catch (error) {
      const gqlError = error as GraphQLError;
      expect(gqlError.message).toBe('Хуваарь устгахад алдаа гарлаа.');
    }
  });
});
