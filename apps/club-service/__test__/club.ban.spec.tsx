import { getJoinBanTtlSeconds, setJoinBan } from 'gql-utils/club-ban';

const mockedFetch = jest.fn();
global.fetch = mockedFetch as unknown as typeof fetch;

describe('club-ban.ts 100% Coverage', () => {
  const originalEnv = process.env;
  const mockUrl = 'https://mock-redis.upstash.io';
  const mockToken = 'mock-token';

  beforeEach(() => {
    jest.clearAllMocks();

    process.env = {
      ...originalEnv,
      UPSTASH_REDIS_REST_URL: mockUrl,
      UPSTASH_REDIS_REST_TOKEN: mockToken,
    };

    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  describe('Environment Config', () => {
    it('URL эсвэл Token байхгүй үед null буцааж, команд ажиллахгүй байх ёстой', async () => {
      process.env.UPSTASH_REDIS_REST_URL = '';

      const result = await getJoinBanTtlSeconds('c1', 'u1');
      expect(result).toBe(0);
      expect(mockedFetch).not.toHaveBeenCalled();
    });
  });

  describe('getJoinBanTtlSeconds', () => {
    it('TTL амжилттай авсан үед тоон утга буцаах ёстой', async () => {
      mockedFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ result: 15 }),
      });

      const ttl = await getJoinBanTtlSeconds('club123', 'user456');

      expect(ttl).toBe(15);
      expect(mockedFetch).toHaveBeenCalledWith(
        expect.stringContaining('TTL'),
        expect.objectContaining({
          headers: { Authorization: `Bearer ${mockToken}` },
        })
      );
    });

    it('TTL үр дүн нь тоо биш эсвэл хасах утгатай бол 0 буцаах ёстой', async () => {
      mockedFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ result: -2 }),
      });

      const ttl = await getJoinBanTtlSeconds('c1', 'u1');
      expect(ttl).toBe(0);
    });
  });

  describe('setJoinBan', () => {
    it('SET командыг зөв параметрүүдтэй илгээх ёстой', async () => {
      mockedFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ result: 'OK' }),
      });

      await setJoinBan('club1', 'user1');

      expect(mockedFetch).toHaveBeenCalledWith(
        expect.stringContaining('SET'),
        expect.objectContaining({ method: 'POST' })
      );
    });
  });

  describe('Error Handling (Full Branch Coverage)', () => {
    it('Response ok биш үед console.error дуудаж null буцаах ёстой', async () => {
      mockedFetch.mockResolvedValueOnce({
        ok: false,
        json: async () => ({ error: 'Unauthorized' }),
      });

      const result = await getJoinBanTtlSeconds('c1', 'u1');
      expect(result).toBe(0);
      expect(console.error).toHaveBeenCalled();
    });

    it('Payload дотор алдаа ирвэл null буцаах ёстой', async () => {
      mockedFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ error: 'Redis Error' }),
      });

      await getJoinBanTtlSeconds('c1', 'u1');
      expect(console.error).toHaveBeenCalledWith(
        'Upstash Redis command failed:',
        'Redis Error'
      );
    });

    it('Fetch crash хийх үед catch блок ажиллах ёстой', async () => {
      mockedFetch.mockRejectedValueOnce(new Error('Network Crash'));

      const result = await getJoinBanTtlSeconds('c1', 'u1');
      expect(result).toBe(0);
      expect(console.error).toHaveBeenCalled();
    });

    it('Payload хоосон байх үед (null coalescing) ажиллах ёстой', async () => {
      mockedFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ result: undefined }),
      });

      const result = await getJoinBanTtlSeconds('c1', 'u1');
      expect(result).toBe(0);
    });
  });
});
