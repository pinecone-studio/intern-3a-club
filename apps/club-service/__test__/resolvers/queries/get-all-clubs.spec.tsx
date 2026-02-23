import { DB } from 'db/drizzle';
import { getAllClubs } from 'graphql-gql/resolvers/queries';

jest.mock('db/drizzle', () => ({
  DB: {
    select: jest.fn(() => ({
      from: jest.fn(),
    })),
  },
}));

describe('getAllClubs', () => {
  it('successfully fetches all clubs', async () => {
    const mockClubs = [{ id: '1', name: 'Club 1' }];
    const fromMock = jest.fn().mockResolvedValue(mockClubs);
    (DB.select as jest.Mock).mockReturnValue({ from: fromMock });

    const result = await getAllClubs();
    expect(result).toEqual(mockClubs);
  });

  it('throws error when database fails', async () => {
    const fromMock = jest.fn().mockRejectedValue(new Error('DB Fail'));
    (DB.select as jest.Mock).mockReturnValue({ from: fromMock });

    await expect(getAllClubs()).rejects.toThrow(
      'Клубүүдийн мэдээллийг авахад алдаа гарлаа.'
    );
  });
});
