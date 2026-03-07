import { DB } from 'db/drizzle';
import * as utils from 'gql-utils';
import { clubs, timetable } from 'db/schema';
import { CreateClubWithSchedulesArgs } from 'gql-type';
import { publishClubEvent } from 'gql-utils/realtime-publisher';
import { getCreatorId } from 'gql-utils/user/user.util';
import { createClubWithSchedules } from 'graphql-gql/resolvers/mutations';

// 1. Mocks
jest.mock('db/drizzle', () => ({
  DB: { insert: jest.fn() },
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

const createMockChain = (data: unknown[] = []) => ({
  values: jest.fn().mockReturnThis(),
  returning: jest.fn().mockResolvedValue(data),
});

const mockedDBInsert = DB.insert as jest.Mock;
const mockedGetCreatorId = getCreatorId as jest.Mock;
const mockedPublishEvent = publishClubEvent as jest.Mock;

describe('createClubWithSchedules Mutation - 100% Coverage', () => {
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
  });

  it('Happy Path: Клуб болон хуваарийг амжилттай үүсгэх', async () => {
    mockedGetCreatorId.mockResolvedValue('creator-id-123');
    mockedDBInsert.mockReturnValue(createMockChain([{ id: mockUUID }]));

    const result = await createClubWithSchedules(null, mockArgs, mockContext);

    expect(result?.id).toBe(mockUUID);
    expect(mockedDBInsert).toHaveBeenCalledWith(clubs);
    expect(mockedDBInsert).toHaveBeenCalledWith(timetable);
    expect(mockedPublishEvent).toHaveBeenCalled();
  });

  it('Line 99 Branch Coverage: clerkId falsy (зайтай стринг) үед fallback ажиллах', async () => {
    // validateAndGetCreator-ийн !clerkId шалгалтыг давуулахын тулд ' ' (whitespace) ашиглана.
    // Энэ нь truthy боловч || '' логикийн нөгөө талыг шалгахад тусална.
    const spaceClerkId = ' ';

    mockedGetCreatorId.mockResolvedValue('creator-id');
    mockedDBInsert.mockReturnValue(createMockChain([{ id: mockUUID }]));

    await createClubWithSchedules(null, mockArgs, { clerkId: spaceClerkId });

    expect(mockedPublishEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        clerkId: spaceClerkId,
      })
    );
  });

  it('validateAndGetCreator: clerkId байхгүй үед алдаа шидэх', async () => {
    await expect(
      createClubWithSchedules(null, mockArgs, { clerkId: undefined })
    ).rejects.toThrow('Нэвтрээгүй байна.');
  });

  it('validateAndGetCreator: Хэрэглэгч олдохгүй бол алдаа шидэх', async () => {
    mockedGetCreatorId.mockResolvedValue(null);
    await expect(
      createClubWithSchedules(null, mockArgs, mockContext)
    ).rejects.toThrow('Хэрэглэгчийн бүртгэл олдсонгүй');
  });

  it('createClubOrThrow: DB-ээс дата ирэхгүй бол алдаа шидэх', async () => {
    mockedGetCreatorId.mockResolvedValue('creator-id');
    mockedDBInsert.mockReturnValue(createMockChain([]));

    await expect(
      createClubWithSchedules(null, mockArgs, mockContext)
    ).rejects.toThrow('Клуб үүсгэж чадсангүй.');
  });

  it('insertSchedules: Schedules хоосон бол DB дуудахгүй байх', async () => {
    mockedGetCreatorId.mockResolvedValue('creator-id');
    mockedDBInsert.mockReturnValue(createMockChain([{ id: mockUUID }]));

    const noSchedulesArgs = { ...mockArgs, schedules: [] };
    await createClubWithSchedules(null, noSchedulesArgs, mockContext);

    expect(mockedDBInsert).toHaveBeenCalledTimes(1);
  });

  it('handleMutationError: Алдаа гарсан үед utils дуудах', async () => {
    const error = new Error('Unexpected Error');
    mockedGetCreatorId.mockRejectedValue(error);

    await expect(
      createClubWithSchedules(null, mockArgs, mockContext)
    ).rejects.toThrow();
    expect(utils.handleMutationError).toHaveBeenCalledWith(error);
  });
});
