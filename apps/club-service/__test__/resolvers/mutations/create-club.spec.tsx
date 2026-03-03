import { DB } from 'db/drizzle';
import * as utils from 'gql-utils';
import { clubs } from 'db/schema';
import { createClubWithSchedules } from 'graphql-gql/resolvers/mutations/clubs/create-club';
import { CreateClubWithSchedulesArgs } from 'gql-type';

interface MockChain {
  from: jest.Mock;
  where: jest.Mock;
  get: jest.Mock;
  values: jest.Mock;
  returning: jest.Mock;
}

const mockChain: MockChain = {
  from: jest.fn().mockReturnThis(),
  where: jest.fn().mockReturnThis(),
  get: jest.fn(),
  values: jest.fn().mockReturnThis(),
  returning: jest.fn().mockReturnThis(),
};

// Drizzle ORM-ийг Mock хийх
jest.mock('db/drizzle', () => ({
  DB: {
    select: jest.fn(() => mockChain),
    insert: jest.fn(() => mockChain),
    transaction: jest.fn(async (cb: (_tx: unknown) => Promise<unknown>) => {
      return cb({
        insert: jest.fn(() => mockChain),
      });
    }),
  },
}));

// GQL Utils-ийг Mock хийх
jest.mock('gql-utils', () => ({
  ...jest.requireActual('gql-utils'),
  handleMutationError: jest.fn((err: Error) => {
    throw err;
  }),
  resolveTeacherId: jest.fn(),
  resolveStatus: jest.fn(),
  resolveType: jest.fn(),
  resolvePreferredTeachers: jest.fn(),
  resolveMinMember: jest.fn(),
  resolveMaxMember: jest.fn(),
  resolveFrequency: jest.fn(),
  resolveTerm: jest.fn(),
}));

const mockUUID = 'mock-uuid-123';
Object.defineProperty(global, 'crypto', {
  value: { randomUUID: () => mockUUID },
  configurable: true,
});

describe('createClubWithSchedules Full Coverage', () => {
  const mockContext = { clerkId: 'clerk-user-1' };

  const mockArgs: CreateClubWithSchedulesArgs = {
    input: {
      name: 'New Club',
      description: 'Desc',
      teacherId: 'teacher-1',
      type: 'ACADEMIC',
      minMember: 5,
      maxMember: 20,
      preferredTeachers: [],
    },
    schedules: [
      { date: '2026-03-01', room: 'A1', clubStartTime: '10:00', duration: 60 },
    ],
    frequency: 'WEEKLY',
    clubTerm: 'TERM1',
  };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    (console.error as jest.Mock).mockRestore();
  });

  it('Багш клуб үүсгэхэд амжилттай ажиллах (Teacher Path)', async () => {
    mockChain.get.mockResolvedValueOnce({ id: 'teacher-id-1' });
    mockChain.returning.mockResolvedValueOnce([
      { id: mockUUID, name: 'New Club' },
    ]);

    const result = await createClubWithSchedules(null, mockArgs, mockContext);

    expect(result?.id).toBe(mockUUID);
    expect(DB.insert).toHaveBeenCalledWith(clubs);
  });

  it('Сурагч клуб үүсгэхэд амжилттай ажиллах (Student Path)', async () => {
    mockChain.get
      .mockResolvedValueOnce(null)
      .mockResolvedValueOnce({ id: 'student-id-1' });

    mockChain.returning.mockResolvedValueOnce([{ id: mockUUID }]);

    await createClubWithSchedules(null, mockArgs, mockContext);

    expect(DB.select).toHaveBeenCalledTimes(2);
  });

  it('Нэвтрээгүй үед (clerkId байхгүй) алдаа шидэх', async () => {
    const unauthContext = { clerkId: undefined };

    await expect(
      createClubWithSchedules(
        null,
        mockArgs,
        unauthContext as unknown as typeof mockContext
      )
    ).rejects.toThrow();
  });

  it('Хэрэглэгч системд бүртгэлгүй бол алдаа шидэх', async () => {
    mockChain.get.mockResolvedValue(null);

    await expect(
      createClubWithSchedules(null, mockArgs, mockContext)
    ).rejects.toThrow();
  });

  it('Клуб үүсгэсэн боловч өгөгдөл эргэж ирэхгүй бол алдаа шидэх', async () => {
    mockChain.get.mockResolvedValue({ id: 'any-id' });
    mockChain.returning.mockResolvedValueOnce([]);

    await expect(
      createClubWithSchedules(null, mockArgs, mockContext)
    ).rejects.toThrow();
  });

  it('Schedule байхгүй үед зөв ажиллах', async () => {
    mockChain.get.mockResolvedValue({ id: 'user-id' });
    mockChain.returning.mockResolvedValueOnce([{ id: mockUUID }]);

    const argsNoSchedules = { ...mockArgs, schedules: [] };
    await createClubWithSchedules(null, argsNoSchedules, mockContext);

    expect(DB.insert).toHaveBeenCalled();
  });

  it('Өгөгдлийн сангийн алдааг handleMutationError барьж авах', async () => {
    const sqlError = new Error('Database Crash');
    mockChain.get.mockRejectedValue(sqlError);

    try {
      await createClubWithSchedules(null, mockArgs, mockContext);
    } catch (e) {
      expect(utils.handleMutationError).toHaveBeenCalledWith(sqlError);
    }
  });
});
