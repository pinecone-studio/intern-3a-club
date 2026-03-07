import { createClerkClient, verifyToken } from '@clerk/backend';
import { createContext } from 'apollo/context';
import { NextRequest } from 'next/server';

// 1. Clerk SDK-ийг mock хийх
jest.mock('@clerk/backend', () => ({
  verifyToken: jest.fn(),
  createClerkClient: jest.fn(),
}));

// Mock функцүүдийг төрөлжүүлж авах
const mockedVerifyToken = verifyToken as jest.Mock;
const mockedCreateClerkClient = createClerkClient as jest.Mock;

describe('createContext Full Coverage', () => {
  const MOCK_SECRET = 'sk_test_mock_key';

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.CLERK_SECRET_KEY = MOCK_SECRET;
    // Тестийн үед консол дээр алдааны лог харуулахгүй байх
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const createMockReq = (authHeader?: string | null): NextRequest => {
    return {
      headers: {
        get: jest.fn().mockReturnValue(authHeader),
      },
    } as unknown as NextRequest;
  };

  it('Authorization header байхгүй бол null утга буцаана', async () => {
    const req = createMockReq(null);
    const result = await createContext({ req });
    expect(result).toEqual({ clerkId: null, email: null });
  });

  it('Токен зөв боловч payload дотор email байхгүй бол SDK ашиглан нөхөх ёстой', async () => {
    // Токен дотор sub (ID) байгаа ч email байхгүй үе
    const mockPayload = { sub: 'user_123' };
    mockedVerifyToken.mockResolvedValue(mockPayload);

    // Clerk Client-ийн getUser-ийг mock хийх
    const mockGetUser = jest.fn().mockResolvedValue({
      primaryEmailAddressId: 'email_1',
      emailAddresses: [
        { id: 'email_1', emailAddress: 'found_via_sdk@test.com' },
      ],
    });

    mockedCreateClerkClient.mockReturnValue({
      users: { getUser: mockGetUser },
    });

    const req = createMockReq('Bearer valid_token');
    const result = await createContext({ req });

    expect(mockGetUser).toHaveBeenCalledWith('user_123');
    expect(result).toEqual({
      clerkId: 'user_123',
      email: 'found_via_sdk@test.com',
    });
  });

  it('SDK-аас хэрэглэгч авахад алдаа гарвал email-ийг null болгоно (Line 61 coverage)', async () => {
    mockedVerifyToken.mockResolvedValue({ sub: 'user_error' });

    // SDK алдаа заах нөхцөл
    const mockGetUser = jest
      .fn()
      .mockRejectedValue(new Error('Clerk API Error'));
    mockedCreateClerkClient.mockReturnValue({
      users: { getUser: mockGetUser },
    });

    const req = createMockReq('Bearer valid_token');
    const result = await createContext({ req });

    // Энэ хэсэг ажилласнаар Line 61 (catch блок) бүрэн хамрагдана
    expect(result.email).toBeNull();
    expect(console.error).toHaveBeenCalled();
  });

  it('Токен дотор primary_email_address байгаа бол шууд авна', async () => {
    mockedVerifyToken.mockResolvedValue({
      sub: 'user_456',
      // eslint-disable-next-line camelcase
      primary_email_address: 'direct@test.com',
    });

    const req = createMockReq('Bearer valid_token');
    const result = await createContext({ req });

    expect(result).toEqual({
      clerkId: 'user_456',
      email: 'direct@test.com',
    });
  });

  it('CLERK_SECRET_KEY тохируулаагүй үед алдааг барьж null буцаана', async () => {
    delete process.env.CLERK_SECRET_KEY;

    const req = createMockReq('Bearer some_token');
    const result = await createContext({ req });

    expect(result).toEqual({ clerkId: null, email: null });
    expect(console.error).toHaveBeenCalledWith(
      'CLERK_SECRET_KEY тохируулагдаагүй байна.'
    );
  });

  it('verifyToken (decodeToken) амжилтгүй болбол null буцаана', async () => {
    mockedVerifyToken.mockRejectedValue(new Error('Invalid signature'));

    const req = createMockReq('Bearer invalid_token');
    const result = await createContext({ req });

    expect(result).toEqual({ clerkId: null, email: null });
    expect(console.error).toHaveBeenCalled();
  });

  it('SDK-аас ирсэн emailAddresses дотор primary ID-тай и-мэйл байхгүй бол null буцаана', async () => {
    mockedVerifyToken.mockResolvedValue({ sub: 'user_no_match' });

    const mockGetUser = jest.fn().mockResolvedValue({
      primaryEmailAddressId: 'id_A',
      emailAddresses: [{ id: 'id_B', emailAddress: 'wrong@test.com' }],
    });

    mockedCreateClerkClient.mockReturnValue({
      users: { getUser: mockGetUser },
    });

    const req = createMockReq('Bearer valid_token');
    const result = await createContext({ req });

    expect(result.email).toBeNull();
  });
});
