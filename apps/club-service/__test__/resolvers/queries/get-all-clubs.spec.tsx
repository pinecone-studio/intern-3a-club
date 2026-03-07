import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import * as gqlUtils from 'gql-utils';
import { getAllClubs } from 'graphql-gql/resolvers/queries';

// 1. Drizzle Mock - chained functions-ийг бэлдэх
const mockFrom = jest.fn();
jest.mock('db/drizzle', () => ({
  DB: {
    select: jest.fn(() => ({
      from: mockFrom,
    })),
  },
}));

// 2. normalizeFrequency-г mock хийх
jest.mock('gql-utils', () => ({
  normalizeFrequency: jest.fn((val: string) => val.toUpperCase()),
}));

// Mock төрлийг TypeScript-д таниулах
const mockedSelect = DB.select as jest.Mock;
const mockedNormalize = gqlUtils.normalizeFrequency as jest.Mock;

describe('getAllClubs 100% Coverage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // console.error-ыг тестын лог бохирдуулахгүй байх үүднээс mock хийх
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('Клубүүд frequency-тэй байх үед normalize хийж буцаах ёстой (Happy Path)', async () => {
    const mockRows = [
      { id: '1', name: 'Club 1', frequency: 'weekly' },
      { id: '2', name: 'Club 2', frequency: 'once' },
    ];
    mockFrom.mockResolvedValue(mockRows);

    const result = await getAllClubs();

    expect(mockedSelect).toHaveBeenCalled();
    expect(mockFrom).toHaveBeenCalledWith(clubs);
    expect(mockedNormalize).toHaveBeenCalledTimes(2);
    expect(result[0].frequency).toBe('WEEKLY');
    expect(result).toHaveLength(2);
  });

  it('Frequency нь null байвал normalize хийхгүйгээр буцаах ёстой (Line 11 Branch)', async () => {
    const mockRows = [{ id: '3', name: 'Club 3', frequency: null }];
    mockFrom.mockResolvedValue(mockRows);

    const result = await getAllClubs();

    expect(result[0].frequency).toBeNull();
    expect(mockedNormalize).not.toHaveBeenCalled();
  });

  it('DB-ээс ирсэн rows нь массив биш бол хоосон массив буцаах ёстой (Line 9 Branch)', async () => {
    // DB-ээс null эсвэл объект ирсэн гэж үзвэл
    mockFrom.mockResolvedValue(null);

    const result = await getAllClubs();

    expect(result).toEqual([]);
    expect(Array.isArray(result)).toBe(true);
  });

  it('DB-ээс алдаа ирэх үед заасан алдааг шидэх ёстой (Catch block)', async () => {
    mockFrom.mockRejectedValue(new Error('Connection Failed'));

    await expect(getAllClubs()).rejects.toThrow(
      'Клубүүдийн мэдээллийг авахад алдаа гарлаа.'
    );
    expect(console.error).toHaveBeenCalled();
  });
});
