import { DB } from 'db/drizzle';
import { timetable } from 'db/schema';
import { GraphQLError } from 'graphql';
import { updateTimetable } from 'graphql-gql/resolvers/mutations/timetable';

// 1. DB-г Mock хийх
jest.mock('db/drizzle', () => ({
  DB: {
    update: jest.fn(() => ({
      set: jest.fn(() => ({
        where: jest.fn(() => ({
          returning: jest.fn(),
        })),
      })),
    })),
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
    // Тест ажиллах үед терминал дээр илүүц log гаргахгүй байх,
    // мөн дуудлагыг нь хянах зорилгоор mock хийнэ.
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  it('амжилттай зассан үед шинэчлэгдсэн өгөгдлийг буцаах ёстой (Success)', async () => {
    const mockUpdated = { ...mockInput };
    const returningMock = jest.fn().mockResolvedValue([mockUpdated]);

    // DB update chain-ийг тохируулах
    (DB.update as jest.Mock).mockReturnValue({
      set: jest.fn(() => ({
        where: jest.fn(() => ({
          returning: returningMock,
        })),
      })),
    });

    const result = await updateTimetable(null, { input: mockInput });

    // Шалгалтууд
    expect(DB.update).toHaveBeenCalledWith(timetable);
    expect(result).toEqual(mockUpdated);

    // АЛДАА ЗАССАН ХЭСЭГ:
    // console.log-ийн 2 дахь дуудлага (SUCCESS) нь 2 аргументтай: (Текст, Объект)
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('SUCCESS:'),
      expect.objectContaining(mockUpdated)
    );
  });

  it('засах хуваарь олдсонгүй үед Error шидэх ёстой', async () => {
    const returningMock = jest.fn().mockResolvedValue([]); // Хоосон массив буцаах

    (DB.update as jest.Mock).mockReturnValue({
      set: jest.fn(() => ({
        where: jest.fn(() => ({
          returning: returningMock,
        })),
      })),
    });

    // handleMutationError нь алдааг барьж аваад GraphQLError болгож шиддэг гэж үзвэл:
    await expect(updateTimetable(null, { input: mockInput })).rejects.toThrow();
  });

  it('DB-ээс алдаа ирэх үед handleMutationError ажиллах ёстой', async () => {
    // DB.update шууд алдаа шидэх үеийг дуурайх
    (DB.update as jest.Mock).mockImplementation(() => {
      throw new Error('Update Failed');
    });

    await expect(updateTimetable(null, { input: mockInput })).rejects.toThrow(
      /Update Failed/
    );
  });

  it('Error биш зүйл (string) алдаанд ирэх үед Unknown error гэж шидэх ёстой', async () => {
    (DB.update as jest.Mock).mockImplementation(() => {
      throw 'Fatal DB Error';
    });

    await expect(updateTimetable(null, { input: mockInput })).rejects.toThrow(
      /Unknown error/
    );
  });
});
