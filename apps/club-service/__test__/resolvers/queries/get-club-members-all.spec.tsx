import { DB } from 'db/drizzle';
import { clubMembers } from 'db/schema';
import { getClubMembersAll } from 'graphql-gql/resolvers/queries';

// 1. Drizzle Mock хийх
jest.mock('db/drizzle', () => ({
  DB: {
    select: jest.fn().mockReturnThis(),
    from: jest.fn().mockReturnThis(),
    where: jest.fn(),
  },
}));

const mockedDB = DB as unknown as {
  select: jest.Mock;
  from: jest.Mock;
  where: jest.Mock;
};

describe('getClubMembersAll Query', () => {
  const mockClubId = 'club_123';

  beforeEach(() => {
    jest.clearAllMocks();
    // Console error-ыг тест дээр харуулахгүй байх (цэвэр байлгах үүднээс)
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  // TEST 1: Амжилттай гишүүдийг авах (Happy Path)
  it('should return all members of a specific club', async () => {
    const mockMembers = [
      { id: '1', clubId: mockClubId, studentId: 's1' },
      { id: '2', clubId: mockClubId, studentId: 's2' },
    ];

    // Drizzle-ийн гинжин дуудлагыг дуурайж утга буцаах
    mockedDB.where.mockResolvedValue(mockMembers);

    const result = await getClubMembersAll({}, { clubId: mockClubId });

    expect(result).toEqual(mockMembers);
    expect(mockedDB.select).toHaveBeenCalled();
    expect(mockedDB.from).toHaveBeenCalledWith(clubMembers);
  });

  // TEST 2: Алдаа гарах үед (Catch block coverage) - Line 9-15
  it('should throw an error and log it when DB call fails', async () => {
    const dbError = new Error('Database connection failed');
    mockedDB.where.mockRejectedValue(dbError);

    await expect(getClubMembersAll({}, { clubId: mockClubId })).rejects.toThrow(
      'Гишүүдийн жагсаалтыг ачаалж чадсангүй.'
    );

    // console.error дуудагдсан эсэхийг шалгах (Line 13)
    expect(console.error).toHaveBeenCalledWith(
      'Гишүүдийг авахад алдаа гарлаа:',
      dbError
    );
  });
});
