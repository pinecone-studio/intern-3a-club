import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { getAllPendingClubs } from 'graphql-gql/resolvers/queries';

// DB-г mock хийх
jest.mock('db/drizzle', () => ({
  DB: {
    select: jest.fn(),
  },
}));

describe('getAllPendingClubs', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('хүлээгдэж буй (pending) төлөвтэй клубүүдийг амжилттай буцаах ёстой', async () => {
    const mockClubs = [
      { id: '1', name: 'New Math Club', status: 'pending' },
      { id: '2', name: 'New Art Club', status: 'pending' },
    ];

    // Chaining: select() -> from() -> where()
    const whereMock = jest.fn().mockResolvedValue(mockClubs);
    const fromMock = jest.fn().mockReturnValue({ where: whereMock });
    (DB.select as jest.Mock).mockReturnValue({ from: fromMock });

    const result = await getAllPendingClubs();

    // Шалгалтууд
    expect(DB.select).toHaveBeenCalled();
    expect(fromMock).toHaveBeenCalledWith(clubs);
    expect(whereMock).toHaveBeenCalled();
    expect(result).toEqual(mockClubs);
    expect(result[0].status).toBe('pending');
  });

  it('бааз дээр алдаа гарвал зохих алдааны мессежийг шидэх ёстой', async () => {
    // Алдааг дуурайлгах
    const whereMock = jest.fn().mockRejectedValue(new Error('DB Error'));
    const fromMock = jest.fn().mockReturnValue({ where: whereMock });
    (DB.select as jest.Mock).mockReturnValue({ from: fromMock });

    await expect(getAllPendingClubs()).rejects.toThrow(
      'Хүлээгдэж буй клубүүдийн мэдээллийг авахад алдаа гарлаа.'
    );
  });
});
