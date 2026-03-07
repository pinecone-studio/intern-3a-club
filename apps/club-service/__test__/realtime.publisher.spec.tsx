import { publishClubEvent } from 'gql-utils/realtime-publisher';

const mockedFetch = jest.fn();
global.fetch = mockedFetch as unknown as typeof fetch;

describe('realtime-publisher.ts 100% Coverage', () => {
  const originalEnv = process.env;
  const mockApiKey = 'mock:key';
  const mockEventBase = {
    clerkId: 'user_1',
    at: 1710000000000,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    process.env = {
      ...originalEnv,
      ABLY_API_KEY: mockApiKey,
    };
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  describe('API Key and Formatting', () => {
    it('ABLY_API_KEY байхгүй үед false буцааж (publishToAbly), fetch дуудахгүй байх ёстой', async () => {
      process.env.ABLY_API_KEY = '';

      await publishClubEvent({ ...mockEventBase, type: 'club_created' });

      expect(mockedFetch).not.toHaveBeenCalled();
    });

    it('API Key хашилттай ("key") байвал түүнийг цэвэрлэж (stripWrappedQuotes) ашиглах ёстой', async () => {
      process.env.ABLY_API_KEY = '"key:secret"';
      mockedFetch.mockResolvedValueOnce({ ok: true });

      await publishClubEvent({ ...mockEventBase, type: 'club_created' });

      const authHeader = mockedFetch.mock.calls[0][1].headers.Authorization;
      const expectedBase64 = Buffer.from('key:secret').toString('base64');
      expect(authHeader).toBe(`Basic ${expectedBase64}`);
    });
  });

  describe('Channel Name Logic (Branch Coverage)', () => {
    it('Global event (created, deleted, updated) үед "clubs" суваг ашиглах ёстой', async () => {
      mockedFetch.mockResolvedValueOnce({ ok: true });

      await publishClubEvent({ ...mockEventBase, type: 'club_created' });

      const url = mockedFetch.mock.calls[0][0];
      expect(url).toContain('/channels/clubs/messages');
    });

    it('Member event (joined, left) үед "club:id" суваг ашиглах ёстой', async () => {
      mockedFetch.mockResolvedValueOnce({ ok: true });

      await publishClubEvent({
        ...mockEventBase,
        type: 'club_member_joined',
        clubId: '777',
      });

      const url = mockedFetch.mock.calls[0][0];
      expect(url).toContain('/channels/club%3A777/messages');
    });
  });

  describe('Error Handling (Full Branch Coverage)', () => {
    it('Response ok биш үед assertSuccessResponse алдаа шидэж, catch блок ажиллах ёстой', async () => {
      mockedFetch.mockResolvedValueOnce({
        ok: false,
        status: 401,
        text: async () => 'Unauthorized access',
      });

      await publishClubEvent({ ...mockEventBase, type: 'club_created' });

      expect(console.error).toHaveBeenCalledWith(
        'Failed to publish realtime event:',
        expect.objectContaining({
          message: 'Ably publish failed (401): Unauthorized access',
        })
      );
    });

    it('Fetch хүсэлт crash хийх үед (catch block) console.error дуудах ёстой', async () => {
      const networkError = new Error('DNS Fail');
      mockedFetch.mockRejectedValueOnce(networkError);

      await publishClubEvent({ ...mockEventBase, type: 'club_created' });

      expect(console.error).toHaveBeenCalledWith(
        'Failed to publish realtime event:',
        networkError
      );
    });
  });
});
