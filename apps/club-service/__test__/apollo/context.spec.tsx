import { verifyToken } from '@clerk/backend';
import { createContext } from 'apollo/context';
import { NextRequest } from 'next/server';

// 1. Clerk санг mock хийх
jest.mock('@clerk/backend', () => ({
  verifyToken: jest.fn(),
}));

describe('createContext', () => {
  const MOCK_SECRET = 'sk_test_mock_key';

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.CLERK_SECRET_KEY = MOCK_SECRET;
  });

  afterEach(() => {
    delete process.env.CLERK_SECRET_KEY;
  });

  // Mock Request үүсгэх туслах функц
  const createMockReq = (authHeader?: string) => {
    return {
      headers: {
        get: jest.fn().mockReturnValue(authHeader || null),
      },
    } as unknown as NextRequest;
  };

  it('Authorization header байхгүй бол null утга буцаана', async () => {
    const req = createMockReq();
    const result = await createContext({ req });

    expect(result).toEqual({ clerkId: null, email: null });
  });

  it('CLERK_SECRET_KEY тохируулаагүй бол null утга буцаана', async () => {
    delete process.env.CLERK_SECRET_KEY;
    const req = createMockReq('Bearer some-token');

    // Console error-ыг mock хийж тестийн гаралтад харагдуулахгүй байх
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    const result = await createContext({ req });

    expect(result).toEqual({ clerkId: null, email: null });
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('тохируулагдаагүй')
    );

    consoleSpy.mockRestore();
  });

  it('Токен зөв бол clerkId болон email-ийг амжилттай буцаана', async () => {
    const mockPayload = {
      sub: 'user_123',
      email: 'test@example.com',
    };
    (verifyToken as jest.Mock).mockResolvedValue(mockPayload);

    const req = createMockReq('Bearer valid-token');
    const result = await createContext({ req });

    expect(verifyToken).toHaveBeenCalledWith('valid-token', {
      secretKey: MOCK_SECRET,
    });
    expect(result).toEqual({
      clerkId: 'user_123',
      email: 'test@example.com',
    });
  });

  it('email байхгүй үед primary_email_address-аас утга авна', async () => {
    const mockPayload = {
      sub: 'user_456',
      primary_email_address: 'primary@example.com',
    };
    (verifyToken as jest.Mock).mockResolvedValue(mockPayload);

    const req = createMockReq('Bearer valid-token');
    const result = await createContext({ req });

    expect(result.email).toBe('primary@example.com');
  });

  it('verifyToken алдаа заавал (catch) null утга буцаана', async () => {
    (verifyToken as jest.Mock).mockRejectedValue(new Error('Invalid token'));
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    const req = createMockReq('Bearer invalid-token');
    const result = await createContext({ req });

    expect(result).toEqual({ clerkId: null, email: null });
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});
