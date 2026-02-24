import { DB } from 'db/drizzle';
import * as clubUtils from 'gql-utils/club';
import { GraphQLError } from 'graphql';
import { createClubWithSchedules } from 'graphql-gql/resolvers/mutations';

// 1. DB-г Mock хийх
jest.mock('db/drizzle', () => ({
  DB: {
    insert: jest.fn(() => ({
      values: jest.fn(() => ({
        returning: jest.fn(),
      })),
    })),
  },
}));

// 2. Туслах функцүүдийг (Utils) Mock хийх
jest.mock('gql-utils/club', () => ({
  resolveTeacherId: jest.fn(),
  resolveStatus: jest.fn(),
  resolveType: jest.fn(),
  resolvePreferredTeachers: jest.fn(),
  resolveMinMember: jest.fn(),
  resolveMaxMember: jest.fn(),
  resolveSchedules: jest.fn(),
}));

type CreateClubArgs = Parameters<typeof createClubWithSchedules>[1];

describe('createClubWithSchedules Full Coverage Final', () => {
  const mockArgs = {
    input: {
      name: 'Test Club',
      description: 'Test Description',
      creatorId: 'user-1',
      teacherId: 'teacher-123',
      type: 'mentor' as const,
      minMember: 5,
      maxMember: 20,
    },
    startDate: '2026-02-24',
    classroom: '301',
    startTime: '13:00',
    duration: 60,
    frequency: 'weekly' as const,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    if (global.crypto) {
      Object.defineProperty(global.crypto, 'randomUUID', {
        value: jest.fn().mockReturnValue('mock-club-id'),
        configurable: true,
      });
    }
    // Console log-уудыг тест дээр харуулахгүй байх
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    (console.log as jest.Mock).mockRestore();
  });

  it('should successfully create a club and its schedules (Success Path)', async () => {
    const mockNewClub = { id: 'mock-club-id', name: 'Test Club' };
    const returningMock = jest.fn().mockResolvedValue([mockNewClub]);
    (DB.insert as jest.Mock).mockReturnValue({
      values: jest.fn(() => ({ returning: returningMock })),
    });

    (clubUtils.resolveSchedules as jest.Mock).mockReturnValue([
      { id: 's1', clubId: 'mock-club-id', date: '2026-02-24' },
    ]);

    const result = await createClubWithSchedules(
      null,
      mockArgs as unknown as CreateClubArgs
    );

    expect(DB.insert).toHaveBeenCalledTimes(2);
    expect(result).toEqual(mockNewClub);
  });

  /**
   * COVERAGE FIX: Line 17 Branch Coverage
   * Optional field бүрийг undefined-аар дамжуулж, branch-уудыг бүрэн ажиллуулна.
   */
  it('should handle missing optional fields to reach 100% branch coverage', async () => {
    const mockNewClub = { id: 'mock-club-id', name: 'Minimal Club' };
    const returningMock = jest.fn().mockResolvedValue([mockNewClub]);
    (DB.insert as jest.Mock).mockReturnValue({
      values: jest.fn(() => ({ returning: returningMock })),
    });

    (clubUtils.resolveSchedules as jest.Mock).mockReturnValue([]);

    // Line 17-ийн branch-ийг "уншуулахын" тулд бүх optional талбаруудыг undefined өгнө
    const minimalArgs = {
      input: {
        name: 'Minimal Club',
        description: undefined,
        creatorId: undefined,
        teacherId: undefined,
        type: undefined,
        preferredTeachers: undefined,
        minMember: undefined,
        maxMember: undefined,
      },
      startDate: '2026-02-24',
    };

    const result = await createClubWithSchedules(
      null,
      minimalArgs as unknown as CreateClubArgs
    );

    expect(result).toBeDefined();
    expect(DB.insert).toHaveBeenCalled();
    // Resolve функцүүд undefined-тай дуудагдсан эсэхийг баталгаажуулна
    expect(clubUtils.resolveTeacherId).toHaveBeenCalledWith(undefined);
    expect(clubUtils.resolveStatus).toHaveBeenCalledWith(undefined);
  });

  it('should throw GraphQLError when club creation fails (Empty returning)', async () => {
    const returningMock = jest.fn().mockResolvedValue([]);
    (DB.insert as jest.Mock).mockReturnValue({
      values: jest.fn(() => ({ returning: returningMock })),
    });

    await expect(
      createClubWithSchedules(null, mockArgs as unknown as CreateClubArgs)
    ).rejects.toThrow(GraphQLError);
  });

  it('should handle and throw GraphQLError on database exception (Catch block)', async () => {
    (DB.insert as jest.Mock).mockImplementation(() => {
      throw new Error('Database Error');
    });

    await expect(
      createClubWithSchedules(null, mockArgs as unknown as CreateClubArgs)
    ).rejects.toThrow('Алдаа гарлаа: Database Error');
  });

  it('should handle non-Error objects in catch block', async () => {
    // Error биш "String" алдаа шидэх үед handleMutationError ажиллаж буйг шалгах
    (DB.insert as jest.Mock).mockImplementation(() => {
      throw 'String Error';
    });

    await expect(
      createClubWithSchedules(null, mockArgs as unknown as CreateClubArgs)
    ).rejects.toThrow('Алдаа гарлаа: Unknown error');
  });
});
