import { joinClub } from 'graphql-gql/resolvers/mutations';
import { DB } from 'db/drizzle';
import { handleMutationError } from 'gql-utils';
import * as clubBanUtils from 'gql-utils/club-ban';
import * as realtimePublisher from 'gql-utils/realtime-publisher';

// 1. Mocks
jest.mock('db/drizzle', () => ({
  DB: {
    query: {
      students: { findFirst: jest.fn() },
      clubs: { findFirst: jest.fn() },
      clubMembers: { findFirst: jest.fn() },
    },
    insert: jest.fn(),
    select: jest.fn(),
  },
}));

jest.mock('gql-utils', () => ({
  handleMutationError: jest.fn(),
}));

jest.mock('gql-utils/club-ban', () => ({
  getJoinBanTtlSeconds: jest.fn(),
}));

jest.mock('gql-utils/realtime-publisher', () => ({
  publishClubEvent: jest.fn(),
}));

// 2. Type-Safe Mocking (No any)
const mockedDB = DB as unknown as {
  query: {
    students: { findFirst: jest.Mock };
    clubs: { findFirst: jest.Mock };
    clubMembers: { findFirst: jest.Mock };
  };
  insert: jest.Mock;
  select: jest.Mock;
};

const mockedHandleError = handleMutationError as jest.MockedFunction<
  typeof handleMutationError
>;
const mockedGetBanTtl =
  clubBanUtils.getJoinBanTtlSeconds as jest.MockedFunction<
    typeof clubBanUtils.getJoinBanTtlSeconds
  >;

describe('joinClub Mutation - Full 100% Coverage', () => {
  const mockContext = { clerkId: 'user_123' };
  const mockArgs = { clubId: 'club_777' };

  beforeEach(() => {
    jest.clearAllMocks();
    mockedGetBanTtl.mockResolvedValue(0);
  });

  // --- TestCase 1: Happy Path ---
  it('should successfully join a club and publish event', async () => {
    mockedDB.query.students.findFirst.mockResolvedValue({ id: 's1' });
    mockedDB.query.clubs.findFirst.mockResolvedValue({
      id: 'c1',
      maxMember: 10,
    });
    mockedDB.query.clubMembers.findFirst.mockResolvedValue(null);
    mockedDB.select.mockReturnValue({
      from: jest.fn().mockReturnValue({
        where: jest.fn().mockResolvedValue([{ value: 5 }]),
      }),
    });
    mockedDB.insert.mockReturnValue({
      values: jest.fn().mockReturnValue({
        returning: jest.fn().mockResolvedValue([{ id: 'new-member-id' }]),
      }),
    });

    const result = await joinClub({}, mockArgs, mockContext);

    expect(result).toEqual({ id: 'new-member-id' });
    expect(realtimePublisher.publishClubEvent).toHaveBeenCalled();
  });

  // --- TestCase 2: Line 40 Coverage (Student Not Found) ---
  it('should throw error when student is not found (Line 40)', async () => {
    mockedDB.query.students.findFirst.mockResolvedValue(null);

    await joinClub({}, mockArgs, mockContext);

    expect(mockedHandleError).toHaveBeenCalledWith(
      expect.objectContaining({ message: 'Сурагчийн бүртгэл олдсонгүй.' })
    );
  });

  // --- TestCase 3: Club Not Found ---
  it('should throw error when club is not found', async () => {
    mockedDB.query.students.findFirst.mockResolvedValue({ id: 's1' });
    mockedDB.query.clubs.findFirst.mockResolvedValue(null);

    await joinClub({}, mockArgs, mockContext);

    expect(mockedHandleError).toHaveBeenCalledWith(
      expect.objectContaining({ message: 'Клуб олдсонгүй.' })
    );
  });

  // --- TestCase 4: Already a Member ---
  it('should throw error if student is already a member', async () => {
    mockedDB.query.students.findFirst.mockResolvedValue({ id: 's1' });
    mockedDB.query.clubs.findFirst.mockResolvedValue({
      id: 'c1',
      maxMember: 10,
    });
    mockedDB.query.clubMembers.findFirst.mockResolvedValue({ id: 'm1' }); // Already exists

    await joinClub({}, mockArgs, mockContext);

    expect(mockedHandleError).toHaveBeenCalledWith(
      expect.objectContaining({
        message: 'Та аль хэдийн энэ клубийн гишүүн болсон байна.',
      })
    );
  });

  // --- TestCase 5: Capacity Check (Branch Coverage for maxMember ?? 0) ---
  it('should handle capacity limit and null maxMember', async () => {
    mockedDB.query.students.findFirst.mockResolvedValue({ id: 's1' });
    mockedDB.query.clubs.findFirst.mockResolvedValue({
      id: 'c1',
      maxMember: null,
    }); // Becomes 0
    mockedDB.query.clubMembers.findFirst.mockResolvedValue(null);
    mockedDB.select.mockReturnValue({
      from: jest.fn().mockReturnValue({
        where: jest.fn().mockResolvedValue([{ value: 0 }]),
      }),
    });

    await joinClub({}, mockArgs, mockContext);

    expect(mockedHandleError).toHaveBeenCalledWith(
      expect.objectContaining({ message: 'Клуб дүүрсэн байна.' })
    );
  });

  // --- TestCase 6: Crypto Fallback Coverage ---
  it('should use fallback ID when crypto is unavailable', async () => {
    const originalCrypto = globalThis.crypto;
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
    mockedDB.select.mockReturnValue({
      from: jest
        .fn()
        .mockReturnValue({
          where: jest.fn().mockResolvedValue([{ value: 0 }]),
        }),
    });
    mockedDB.insert.mockReturnValue({
      values: jest
        .fn()
        .mockReturnValue({
          returning: jest.fn().mockResolvedValue([{ id: 'id' }]),
        }),
    });

    await joinClub({}, mockArgs, mockContext);
    expect(mockedDB.insert).toHaveBeenCalled();

    Object.defineProperty(globalThis, 'crypto', { value: originalCrypto });
  });

  // --- TestCase 7: Ban Check ---
  it('should throw error when user is banned', async () => {
    mockedGetBanTtl.mockResolvedValue(60);

    await joinClub({}, mockArgs, mockContext);

    expect(mockedHandleError).toHaveBeenCalledWith(
      expect.objectContaining({
        message: expect.stringContaining('60 секундийн дараа'),
      })
    );
  });
});
