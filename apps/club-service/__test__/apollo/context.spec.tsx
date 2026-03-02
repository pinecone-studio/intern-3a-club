import { verifyToken } from '@clerk/backend';
import { createContext } from 'apollo/context';
import { NextRequest } from 'next/server';

jest.mock('@clerk/backend', () => ({
  verifyToken: jest.fn(),
}));

const mockedVerifyToken = verifyToken as jest.Mock;

describe('createContext Full Coverage', () => {
  const MOCK_SECRET = 'sk_test_mock_key';

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.CLERK_SECRET_KEY = MOCK_SECRET;
  });

  afterEach(() => {
    delete process.env.CLERK_SECRET_KEY;
  });

  const createMockReq = (authHeader?: string) => {
    return {
      headers: {
        get: jest
          .fn()
          .mockReturnValue(authHeader !== undefined ? authHeader : null),
      },
    } as unknown as NextRequest;
  };

  it('Authorization header огт байхгүй (null) бол null утга буцаана', async () => {
    // getValidatedToken доторх authHeader = null үеийг шалгана
    const req = createMockReq(undefined);
    const result = await createContext({ req });
    expect(result).toEqual({ clerkId: null, email: null });
  });

  it('Authorization header хоосон стринг бол null утга буцаана', async () => {
    // replace('Bearer ', '') хийхэд хоосон үлдэх үе
    const req = createMockReq('');
    const result = await createContext({ req });
    expect(result).toEqual({ clerkId: null, email: null });
  });

  it('email болон primary_email_address хоёулаа байхгүй бол email: null байна', async () => {
    // extractEmail функцийн хамгийн сүүлийн '|| null' салбарыг шалгана
    const mockPayload = { sub: 'user_999' };
    mockedVerifyToken.mockResolvedValue(mockPayload);

    const req = createMockReq('Bearer valid-token');
    const result = await createContext({ req });

    expect(result).toEqual({ clerkId: 'user_999', email: null });
  });

  it('Токен зөв бол clerkId болон email-ийг амжилттай буцаана', async () => {
    const mockPayload = { sub: 'user_123', email: 'test@example.com' };
    mockedVerifyToken.mockResolvedValue(mockPayload);

    const req = createMockReq('Bearer valid-token');
    const result = await createContext({ req });

    expect(result).toEqual({ clerkId: 'user_123', email: 'test@example.com' });
  });

  it('email байхгүй үед primary_email_address-аас утга авна', async () => {
    const mockPayload = {
      sub: 'user_456',
      // eslint-disable-next-line camelcase
      primary_email_address: 'primary@example.com',
    };
    mockedVerifyToken.mockResolvedValue(mockPayload);

    const req = createMockReq('Bearer valid-token');
    const result = await createContext({ req });

    expect(result.email).toBe('primary@example.com');
  });

  it('CLERK_SECRET_KEY байхгүй бол алдаа зааж null буцаана', async () => {
    delete process.env.CLERK_SECRET_KEY;
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    const req = createMockReq('Bearer token');
    const result = await createContext({ req });

    expect(result).toEqual({ clerkId: null, email: null });
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it('verifyToken алдаа заавал (catch) null утга буцаана', async () => {
    mockedVerifyToken.mockRejectedValue(new Error('Invalid'));
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    const req = createMockReq('Bearer invalid-token');
    const result = await createContext({ req });

    expect(result).toEqual({ clerkId: null, email: null });
    consoleSpy.mockRestore();
  });
});
