import { DB } from 'db/drizzle';
import { clubs } from 'db/schema';
import { publishClubEvent } from 'gql-utils/realtime-publisher';
import { handleMutationError } from 'gql-utils';
import { updateClub } from 'graphql-gql/resolvers/mutations';

const mockReturning = jest.fn();
const mockWhere = jest.fn(() => ({ returning: mockReturning }));
const mockSet = jest.fn(() => ({ where: mockWhere }));

jest.mock('db/drizzle', () => ({
  DB: {
    update: jest.fn(() => ({ set: mockSet })),
  },
}));

jest.mock('gql-utils', () => ({
  handleMutationError: jest.fn((err: unknown) => {
    if (err instanceof Error) throw err;
    throw new Error('Unknown error');
  }),
}));

jest.mock('gql-utils/realtime-publisher', () => ({
  publishClubEvent: jest.fn(),
}));

const mockedDBUpdate = DB.update as jest.Mock;
const mockedPublishEvent = publishClubEvent as jest.Mock;
const mockedHandleError = handleMutationError as unknown as jest.Mock;

describe('updateClub Mutation 100% Coverage', () => {
  const mockInput = {
    id: 'club-123',
    status: 'approved' as const,
    teacherId: 'teacher-456',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('амжилттай зассан үед шинэчлэгдсэн клубын мэдээллийг буцааж, эвент илгээх ёстой', async () => {
    const mockUpdated = { ...mockInput, updatedAt: '2024-01-01' };
    mockReturning.mockResolvedValue([mockUpdated]);
    const mockContext = { clerkId: 'user-789' };

    const result = await updateClub(null, { input: mockInput }, mockContext);

    expect(result).toEqual(mockUpdated);
    expect(mockedPublishEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'club_updated',
        clubId: 'club-123',
        clerkId: 'user-789',
      })
    );
  });

  it('context байхгүй үед "system" гэсэн clerkId-тай эвент илгээх ёстой (Branch: clerkId ?? "system")', async () => {
    const mockUpdated = { id: 'club-123', updatedAt: '2024-01-01' };
    mockReturning.mockResolvedValue([mockUpdated]);

    await updateClub(null, { input: { id: 'club-123' } }, undefined);

    expect(mockedPublishEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        clerkId: 'system',
      })
    );
  });

  it('updatedClub олдоогүй (id-гүй) үед эвент илгээхгүй шууд буцах ёстой (Branch: if (!clubId) return)', async () => {
    mockReturning.mockResolvedValue([]);

    const result = await updateClub(null, { input: mockInput });

    expect(result).toBeUndefined();
    expect(mockedPublishEvent).not.toHaveBeenCalled();
  });

  it('DB-ээс алдаа ирэх үед handleMutationError-ыг дуудах ёстой', async () => {
    const dbError = new Error('DB Error');
    mockedDBUpdate.mockImplementationOnce(() => {
      throw dbError;
    });

    try {
      await updateClub(null, { input: mockInput });
    } catch (e) {
      expect(mockedHandleError).toHaveBeenCalledWith(dbError);
    }
  });

  it('Тодорхойгүй алдаа гарсан үед handleMutationError-ыг дуудах ёстой', async () => {
    mockedDBUpdate.mockImplementationOnce(() => {
      throw 'String error';
    });

    try {
      await updateClub(null, { input: mockInput });
    } catch (e) {
      expect(mockedHandleError).toHaveBeenCalledWith('String error');
    }
  });
});
