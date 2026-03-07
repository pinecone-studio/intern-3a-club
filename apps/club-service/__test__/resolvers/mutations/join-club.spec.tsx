import { DB } from 'db/drizzle';
import { handleMutationError } from 'gql-utils'; // 2-р мөр: Одоо доор тестэд ашиглагдана
import { joinClub } from 'graphql-gql/resolvers/mutations/club-members/join-club';
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
  handleMutationError: jest.fn((err) => {
    throw err;
  }),
}));

jest.mock('gql-utils/club-ban', () => ({
  getJoinBanTtlSeconds: jest.fn(),
}));

jest.mock('gql-utils/realtime-publisher', () => ({
  publishClubEvent: jest.fn(),
}));

// Any-г арилгаж, Jest Mock төрөл оноов
const mockedDB = DB as unknown as {
  query: {
    students: { findFirst: jest.Mock };
    clubs: { findFirst: jest.Mock };
    clubMembers: { findFirst: jest.Mock };
  };
  insert: jest.Mock;
  select: jest.Mock;
};

describe('joinClub Mutation - Full Coverage', () => {
  const mockContext = { clerkId: 'user_123' };
  const mockArgs = { clubId: 'club_777' };

  const setupCountMock = (countValue: number) => {
    const mockWhere = jest.fn().mockResolvedValue([{ value: countValue }]);
    const mockFrom = jest.fn().mockReturnValue({ where: mockWhere });
    mockedDB.select.mockReturnValue({ from: mockFrom });
  };

  const setupInsertMock = (returnValue: unknown) => {
    const mockReturning = jest.fn().mockResolvedValue(returnValue);
    const mockValues = jest.fn().mockReturnValue({ returning: mockReturning });
    mockedDB.insert.mockReturnValue({ values: mockValues });
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (clubBanUtils.getJoinBanTtlSeconds as jest.Mock).mockResolvedValue(0);

    // fetch is not defined алдааг дарах
    if (!global.fetch) {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ success: true }),
        })
      ) as jest.Mock;
    }
  });

  it('Амжилттай нэгдэх (Crypto Fallback Line 13-14 Coverage)', async () => {
    const originalCrypto = globalThis.crypto;
    Object.defineProperty(globalThis, 'crypto', {
      value: undefined,
      configurable: true,
      writable: true,
    });

    mockedDB.query.students.findFirst.mockResolvedValue({ id: 's1' });
    mockedDB.query.clubs.findFirst.mockResolvedValue({
      id: 'c1',
      maxMember: 10,
    });
    mockedDB.query.clubMembers.findFirst.mockResolvedValue(null);
    setupCountMock(5);
    setupInsertMock([{ id: 'm1' }]);

    const result = await joinClub({}, mockArgs, mockContext);

    expect(result).toBeDefined();
    expect(realtimePublisher.publishClubEvent).toHaveBeenCalled();

    Object.defineProperty(globalThis, 'crypto', {
      value: originalCrypto,
      configurable: true,
    });
  });

  it('handleMutationError: Алдааг барьж авах (Line 76 coverage & Unused var fix)', async () => {
    const dbError = new Error('DB Error');
    mockedDB.query.students.findFirst.mockRejectedValue(dbError);

    try {
      await joinClub({}, mockArgs, mockContext);
    } catch {
      // Catch блок ажиллана
    }

    expect(handleMutationError).toHaveBeenCalledWith(dbError);
  });

  it('Нэвтрээгүй үед алдаа заана', async () => {
    await expect(
      joinClub({}, mockArgs, { clerkId: undefined })
    ).rejects.toThrow('Нэвтрээгүй байна.');
  });

  it('Сурагчийн бүртгэл олдсонгүй', async () => {
    mockedDB.query.students.findFirst.mockResolvedValue(null);
    await expect(joinClub({}, mockArgs, mockContext)).rejects.toThrow(
      'Сурагчийн бүртгэл олдсонгүй.'
    );
  });

  it('Клуб олдсонгүй', async () => {
    mockedDB.query.students.findFirst.mockResolvedValue({ id: 's1' });
    mockedDB.query.clubs.findFirst.mockResolvedValue(null);
    await expect(joinClub({}, mockArgs, mockContext)).rejects.toThrow(
      'Клуб олдсонгүй.'
    );
  });

  it('Аль хэдийн гишүүн болсон бол', async () => {
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

  it('Клуб дүүрсэн байна', async () => {
    mockedDB.query.students.findFirst.mockResolvedValue({ id: 's1' });
    mockedDB.query.clubs.findFirst.mockResolvedValue({
      id: 'c1',
      maxMember: 5,
    });
    mockedDB.query.clubMembers.findFirst.mockResolvedValue(null);
    setupCountMock(5);
    await expect(joinClub({}, mockArgs, mockContext)).rejects.toThrow(
      'Клуб дүүрсэн байна.'
    );
  });
});
