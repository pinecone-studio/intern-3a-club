import { createClerkClient, verifyToken } from '@clerk/backend';
import { createContext } from 'apollo/context';
import { NextRequest } from 'next/server';

// 1. Clerk SDK-ийг бүрэн mock хийх
jest.mock('@clerk/backend', () => ({
  verifyToken: jest.fn(),
  createClerkClient: jest.fn(),
}));

const mockedVerifyToken = verifyToken as jest.Mock;
const mockedCreateClerkClient = createClerkClient as jest.Mock;

describe('createContext Full Coverage', () => {
  const MOCK_SECRET = 'sk_test_mock_key';

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.CLERK_SECRET_KEY = MOCK_SECRET;
    // Console error-оор тестын лог бохирдуулахгүй байх
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  const createMockReq = (authHeader?: string | null) => {
    return {
      headers: {
        get: jest.fn().mockReturnValue(authHeader),
      },
    } as unknown as NextRequest;
  };

  it('Authorization header null эсвэл хоосон бол null утга буцаана', async () => {
    const req = createMockReq(null);
    const result = await createContext({ req });
    expect(result).toEqual({ clerkId: null, email: null });
  });

  it('Токен зөв боловч дотроо email-гүй бол resolveEmailViaClerk-ийг дуудаж email-ийг нөхөх ёстой (Branch 44-48)', async () => {
    // А. Токен дотор email байхгүй нөхцөл
    const mockPayload = { sub: 'user_fallback_123' }; // email болон primary_email_address байхгүй
    mockedVerifyToken.mockResolvedValue(mockPayload);

    // Б. Clerk SDK-аас ирэх хэрэглэгчийн мэдээллийг mock хийх
    const mockGetUser = jest.fn().mockResolvedValue({
      primaryEmailAddressId: 'email_id_1',
      emailAddresses: [
        { id: 'email_id_1', emailAddress: 'found_via_sdk@test.com' },
        { id: 'email_id_2', emailAddress: 'other@test.com' },
      ],
    });
    mockedCreateClerkClient.mockReturnValue({
      users: { getUser: mockGetUser },
    });

    const req = createMockReq('Bearer valid-token');
    const result = await createContext({ req });

    expect(mockGetUser).toHaveBeenCalledWith('user_fallback_123');
    expect(result).toEqual({
      clerkId: 'user_fallback_123',
      email: 'found_via_sdk@test.com',
    });
  });

  it('resolveEmailViaClerk дотор алдаа гарвал (catch block) email-ийг null-ээр буцаах ёстой', async () => {
    mockedVerifyToken.mockResolvedValue({ sub: 'user_crash' });
    const mockGetUser = jest
      .fn()
      .mockRejectedValue(new Error('Clerk API Down'));
    mockedCreateClerkClient.mockReturnValue({
      users: { getUser: mockGetUser },
    });

    const req = createMockReq('Bearer valid-token');
    const result = await createContext({ req });

    expect(result.email).toBeNull();
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining('Clerk хэрэглэгчийн email авахад алдаа гарлаа:'),
      expect.any(Error)
    );
  });

  it('primaryEmailAddressId-тай тохирох email олдохгүй бол null буцаана', async () => {
    mockedVerifyToken.mockResolvedValue({ sub: 'user_no_email' });
    const mockGetUser = jest.fn().mockResolvedValue({
      primaryEmailAddressId: 'non_existent_id',
      emailAddresses: [{ id: 'email_id_1', emailAddress: 'test@test.com' }],
    });
    mockedCreateClerkClient.mockReturnValue({
      users: { getUser: mockGetUser },
    });

    const req = createMockReq('Bearer valid-token');
    const result = await createContext({ req });

    expect(result.email).toBeNull();
  });

  it('CLERK_SECRET_KEY байхгүй бол алдаа зааж null буцаана', async () => {
    delete process.env.CLERK_SECRET_KEY;
    const req = createMockReq('Bearer token');
    const result = await createContext({ req });

    expect(result).toEqual({ clerkId: null, email: null });
    expect(console.error).toHaveBeenCalledWith(
      'CLERK_SECRET_KEY тохируулагдаагүй байна.'
    );
  });

  it('decodeToken (verifyToken) алдаа заавал null утга буцаана', async () => {
    mockedVerifyToken.mockRejectedValue(new Error('Invalid Token'));
    const req = createMockReq('Bearer invalid');
    const result = await createContext({ req });

    expect(result).toEqual({ clerkId: null, email: null });
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining('Токен баталгаажуулахад алдаа гарлаа:'),
      expect.any(Error)
    );
  });
});
