import { DB } from 'db/drizzle';
import { resolvers } from 'graphql-gql';

// 1. DB Mock (Chained methods)
jest.mock('db/drizzle', () => ({
  DB: {
    select: jest.fn(() => ({
      from: jest.fn(() => ({
        where: jest.fn(),
      })),
    })),
  },
}));

// resolvers.Club.timetables-ийн эхний аргументын төрлийг гаргаж авах
type ClubParent = Parameters<typeof resolvers.Club.timetables>[0];

describe('Resolvers Index', () => {
  it('Club.timetables should return filtered timetables', async () => {
    // 2. Mock Data & Setup
    const mockParent = { id: 'club-1' };
    const mockTimetables = [{ id: 't1', clubId: 'club-1' }];

    const whereMock = jest.fn().mockResolvedValue(mockTimetables);
    const fromMock = jest.fn(() => ({ where: whereMock }));
    (DB.select as jest.Mock).mockReturnValue({ from: fromMock });

    // 3. Execute
    // 'any'-ийн оронд 'unknown' -> 'ClubParent' хувиргалт хийв
    const result = await resolvers.Club.timetables(
      mockParent as unknown as ClubParent
    );

    // 4. Assertions
    expect(result).toEqual(mockTimetables);
    expect(DB.select).toHaveBeenCalled();
  });

  it('Query.getAllClubs should call the query function', async () => {
    const result = await resolvers.Query.getAllClubs();
    expect(result).toBeDefined();
  });
});
