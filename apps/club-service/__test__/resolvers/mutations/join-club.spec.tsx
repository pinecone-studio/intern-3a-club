import { DB } from 'db/drizzle';
import { handleMutationError } from 'gql-utils';
import * as clubBanUtils from 'gql-utils/club-ban';
import { joinClub } from 'graphql-gql/resolvers/mutations';

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

// 2. Strong Typing (No any)
interface MockDBQuery {
  findFirst: jest.Mock;
}

interface MockDB {
  query: {
    students: MockDBQuery;
    clubs: MockDBQuery;
    clubMembers: MockDBQuery;
  };
  insert: jest.Mock;
  select: jest.Mock;
}

const mockedDB = DB as unknown as MockDB;
const mockedHandleError = handleMutationError as jest.MockedFunction<
  typeof handleMutationError
>;
const mockedGetBanTtl =
  clubBanUtils.getJoinBanTtlSeconds as jest.MockedFunction<
    typeof clubBanUtils.getJoinBanTtlSeconds
  >;

describe('joinClub Mutation - Full Coverage Fix', () => {
  const mockContext = { clerkId: 'user_123' };
  const mockArgs = { clubId: 'club_777' };

  beforeEach(() => {
    jest.clearAllMocks();
    mockedGetBanTtl.mockResolvedValue(0);
  });

  // --- TestCase 1: Branch Coverage (maxMember ?? 0) ---
  it('should handle null maxMember as 0 for capacity check', async () => {
    mockedDB.query.students.findFirst.mockResolvedValue({ id: 's1' });
    mockedDB.query.clubs.findFirst.mockResolvedValue({
      id: 'c1',
      maxMember: null,
    }); // NULL case
    mockedDB.query.clubMembers.findFirst.mockResolvedValue(null);

    mockedDB.select.mockReturnValue({
      from: jest.fn().mockReturnValue({
        where: jest.fn().mockResolvedValue([{ value: 0 }]),
      }),
    });

    await joinClub({}, mockArgs, mockContext);

    // 0 >= 0 тул "Клуб дүүрсэн" алдаа гарч handleMutationError дуудагдана
    expect(mockedHandleError).toHaveBeenCalledWith(
      expect.objectContaining({ message: 'Клуб дүүрсэн байна.' })
    );
  });

  // --- TestCase 2: Line 71 (Catch Block) ---
  it('should cover line 71 by calling handleMutationError on exception', async () => {
    // getClerkIdOrThrow алдаа шидэхэд catch блок руу орно
    const result = await joinClub({}, mockArgs, {});

    expect(result).toBeUndefined();
    expect(mockedHandleError).toHaveBeenCalled();
  });

  // --- TestCase 3: Branch Coverage (createMemberId fallback) ---
  it('should use fallback ID when crypto is unavailable', async () => {
    const originalCrypto = globalThis.crypto;
    // crypto-г түр хугацаанд устгах
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
      from: jest.fn().mockReturnValue({
        where: jest.fn().mockResolvedValue([{ value: 0 }]),
      }),
    });
    mockedDB.insert.mockReturnValue({
      values: jest.fn().mockReturnValue({
        returning: jest.fn().mockResolvedValue([{ id: 'fallback-id' }]),
      }),
    });

    await joinClub({}, mockArgs, mockContext);
    expect(mockedDB.insert).toHaveBeenCalled();

    // Сэргээх
    Object.defineProperty(globalThis, 'crypto', { value: originalCrypto });
  });

  // --- TestCase 4: Branch Coverage (Ban TTL > 0) ---
  it('should throw error when user is currently banned', async () => {
    mockedGetBanTtl.mockResolvedValue(100);

    await joinClub({}, mockArgs, mockContext);

    expect(mockedHandleError).toHaveBeenCalledWith(
      expect.objectContaining({
        message: expect.stringContaining('100 секундийн дараа'),
      })
    );
  });
});
