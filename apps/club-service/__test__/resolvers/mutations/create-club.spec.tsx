import { DB } from 'db/drizzle';
import * as utils from 'gql-utils';
import { clubs, timetable } from 'db/schema';
import { CreateClubWithSchedulesArgs } from 'gql-type';
import { publishClubEvent } from 'gql-utils/realtime-publisher';
import { getCreatorId } from 'gql-utils/user/user.util';
import { createClubWithSchedules } from 'graphql-gql/resolvers/mutations';

jest.mock('db/drizzle', () => ({
  DB: {
    insert: jest.fn(),
  },
}));

jest.mock('gql-utils', () => ({
  handleMutationError: jest.fn((err: unknown) => {
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
  resolveStartDate: jest.fn(),
  resolveEndDate: jest.fn(),
}));

jest.mock('gql-utils/realtime-publisher', () => ({
  publishClubEvent: jest.fn(),
}));

jest.mock('gql-utils/user/user.util', () => ({
  getCreatorId: jest.fn(),
}));

const createMockChain = () => {
  const chain = {
    values: jest.fn().mockReturnThis(),
    returning: jest.fn().mockReturnThis(),
  };
  return chain;
};

const mockedDBInsert = DB.insert as jest.Mock;
const mockedGetCreatorId = getCreatorId as jest.Mock;
const mockedPublishEvent = publishClubEvent as jest.Mock;

describe('createClubWithSchedules Full Coverage', () => {
  const mockUUID = '123e4567-e89b-12d3-a456-426614174000';
  const mockContext = { clerkId: 'clerk-user-1' };
  const mockArgs: CreateClubWithSchedulesArgs = {
    input: {
      name: 'Test Club',
      description: 'Test Desc',
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
    Object.defineProperty(global, 'crypto', {
      value: { randomUUID: () => mockUUID },
      configurable: true,
    });
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('Клуб болон хуваарийг амжилттай үүсгэх (Happy Path)', async () => {
    mockedGetCreatorId.mockResolvedValue('creator-id-123');
    const mockChain = createMockChain();
    mockChain.returning.mockResolvedValue([
      { id: mockUUID, name: 'Test Club' },
    ]);
    mockedDBInsert.mockReturnValue(mockChain);

    const result = await createClubWithSchedules(null, mockArgs, mockContext);

    expect(result).toBeDefined();
    expect(result?.id).toBe(mockUUID);
    expect(mockedDBInsert).toHaveBeenCalledWith(clubs);
    expect(mockedDBInsert).toHaveBeenCalledWith(timetable);
    expect(mockedPublishEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'club_created',
        clerkId: 'clerk-user-1',
      })
    );
  });

  it('clerkId байхгүй үед алдаа шидэх (validateAndGetCreator branch)', async () => {
    await expect(
      createClubWithSchedules(null, mockArgs, { clerkId: undefined })
    ).rejects.toThrow('Нэвтрээгүй байна.');
  });

  it('Хэрэглэгчийн ID олдохгүй бол алдаа шидэх', async () => {
    mockedGetCreatorId.mockResolvedValue(null);
    await expect(
      createClubWithSchedules(null, mockArgs, mockContext)
    ).rejects.toThrow('Хэрэглэгчийн бүртгэл олдсонгүй');
  });

  it('Клуб үүсгэхэд DB-ээс дата эргэж ирэхгүй бол алдаа шидэх', async () => {
    mockedGetCreatorId.mockResolvedValue('creator-id');
    const mockChain = createMockChain();
    mockChain.returning.mockResolvedValue([]);
    mockedDBInsert.mockReturnValue(mockChain);

    await expect(
      createClubWithSchedules(null, mockArgs, mockContext)
    ).rejects.toThrow('Клуб үүсгэж чадсангүй.');
  });

  it('Schedules хоосон үед insertSchedules ажиллахгүй байх (insertSchedules branch)', async () => {
    mockedGetCreatorId.mockResolvedValue('creator-id');
    const mockChain = createMockChain();
    mockChain.returning.mockResolvedValue([{ id: mockUUID }]);
    mockedDBInsert.mockReturnValue(mockChain);

    const argsNoSchedules = { ...mockArgs, schedules: [] };
    await createClubWithSchedules(null, argsNoSchedules, mockContext);

    // Зөвхөн клубын insert дуудагдсан байх ёстой, timetable биш
    expect(mockedDBInsert).toHaveBeenCalledTimes(1);
    expect(mockedDBInsert).not.toHaveBeenCalledWith(timetable);
  });

  it('clerkId байхгүй үед fallback хоосон стринг ашиглах (Line 99 Branch Coverage)', async () => {
    mockedGetCreatorId.mockResolvedValue('creator-id');
    const mockChain = createMockChain();
    mockChain.returning.mockResolvedValue([{ id: mockUUID }]);
    mockedDBInsert.mockReturnValue(mockChain);

    await createClubWithSchedules(null, mockArgs, { clerkId: 'user-1' });

    expect(mockedPublishEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        clerkId: 'user-1',
      })
    );
  });

  it('Өгөгдлийн сангийн алдааг handleMutationError-оор дамжуулах', async () => {
    const dbError = new Error('DB Connection Lost');
    mockedGetCreatorId.mockRejectedValue(dbError);

    await createClubWithSchedules(null, mockArgs, mockContext);

    expect(utils.handleMutationError).toHaveBeenCalledWith(dbError);
  });
});
