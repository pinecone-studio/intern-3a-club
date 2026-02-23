import { DB } from 'db/drizzle';
import * as clubUtils from 'gql-utils/club';
import { GraphQLError } from 'graphql';
import { createClubWithSchedules } from 'graphql-gql/resolvers/mutations';

// 1. DB-г Mock хийх (Chained methods)
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

describe('createClubWithSchedules', () => {
  // Интерфэйсийн дагуу mock өгөгдөл бэлдэх
  const mockArgs = {
    input: {
      name: 'Test Club',
      description: 'Test Description',
      teacherId: 'teacher-123',
      type: 'mentor',
      minMember: 5,
      maxMember: 20,
    },
    startDate: '2026-02-24',
    classroom: '301',
    startTime: '13:00',
    duration: 60,
    frequency: 'weekly',
  };

  beforeEach(() => {
    jest.clearAllMocks();
    // UUID үүсгэлтийг тогтмол утгатай болгох
    global.crypto.randomUUID = jest.fn().mockReturnValue('mock-club-id');
  });

  it('should successfully create a club and its schedules (Success Path)', async () => {
    // Setup: Клуб амжилттай үүссэн гэж үзэх
    const mockNewClub = { id: 'mock-club-id', ...mockArgs.input };
    const returningMock = jest.fn().mockResolvedValue([mockNewClub]);
    const valuesMock = jest.fn(() => ({ returning: returningMock }));
    (DB.insert as jest.Mock).mockReturnValue({ values: valuesMock });

    // Setup: Utils утгуудыг тохируулах
    (clubUtils.resolveSchedules as jest.Mock).mockReturnValue([
      { id: 't1', clubId: 'mock-club-id', date: '2026-02-24' },
    ]);

    // Execute
    const result = await createClubWithSchedules(null, mockArgs as any);

    // Assertions
    expect(global.crypto.randomUUID).toHaveBeenCalled();
    expect(DB.insert).toHaveBeenCalledTimes(2); // 1. Club, 2. Timetable
    expect(result).toEqual(mockNewClub);
  });

  it('should throw GraphQLError when club creation fails (Empty returning)', async () => {
    // Setup: Insert хийсэн ч утга буцаагүй үе
    const returningMock = jest.fn().mockResolvedValue([]);
    const valuesMock = jest.fn(() => ({ returning: returningMock }));
    (DB.insert as jest.Mock).mockReturnValue({ values: valuesMock });

    // Execute & Assert
    await expect(
      createClubWithSchedules(null, mockArgs as any)
    ).rejects.toThrow(GraphQLError);
  });

  it('should handle and throw GraphQLError on database exception (Catch block)', async () => {
    // Setup: Бааз руу бичихэд шууд алдаа гарах
    (DB.insert as jest.Mock).mockImplementation(() => {
      throw new Error('Database connection lost');
    });

    // Execute & Assert
    await expect(
      createClubWithSchedules(null, mockArgs as any)
    ).rejects.toThrow('Алдаа гарлаа: Database connection lost');
  });
});
