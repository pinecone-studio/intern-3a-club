import { updateManyTimetables } from '../../../graphql-gql/resolvers/mutations/timetable/update-many-timetables';
import { DB } from 'db/drizzle';
import { publishClubEvent } from 'gql-utils/realtime-publisher';
import { handleMutationError } from 'gql-utils';

jest.mock('db/drizzle', () => ({
  DB: {
    update: jest.fn(),
    select: jest.fn(),
  },
}));

jest.mock('gql-utils/realtime-publisher', () => ({
  publishClubEvent: jest.fn(),
}));

jest.mock('gql-utils', () => ({
  handleMutationError: jest.fn(),
  resolveStartDate: jest.fn(() => '2026-03-01'),
  resolveEndDate: jest.fn(() => '2026-03-31'),
}));

const mockedDB = DB as jest.Mocked<typeof DB>;
const mockedHandleError = handleMutationError as jest.MockedFunction<
  typeof handleMutationError
>;
const mockedPublish = publishClubEvent as jest.MockedFunction<
  typeof publishClubEvent
>;

describe('updateManyTimetables Final Coverage Fix', () => {
  const mockInput = {
    id: '1',
    date: '2026-03-10',
    room: 'R1',
    clubStartTime: '10:00',
    duration: 60,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // 1. Branch: inputs нь null эсвэл хоосон байх үе
  it('should return empty array if inputs are missing', async () => {
    // @ts-expect-error: testing runtime safety
    const result = await updateManyTimetables(null, { inputs: null }, {});
    expect(result).toEqual([]);
  });

  // 2. Branch: clerkId байхгүй үед 'system' утга авах хэсэг (clerkId ?? 'system')
  it('should use system as default clerkId when context is missing', async () => {
    (mockedDB.update as jest.Mock).mockReturnValue({
      set: jest.fn().mockReturnThis(),
      where: jest.fn().mockReturnThis(),
      returning: jest.fn().mockResolvedValue([{ id: '1', clubId: 'club_A' }]),
    });

    (mockedDB.select as jest.Mock).mockReturnValue({
      from: jest.fn().mockReturnThis(),
      where: jest.fn().mockResolvedValue([{ date: '2026-03-10' }]),
    });

    // Context дамжуулахгүй (clerkId undefined болно)
    await updateManyTimetables(null, { inputs: [mockInput] }, undefined);

    expect(mockedPublish).toHaveBeenCalledWith(
      expect.objectContaining({ clerkId: 'system' })
    );
  });

  // 3. Branch: ensureUpdated(0) буюу шинэчлэх өгөгдөл олдоогүй үе
  it('should throw error via ensureUpdated when no records match', async () => {
    (mockedDB.update as jest.Mock).mockReturnValue({
      set: jest.fn().mockReturnThis(),
      where: jest.fn().mockReturnThis(),
      returning: jest.fn().mockResolvedValue([]), // Update юу ч буцаасангүй
    });

    await updateManyTimetables(
      null,
      { inputs: [mockInput] },
      { clerkId: 'user_1' }
    );

    expect(mockedHandleError).toHaveBeenCalledWith(
      new Error('Шинэчлэх хуваарь олдсонгүй.')
    );
  });

  // 4. Branch: try-catch block-ын catch хэсэг (Алдаа гарахад undefined буцаах)
  it('should return undefined and handle error when DB fails', async () => {
    (mockedDB.update as jest.Mock).mockImplementation(() => {
      throw new Error('Fatal DB Error');
    });

    const result = await updateManyTimetables(
      null,
      { inputs: [mockInput] },
      { clerkId: 'user_1' }
    );

    expect(result).toBeUndefined();
    expect(mockedHandleError).toHaveBeenCalled();
  });

  // 5. Branch: Happy path (Бүх хэсэг амжилттай)
  it('should update multiple schedules and sync clubs', async () => {
    (mockedDB.update as jest.Mock).mockReturnValue({
      set: jest.fn().mockReturnThis(),
      where: jest.fn().mockReturnThis(),
      returning: jest.fn().mockResolvedValue([{ id: '1', clubId: 'club_A' }]),
    });

    (mockedDB.select as jest.Mock).mockReturnValue({
      from: jest.fn().mockReturnThis(),
      where: jest.fn().mockResolvedValue([{ date: '2026-03-10' }]),
    });

    const result = await updateManyTimetables(
      null,
      { inputs: [mockInput] },
      { clerkId: 'user_1' }
    );

    expect(result).toHaveLength(1);
    expect(mockedPublish).toHaveBeenCalledTimes(1);
  });
});
