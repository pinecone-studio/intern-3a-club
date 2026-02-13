import { DB } from 'db/drizzle';
import { getClubs } from 'graphql/resolvers/queries';

// DB холболтыг бүхэлд нь mock хийх
jest.mock('db/drizzle', () => ({
  DB: {
    query: {
      clubs: {
        findMany: jest.fn(),
      },
    },
  },
}));

describe('getClubs query', () => {
  it('should return all clubs from the database', async () => {
    // 1. Mock өгөгдөл бэлдэх
    const mockClubs = [
      { id: '1', name: 'Coding Club', type: 'academic' },
      { id: '2', name: 'Art Club', type: 'hobby' },
    ];

    // 2. findMany функц mock өгөгдөл буцаахаар тохируулах
    (DB.query.clubs.findMany as jest.Mock).mockResolvedValue(mockClubs);

    // 3. Функцээ дуудаж шалгах
    const result = await getClubs();

    // 4. Үр дүнг баталгаажуулах
    expect(result).toHaveLength(2);
    expect(result[0].name).toBe('Coding Club');
    expect(DB.query.clubs.findMany).toHaveBeenCalledTimes(1);
  });

  it('should return an empty array if no clubs found', async () => {
    (DB.query.clubs.findMany as jest.Mock).mockResolvedValue([]);

    const result = await getClubs();

    expect(result).toEqual([]);
  });
});
