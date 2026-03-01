import { DB } from 'db/drizzle';
import * as utils from 'gql-utils';
import { clubs, teachers, students, timetable } from 'db/schema';
import { createClubWithSchedules } from 'graphql-gql/resolvers/mutations';

const mockChain = {
  from: jest.fn().mockReturnThis(),
  where: jest.fn().mockReturnThis(),
  get: jest.fn(),
  values: jest.fn().mockReturnThis(),
  returning: jest.fn().mockReturnThis(),
};

jest.mock('db/drizzle', () => ({
  DB: {
    select: jest.fn(() => mockChain),
    insert: jest.fn(() => mockChain),
  },
}));

jest.mock('gql-utils', () => ({
  ...jest.requireActual('gql-utils'),
  handleMutationError: jest.fn((err) => {
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
  const mockArgs = {
    input: { name: 'New Club', description: 'Desc' },
    schedules: [
      { date: '2026-03-01', room: 'A1', clubStartTime: '10:00', duration: 60 },
    ],
    frequency: 'WEEKLY',
    clubTerm: 'TERM1',
  } as any;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Багш клуб үүсгэхэд амжилттай ажиллах (Teacher Path)', async () => {
    mockChain.get.mockResolvedValueOnce({ id: 'teacher-id-1' });
    mockChain.returning.mockResolvedValueOnce([
      { id: mockUUID, name: 'New Club' },
    ]);
    mockChain.values.mockReturnThis();

    const result = await createClubWithSchedules(null, mockArgs, mockContext);

    expect(result!.id).toBe(mockUUID);
    expect(DB.insert).toHaveBeenCalledWith(clubs);
    expect(DB.insert).toHaveBeenCalledWith(timetable);
  });

  it('Сурагч клуб үүсгэхэд амжилттай ажиллах (Student Path)', async () => {
    mockChain.get
      .mockResolvedValueOnce(null) // Багш биш
      .mockResolvedValueOnce({ id: 'student-id-1' }); // Сурагч мөн

    mockChain.returning.mockResolvedValueOnce([{ id: mockUUID }]);

    await createClubWithSchedules(null, mockArgs, mockContext);

    expect(DB.select).toHaveBeenCalledTimes(2);
  });

  it('Нэвтрээгүй үед (clerkId байхгүй) алдаа шидэх', async () => {
    await expect(createClubWithSchedules(null, mockArgs, {})).rejects.toThrow(
      'Нэвтрээгүй байна.'
    );
  });

  it('Хэрэглэгч системд бүртгэлгүй бол алдаа шидэх', async () => {
    // Багш ч биш, сурагч ч биш
    mockChain.get.mockResolvedValue(null);

    await expect(
      createClubWithSchedules(null, mockArgs, mockContext)
    ).rejects.toThrow('Хэрэглэгчийн бүртгэл олдсонгүй');
  });

  it('Клуб үүсгэсэн боловч өгөгдөл эргэж ирэхгүй бол алдаа шидэх', async () => {
    mockChain.get.mockResolvedValue({ id: 'any-id' });
    mockChain.returning.mockResolvedValueOnce([]);

    await expect(
      createClubWithSchedules(null, mockArgs, mockContext)
    ).rejects.toThrow('Клуб үүсгэж чадсангүй.');
  });

  it('Schedule байхгүй үед зөвхөн клуб үүсгээд дуусах', async () => {
    mockChain.get.mockResolvedValue({ id: 'user-id' });
    mockChain.returning.mockResolvedValueOnce([{ id: mockUUID }]);

    const argsNoSchedules = { ...mockArgs, schedules: [] };
    await createClubWithSchedules(null, argsNoSchedules, mockContext);

    expect(DB.insert).toHaveBeenCalledTimes(1);
    expect(DB.insert).not.toHaveBeenCalledWith(timetable);
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
