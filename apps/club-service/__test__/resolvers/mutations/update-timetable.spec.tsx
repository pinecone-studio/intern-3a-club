import { DB } from 'db/drizzle';
import { timetable } from 'db/schema';
import { updateTimetable } from 'graphql-gql/resolvers/mutations/timetable';

// 1. Mock-ийг гадна талд зарлаж өгснөөр nesting багасна
const mockReturning = jest.fn();
const mockWhere = jest.fn(() => ({ returning: mockReturning }));
const mockSet = jest.fn(() => ({ where: mockWhere }));

jest.mock('db/drizzle', () => ({
  DB: {
    update: jest.fn(() => ({ set: mockSet })),
  },
}));

describe('updateTimetable Full Coverage', () => {
  const mockInput = {
    id: 'timetable-123',
    date: '2026-03-01',
    room: '305',
    clubStartTime: '15:00',
    duration: 90,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  it('амжилттай зассан үед шинэчлэгдсэн өгөгдлийг буцаах ёстой (Success)', async () => {
    const mockUpdated = { ...mockInput };
    mockReturning.mockResolvedValue([mockUpdated]);

    const result = await updateTimetable(null, { input: mockInput });

    expect(DB.update).toHaveBeenCalledWith(timetable);
    expect(result).toEqual(mockUpdated);
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('SUCCESS:'),
      expect.objectContaining(mockUpdated)
    );
  });

  it('засах хуваарь олдсонгүй үед Error шидэх ёстой', async () => {
    mockReturning.mockResolvedValue([]);

    await expect(updateTimetable(null, { input: mockInput })).rejects.toThrow();
  });

  it('DB-ээс алдаа ирэх үед handleMutationError ажиллах ёстой', async () => {
    (DB.update as jest.Mock).mockImplementationOnce(() => {
      throw new Error('Update Failed');
    });

    await expect(updateTimetable(null, { input: mockInput })).rejects.toThrow(
      /Update Failed/
    );
  });

  it('Error биш зүйл ирэх үед Unknown error гэж шидэх ёстой', async () => {
    (DB.update as jest.Mock).mockImplementationOnce(() => {
      throw 'Fatal DB Error';
    });

    await expect(updateTimetable(null, { input: mockInput })).rejects.toThrow(
      /Unknown error/
    );
  });
});
