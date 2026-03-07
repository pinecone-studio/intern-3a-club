import { DB } from 'db/drizzle';
import * as gqlUtils from 'gql-utils';
import { getAllPendingClubs } from 'graphql-gql/resolvers/queries';

// 1. Drizzle Chain Mocks
const mockWhere = jest.fn();
const mockFrom = jest.fn(() => ({ where: mockWhere }));

jest.mock('db/drizzle', () => ({
  DB: {
    select: jest.fn(() => ({ from: mockFrom })),
  },
}));

// 2. Utils Mock
jest.mock('gql-utils', () => ({
  normalizeFrequency: jest.fn((val: string) => val.toUpperCase()),
}));

// Mock төрлүүдийг тодорхойлох
const mockedSelect = DB.select as jest.Mock;
const mockedNormalize = gqlUtils.normalizeFrequency as jest.Mock;

describe('getAllPendingClubs 100% Coverage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // console.error-ыг тест дээр харуулахгүй байх
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('хүлээгдэж буй клубүүдийг frequency-тэй нь амжилттай буцаах ёстой (Happy Path)', async () => {
    const mockRows = [
      { id: '1', name: 'Club 1', status: 'pending', frequency: 'weekly' },
    ];
    mockWhere.mockResolvedValue(mockRows);

    const result = await getAllPendingClubs();

    expect(mockedSelect).toHaveBeenCalled();
    expect(mockWhere).toHaveBeenCalled();
    expect(mockedNormalize).toHaveBeenCalledWith('weekly');
    expect(result[0].frequency).toBe('WEEKLY');
  });

  it('Frequency нь null байвал normalize хийхгүйгээр буцаах ёстой (Branch: frequency != null)', async () => {
    const mockRows = [
      { id: '2', name: 'Club 2', status: 'pending', frequency: null },
    ];
    mockWhere.mockResolvedValue(mockRows);

    const result = await getAllPendingClubs();

    expect(result[0].frequency).toBeNull();
    expect(mockedNormalize).not.toHaveBeenCalled();
  });

  it('DB-ээс массив биш утга ирвэл хоосон массив буцаах ёстой (Branch: Array.isArray)', async () => {
    // DB-ээс null ирсэн гэж үзье
    mockWhere.mockResolvedValue(null);

    const result = await getAllPendingClubs();

    expect(result).toEqual([]);
    expect(Array.isArray(result)).toBe(true);
  });

  it('Алдаа гарсан үед console.error дуудаж, заасан мессежийг шидэх ёстой (Catch block)', async () => {
    const dbError = new Error('Connection Fail');
    mockWhere.mockRejectedValue(dbError);

    await expect(getAllPendingClubs()).rejects.toThrow(
      'Хүлээгдэж буй клубүүдийн мэдээллийг авахад алдаа гарлаа.'
    );
    expect(console.error).toHaveBeenCalledWith(
      'Error in getAllPendingClubs:',
      dbError
    );
  });
});
