import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { getAllApprovedClubs } from 'graphql-gql/resolvers/queries';

// 1. DB-г mock хийхдээ chaining бүтцийг нь дуурайлгана
jest.mock('db/drizzle', () => ({
  DB: {
    select: jest.fn(),
  },
}));

describe('getAllApprovedClubs', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('батлагдсан (approved) төлөвтэй клубуудыг буцаах ёстой', async () => {
    const mockClubs = [
      { id: '1', name: 'Math Club', status: 'approved' },
      { id: '2', name: 'Coding Club', status: 'approved' },
    ];

    // chain: select() -> from() -> where() -> mockResolvedValue
    const whereMock = jest.fn().mockResolvedValue(mockClubs);
    const fromMock = jest.fn().mockReturnValue({ where: whereMock });
    (DB.select as jest.Mock).mockReturnValue({ from: fromMock });

    const result = await getAllApprovedClubs();

    // Шалгалтууд
    expect(DB.select).toHaveBeenCalled();
    expect(fromMock).toHaveBeenCalledWith(clubs);
    expect(whereMock).toHaveBeenCalled();
    expect(result).toEqual(mockClubs);
  });

  it('бааз дээр алдаа гарвал зохих алдааны мессежийг шидэх ёстой', async () => {
    // where() функц алдаа буцаахаар mock хийнэ
    const whereMock = jest.fn().mockRejectedValue(new Error('DB Error'));
    const fromMock = jest.fn().mockReturnValue({ where: whereMock });
    (DB.select as jest.Mock).mockReturnValue({ from: fromMock });

    await expect(getAllApprovedClubs()).rejects.toThrow(
      'Батлагдсан клубүүдийн мэдээллийг авахад алдаа гарлаа.'
    );
  });
});
