import { DB } from 'db/drizzle';
import { handleMutationError } from 'gql-utils';
import { joinClub } from 'graphql-gql/resolvers/mutations';

// 1. Crypto-г mock хийх (Энэ байхгүй бол Happy Path унана)
Object.defineProperty(global, 'crypto', {
  value: {
    randomUUID: jest.fn(() => 'uuid-123'),
  },
});

// 2. Drizzle Mock
jest.mock('db/drizzle', () => ({
  DB: {
    query: {
      students: { findFirst: jest.fn() },
      clubs: { findFirst: jest.fn() },
      clubMembers: { findFirst: jest.fn() },
    },
    insert: jest.fn().mockReturnThis(),
    values: jest.fn().mockReturnThis(),
    returning: jest.fn(),
    select: jest.fn().mockReturnThis(),
    from: jest.fn().mockReturnThis(),
    where: jest.fn().mockReturnThis(),
  },
}));

jest.mock('gql-utils', () => ({
  handleMutationError: jest.fn(),
}));

const mockedDB = DB as unknown as {
  query: {
    students: { findFirst: jest.Mock };
    clubs: { findFirst: jest.Mock };
    clubMembers: { findFirst: jest.Mock };
  };
  insert: jest.Mock;
  values: jest.Mock;
  returning: jest.Mock;
  select: jest.Mock;
  from: jest.Mock;
  where: jest.Mock;
};

const mockedHandleError = handleMutationError as unknown as jest.Mock;

describe('joinClub Mutation 100% Coverage', () => {
  const mockContext = { clerkId: 'user_123' };
  const mockArgs = { clubId: 'club_777' };

  beforeEach(() => {
    jest.clearAllMocks();
    // Алдаа гарсан үед handleMutationError-ыг throw хийдэг болгох
    mockedHandleError.mockImplementation((err) => {
      throw err;
    });
  });

  it('should throw GraphQLError when clerkId is missing', async () => {
    await expect(joinClub({}, mockArgs, {})).rejects.toThrow(
      'Нэвтрээгүй байна.'
    );
  });

  it('should call handleMutationError if student is not found', async () => {
    mockedDB.query.students.findFirst.mockResolvedValue(null);
    await expect(joinClub({}, mockArgs, mockContext)).rejects.toThrow(
      'Сурагчийн бүртгэл олдсонгүй.'
    );
  });

  it('should call handleMutationError if club is not found', async () => {
    mockedDB.query.students.findFirst.mockResolvedValue({ id: 's1' });
    mockedDB.query.clubs.findFirst.mockResolvedValue(null);
    await expect(joinClub({}, mockArgs, mockContext)).rejects.toThrow(
      'Клуб олдсонгүй.'
    );
  });

  it('should call handleMutationError if already a member', async () => {
    mockedDB.query.students.findFirst.mockResolvedValue({ id: 's1' });
    mockedDB.query.clubs.findFirst.mockResolvedValue({
      id: 'c1',
      maxMember: 10,
    });
    mockedDB.query.clubMembers.findFirst.mockResolvedValue({ id: 'm1' });
    await expect(joinClub({}, mockArgs, mockContext)).rejects.toThrow(
      'Та аль хэдийн энэ клубийн гишүүн болсон байна.'
    );
  });

  it('should call handleMutationError if club is full', async () => {
    mockedDB.query.students.findFirst.mockResolvedValue({ id: 's1' });
    mockedDB.query.clubs.findFirst.mockResolvedValue({
      id: 'c1',
      maxMember: 5,
    });
    mockedDB.query.clubMembers.findFirst.mockResolvedValue(null);

    // countRes-ийг дуурайх
    mockedDB.where.mockResolvedValueOnce([{ value: 5 }]);

    await expect(joinClub({}, mockArgs, mockContext)).rejects.toThrow(
      'Клуб дүүрсэн байна.'
    );
  });

  it('should call handleMutationError if count result is undefined (Branch coverage)', async () => {
    mockedDB.query.students.findFirst.mockResolvedValue({ id: 's1' });
    mockedDB.query.clubs.findFirst.mockResolvedValue({
      id: 'c1',
      maxMember: 5,
    });
    mockedDB.query.clubMembers.findFirst.mockResolvedValue(null);

    // countRes[0] нь undefined байх тохиолдол ((countRes[0]?.value || 0) хэсгийг шалгана)
    mockedDB.where.mockResolvedValueOnce([]);

    // Happy path шиг ажиллана (0 < 5 учир)
    mockedDB.returning.mockResolvedValue([{ id: 'm1' }]);
    const result = await joinClub({}, mockArgs, mockContext);
    expect(result).toBeDefined();
  });

  it('should call handleMutationError on unexpected catch-block error', async () => {
    const dbError = new Error('Unexpected DB Error');
    mockedDB.query.students.findFirst.mockRejectedValue(dbError);

    try {
      await joinClub({}, mockArgs, mockContext);
    } catch (e) {
      expect(mockedHandleError).toHaveBeenCalledWith(dbError);
    }
  });

  it('should return new member on success (Happy Path)', async () => {
    const mockNewMember = {
      id: 'uuid-123',
      clubId: 'club_777',
      studentId: 's1',
    };

    mockedDB.query.students.findFirst.mockResolvedValue({ id: 's1' });
    mockedDB.query.clubs.findFirst.mockResolvedValue({
      id: 'c1',
      maxMember: 10,
    });
    mockedDB.query.clubMembers.findFirst.mockResolvedValue(null);
    mockedDB.where.mockResolvedValueOnce([{ value: 2 }]);
    mockedDB.returning.mockResolvedValue([mockNewMember]);

    const result = await joinClub({}, mockArgs, mockContext);

    expect(result).toEqual(mockNewMember);
    expect(mockedDB.insert).toHaveBeenCalled();
  });
});
