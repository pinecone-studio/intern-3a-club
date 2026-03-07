import { DB } from 'db/drizzle';
import { handleMutationError } from 'gql-utils';
import { GraphQLError } from 'graphql';
import { leaveClub } from 'graphql-gql/resolvers/mutations';

jest.mock('db/drizzle', () => ({
  DB: {
    query: {
      students: { findFirst: jest.fn() },
    },
    delete: jest.fn().mockReturnThis(),
    where: jest.fn().mockReturnThis(),
    returning: jest.fn(),
  },
}));

jest.mock('gql-utils', () => ({
  handleMutationError: jest.fn(),
}));

const mockedDB = DB as unknown as {
  query: {
    students: { findFirst: jest.Mock };
  };
  delete: jest.Mock;
  where: jest.Mock;
  returning: jest.Mock;
};

const mockedHandleError = handleMutationError as unknown as jest.Mock;

describe('leaveClub Mutation Full Tests', () => {
  const mockContext = { clerkId: 'user_clerk_456' };
  const mockArgs = { clubId: 'club_abc' };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should throw GraphQLError when clerkId is missing', async () => {
    try {
      await leaveClub({}, mockArgs, {});
    } catch (e) {
      const error = e as GraphQLError;
      expect(error.message).toBe('Нэвтрээгүй байна.');
    }
  });

  it('should call handleMutationError if student is not found', async () => {
    mockedDB.query.students.findFirst.mockResolvedValue(null);

    await leaveClub({}, mockArgs, mockContext);

    expect(mockedHandleError).toHaveBeenCalledWith(
      expect.objectContaining({ message: 'Сурагч олдсонгүй.' })
    );
  });

  it('should call handleMutationError if student is not a member of the club', async () => {
    mockedDB.query.students.findFirst.mockResolvedValue({ id: 'student_123' });

    mockedDB.returning.mockResolvedValue([]);

    await leaveClub({}, mockArgs, mockContext);

    expect(mockedHandleError).toHaveBeenCalledWith(
      expect.objectContaining({ message: 'Та энэ клубийн гишүүн биш байна.' })
    );
  });

  it('should return clubId on successful leave', async () => {
    const mockStudent = { id: 'student_123' };
    const mockDeletedRow = {
      id: 'membership_1',
      clubId: 'club_abc',
      studentId: 'student_123',
    };

    mockedDB.query.students.findFirst.mockResolvedValue(mockStudent);
    mockedDB.returning.mockResolvedValue([mockDeletedRow]);

    const result = await leaveClub({}, mockArgs, mockContext);

    expect(result).toBe(mockArgs.clubId);
    expect(mockedDB.delete).toHaveBeenCalled();
    expect(mockedDB.where).toHaveBeenCalled();
  });
});
