import { DB } from 'db/drizzle';
import { teachers, students } from 'db/schema';
import { syncUser } from 'graphql-gql/resolvers/mutations';

// Mock бүтцийг тодорхойлох
const mockChain = {
  from: jest.fn().mockReturnThis(),
  where: jest.fn().mockReturnThis(),
  get: jest.fn(),
  set: jest.fn().mockReturnThis(),
  returning: jest.fn().mockReturnThis(),
};

jest.mock('db/drizzle', () => ({
  DB: {
    select: jest.fn(() => mockChain),
    update: jest.fn(() => mockChain),
  },
}));

interface MockDB {
  select: jest.Mock;
  update: jest.Mock;
}

interface MockChain {
  get: jest.Mock;
  returning: jest.Mock;
}

const db = DB as unknown as MockDB;
const chain = mockChain as unknown as MockChain;

describe('syncUser Tests', () => {
  const mockContext = {
    clerkId: 'user_123',
    email: 'test@example.com',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Багшийн мэдээллийг шинэчилж Teacher төрлийг буцаах ёстой', async () => {
    const mockTeacher = { id: 1, azureEmail: 'test@example.com' };
    const updatedTeacher = {
      id: 1,
      azureEmail: 'test@example.com',
      authUserId: 'user_123',
    };

    chain.get.mockResolvedValueOnce(mockTeacher);
    chain.returning.mockResolvedValueOnce([updatedTeacher]);

    const result = await syncUser({}, {}, mockContext);

    expect(result).toEqual({ ...updatedTeacher, __typename: 'Teacher' });
    expect(db.update).toHaveBeenCalledWith(teachers);
  });

  it('Багш байхгүй үед сурагчийг хайж шинэчлэх ёстой', async () => {
    const mockStudent = { id: 10, azureEmail: 'test@example.com' };
    const updatedStudent = {
      id: 10,
      azureEmail: 'test@example.com',
      authUserId: 'user_123',
    };

    chain.get.mockResolvedValueOnce(null).mockResolvedValueOnce(mockStudent);
    chain.returning.mockResolvedValueOnce([updatedStudent]);

    const result = await syncUser({}, {}, mockContext);

    expect(result).toEqual({ ...updatedStudent, __typename: 'Student' });
    expect(db.update).toHaveBeenCalledWith(students);
  });

  it('Хэрэглэгч бүртгэлгүй бол алдаа заах ёстой', async () => {
    chain.get.mockResolvedValue(null);

    await expect(syncUser({}, {}, mockContext)).rejects.toThrow(
      'Бүртгэлгүй хэрэглэгч байна.'
    );
  });

  it('Context-ийн утга дутуу байвал алдаа заах ёстой', async () => {
    const incompleteContext = { clerkId: 'user_123' };

    await expect(
      syncUser(
        {},
        {},
        incompleteContext as unknown as { email?: string; clerkId?: string }
      )
    ).rejects.toThrow('Authentication context missing');
  });
});
