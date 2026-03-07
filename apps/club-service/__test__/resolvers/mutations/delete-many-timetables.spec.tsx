import { deleteManyTimetables } from '../../../graphql-gql/resolvers/mutations/timetable/delete-many-timetables';
import { DB } from 'db/drizzle';
import { publishClubEvent } from 'gql-utils/realtime-publisher';
import { GraphQLError } from 'graphql';

// 1. Модулиудыг mock хийх
jest.mock('db/drizzle', () => ({
  DB: {
    delete: jest.fn(),
    select: jest.fn(),
    update: jest.fn(),
  },
}));

jest.mock('gql-utils/realtime-publisher', () => ({
  publishClubEvent: jest.fn(),
}));

jest.mock('gql-utils', () => ({
  resolveStartDate: jest.fn(() => '2026-03-01'),
  resolveEndDate: jest.fn(() => '2026-03-31'),
}));

const mockedDB = DB as jest.Mocked<typeof DB>;
const mockedPublish = publishClubEvent as jest.MockedFunction<
  typeof publishClubEvent
>;

describe('deleteManyTimetables - 100% Coverage Fix', () => {
  const mockIds = ['id_1'];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // --- TestCase 1: ids нь null/undefined байх (Branch: !ids?.length) ---
  it('should return false when ids is undefined', async () => {
    // @ts-expect-error: Testing runtime safety
    const result = await deleteManyTimetables(null, { ids: undefined }, {});
    expect(result).toBe(false);
  });

  // --- TestCase 2: clerkId байхгүй үед 'system' ашиглах (Branch: clerkId ?? 'system') ---
  it('should use "system" as default clerkId when context is missing', async () => {
    (mockedDB.delete as jest.Mock).mockReturnValue({
      where: jest.fn().mockReturnThis(),
      returning: jest.fn().mockResolvedValue([{ clubId: 'club_X' }]),
    });

    (mockedDB.select as jest.Mock).mockReturnValue({
      from: jest.fn().mockReturnThis(),
      where: jest.fn().mockResolvedValue([]),
    });

    (mockedDB.update as jest.Mock).mockReturnValue({
      set: jest.fn().mockReturnThis(),
      where: jest.fn().mockResolvedValue({}),
    });

    // Context-ийг undefined эсвэл хоосон явуулна
    await deleteManyTimetables(null, { ids: mockIds }, undefined);

    expect(mockedPublish).toHaveBeenCalledWith(
      expect.objectContaining({
        clerkId: 'system', // Энэ нь 34-р мөр орчмын branch-ийг бүрхэнэ
      })
    );
  });

  // --- TestCase 3: Амжилттай устгах (clerkId-тай) ---
  it('should successfully delete and process affected clubs', async () => {
    (mockedDB.delete as jest.Mock).mockReturnValue({
      where: jest.fn().mockReturnThis(),
      returning: jest.fn().mockResolvedValue([{ clubId: 'club_A' }]),
    });

    (mockedDB.select as jest.Mock).mockReturnValue({
      from: jest.fn().mockReturnThis(),
      where: jest.fn().mockResolvedValue([{ date: '2026-03-05' }]),
    });

    (mockedDB.update as jest.Mock).mockReturnValue({
      set: jest.fn().mockReturnThis(),
      where: jest.fn().mockResolvedValue({}),
    });

    const result = await deleteManyTimetables(
      null,
      { ids: mockIds },
      { clerkId: 'user_1' }
    );
    expect(result).toBe(true);
    expect(mockedPublish).toHaveBeenCalledWith(
      expect.objectContaining({ clerkId: 'user_1' })
    );
  });

  // --- TestCase 4: NOT_FOUND алдаа (performDeletion доторх throw) ---
  it('should throw GraphQLError when deletion returns no items', async () => {
    (mockedDB.delete as jest.Mock).mockReturnValue({
      where: jest.fn().mockReturnThis(),
      returning: jest.fn().mockResolvedValue([]),
    });

    try {
      await deleteManyTimetables(null, { ids: mockIds }, {});
    } catch (e) {
      const error = e as GraphQLError;
      expect(error).toBeInstanceOf(GraphQLError);
      expect(error.message).toBe('Устгах хуваарь олдсонгүй.');
      expect(error.extensions?.code).toBe('NOT_FOUND');
    }
  });

  // --- TestCase 5: Гэнэтийн алдаа (INTERNAL_SERVER_ERROR branch) ---
  it('should handle unexpected errors during deletion', async () => {
    (mockedDB.delete as jest.Mock).mockImplementation(() => {
      throw new Error('Random DB Error');
    });

    try {
      await deleteManyTimetables(null, { ids: mockIds }, {});
    } catch (e) {
      const error = e as GraphQLError;
      expect(error.message).toBe('Олон хуваарь устгахад алдаа гарлаа.');
      expect(error.extensions?.code).toBe('INTERNAL_SERVER_ERROR');
    }
  });
});
