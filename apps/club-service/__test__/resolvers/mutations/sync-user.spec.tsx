import { DB } from 'db/drizzle';
import { teachers, students } from 'db/schema';
import { syncUser } from 'graphql-gql/resolvers/mutations';

// DB-г илүү нарийвчлалтай mock хийх
jest.mock('db/drizzle', () => {
  const mockChain = {
    from: jest.fn().mockReturnThis(),
    where: jest.fn().mockReturnThis(),
    get: jest.fn(),
    set: jest.fn().mockReturnThis(),
    returning: jest.fn().mockReturnThis(), // returning-ийг энд тодорхойлж өгнө
  };

  return {
    DB: {
      select: jest.fn(() => mockChain),
      update: jest.fn(() => mockChain),
      // Хэрэв шууд DB.update(...).set(...) гэж дуудаж байгаа бол:
      ...mockChain,
    },
  };
});

// TypeScript-ийн "Property 'returning' does not exist" алдаанаас зайлсхийхийн тулд
// DB-г 'any' төрөлд шилжүүлж ашиглана
const mockDB = DB as any;

describe('syncUser Tests', () => {
  const mockContext = {
    clerkId: 'user_123',
    email: 'test@example.com',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Багшийн мэдээллийг шинэчилж Teacher төрлийг буцаах', async () => {
    const mockTeacher = { id: 1, azureEmail: 'test@example.com' };
    const updatedTeacher = {
      id: 1,
      azureEmail: 'test@example.com',
      authUserId: 'user_123',
    };

    // mockDB ашиглан утгуудыг оноох
    mockDB.get.mockResolvedValueOnce(mockTeacher);
    mockDB.returning.mockResolvedValueOnce([updatedTeacher]);

    const result = await syncUser({}, {}, mockContext);

    expect(result).toEqual({ ...updatedTeacher, __typename: 'Teacher' });
    expect(mockDB.update).toHaveBeenCalledWith(teachers);
  });

  it('Багш байхгүй үед сурагчийг хайж шинэчлэх', async () => {
    const mockStudent = { id: 10, azureEmail: 'test@example.com' };
    const updatedStudent = {
      id: 10,
      azureEmail: 'test@example.com',
      authUserId: 'user_123',
    };

    mockDB.get
      .mockResolvedValueOnce(null) // Эхний select (teachers)
      .mockResolvedValueOnce(mockStudent); // Дараагийн select (students)

    mockDB.returning.mockResolvedValueOnce([updatedStudent]);

    const result = await syncUser({}, {}, mockContext);

    expect(result).toEqual({ ...updatedStudent, __typename: 'Student' });
    expect(mockDB.update).toHaveBeenCalledWith(students);
  });
});
