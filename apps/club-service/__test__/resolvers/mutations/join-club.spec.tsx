import { DB } from 'db/drizzle';
import { handleMutationError } from 'gql-utils';
import { joinClub } from 'graphql-gql/resolvers/mutations';
import * as clubBanUtils from 'gql-utils/club-ban';
import * as realtimePublisher from 'gql-utils/realtime-publisher';

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
  handleMutationError: jest.fn((err: unknown) => {
    if (err instanceof Error) throw err;
    throw new Error(String(err));
  }),
}));

jest.mock('gql-utils/club-ban', () => ({
  getJoinBanTtlSeconds: jest.fn(),
}));

jest.mock('gql-utils/realtime-publisher', () => ({
  publishClubEvent: jest.fn(),
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
const mockedGetBanTtl =
  clubBanUtils.getJoinBanTtlSeconds as unknown as jest.Mock;

describe('joinClub Mutation 100% Coverage', () => {
  const mockContext = { clerkId: 'user_123' };
  const mockArgs = { clubId: 'club_777' };
  let originalCrypto: typeof globalThis.crypto;

  beforeAll(() => {
    originalCrypto = globalThis.crypto;
  });

  beforeEach(() => {
    jest.clearAllMocks();
    Object.defineProperty(globalThis, 'crypto', {
      value: originalCrypto,
      configurable: true,
    });
    mockedGetBanTtl.mockResolvedValue(0);
  });

  it('should call handleMutationError on unexpected catch-block error', async () => {
    const unexpectedError = new Error('DB Crash');
    mockedGetBanTtl.mockRejectedValueOnce(unexpectedError);

    await expect(joinClub({}, mockArgs, mockContext)).rejects.toThrow(
      'DB Crash'
    );

    expect(mockedHandleError).toHaveBeenCalledWith(unexpectedError);
  });

  it('should use fallback ID generator when crypto is undefined (Line 76 coverage)', async () => {
    Object.defineProperty(globalThis, 'crypto', {
      value: undefined,
      configurable: true,
    });

    mockedDB.query.students.findFirst.mockResolvedValue({ id: 's1' });
    mockedDB.query.clubs.findFirst.mockResolvedValue({
      id: 'c1',
      maxMember: 10,
    });
    mockedDB.query.clubMembers.findFirst.mockResolvedValue(null);
    mockedDB.where.mockResolvedValueOnce([{ value: 0 }]);
    mockedDB.returning.mockResolvedValue([{ id: 'fallback-id' }]);

    const result = await joinClub({}, mockArgs, mockContext);
    expect(result).toBeDefined();
  });

  it('should throw GraphQLError when user is banned from joining', async () => {
    mockedGetBanTtl.mockResolvedValueOnce(120);
    await expect(joinClub({}, mockArgs, mockContext)).rejects.toThrow(
      /Та энэ клубт 120 секундийн дараа дахин нэгдэнэ үү/
    );
  });

  it('should throw GraphQLError when clerkId is missing', async () => {
    await expect(joinClub({}, mockArgs, {})).rejects.toThrow(
      'Нэвтрээгүй байна.'
    );
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
    expect(realtimePublisher.publishClubEvent).toHaveBeenCalled();
  });
});
