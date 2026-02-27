import { DB } from 'db/drizzle';
import * as utils from 'gql-utils';
import { createClubWithSchedules } from 'graphql-gql/resolvers/mutations';

// 1. DB Mock
jest.mock('db/drizzle', () => ({
  DB: {
    insert: jest.fn(() => ({
      values: jest.fn(() => ({
        returning: jest.fn(),
      })),
    })),
  },
}));

// 2. Utils Mock
jest.mock('gql-utils', () => ({
  resolveTeacherId: jest.fn(),
  resolveStatus: jest.fn(),
  resolveType: jest.fn(),
  resolvePreferredTeachers: jest.fn(),
  resolveMinMember: jest.fn(),
  resolveMaxMember: jest.fn(),
  resolveFrequency: jest.fn(),
  resolveTerm: jest.fn(),
  handleMutationError: jest.fn((err) => {
    throw err;
  }),
}));

// 3. Crypto-г гараараа тодорхойлох (randomUUID алдааг засна)
Object.defineProperty(global, 'crypto', {
  value: {
    randomUUID: jest.fn().mockReturnValue('mock-uuid'),
  },
  configurable: true,
});

type CreateClubArgs = Parameters<typeof createClubWithSchedules>[1];

describe('createClubWithSchedules Final Coverage Fix', () => {
  const mockArgs: CreateClubArgs = {
    input: {
      name: 'Test Club',
      description: 'Desc',
      creatorId: 'user-1',
      teacherId: 'teacher-1',
      type: 'mentor',
    },
    schedules: [
      {
        date: '2026-02-28',
        classroom: '301',
        startTime: '13:00',
        duration: 60,
      },
    ],
    frequency: 'WEEKLY',
    clubTerm: '3',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // SUCCESS PATH (Covers getClubValues, getTimetableValues, insertSchedules)
  it('should successfully create club and schedules', async () => {
    const mockNewClub = { id: 'mock-uuid', name: 'Test Club' };
    const returningMock = jest.fn().mockResolvedValue([mockNewClub]);

    (DB.insert as jest.Mock).mockReturnValue({
      values: jest.fn(() => ({ returning: returningMock })),
    });

    const result = await createClubWithSchedules(null, mockArgs);

    expect(DB.insert).toHaveBeenCalledTimes(2); // 1. Club, 2. Timetable
    expect(result).toEqual(mockNewClub);
  });

  // MINIMAL INPUT (Covers undefined branches in insertSchedules)
  it('should handle minimal input and skip schedules', async () => {
    const mockNewClub = { id: 'mock-uuid', name: 'Min' };
    (DB.insert as jest.Mock).mockReturnValue({
      values: jest.fn(() => ({
        returning: jest.fn().mockResolvedValue([mockNewClub]),
      })),
    });

    const minimalArgs = {
      input: { name: 'Min' },
      frequency: 'ONCE',
      schedules: undefined, // undefined schedules branch-ийг уншуулна
    } as any;

    await createClubWithSchedules(null, minimalArgs);

    // schedules байхгүй үед insert 1 л удаа дуудагдана
    expect(DB.insert).toHaveBeenCalledTimes(1);
  });

  it('should skip schedules if array is empty', async () => {
    const mockNewClub = { id: 'mock-uuid', name: 'Empty' };
    (DB.insert as jest.Mock).mockReturnValue({
      values: jest.fn(() => ({
        returning: jest.fn().mockResolvedValue([mockNewClub]),
      })),
    });

    const argsWithEmptySchedules = { ...mockArgs, schedules: [] }; // empty array branch
    await createClubWithSchedules(null, argsWithEmptySchedules);

    expect(DB.insert).toHaveBeenCalledTimes(1);
  });

  // ERROR BRANCH (Covers "if (!newClub)" check)
  it('should throw error if club creation returns empty array', async () => {
    (DB.insert as jest.Mock).mockReturnValue({
      values: jest.fn(() => ({
        returning: jest.fn().mockResolvedValue([]),
      })),
    });

    await expect(createClubWithSchedules(null, mockArgs)).rejects.toThrow(
      'Клуб үүсгэж чадсангүй.'
    );
  });

  // CATCH BLOCK
  it('should trigger handleMutationError on catch', async () => {
    const dbError = new Error('SQL Error');
    (DB.insert as jest.Mock).mockImplementation(() => {
      throw dbError;
    });

    try {
      await createClubWithSchedules(null, mockArgs);
    } catch (e) {
      expect(utils.handleMutationError).toHaveBeenCalledWith(dbError);
    }
  });
});
