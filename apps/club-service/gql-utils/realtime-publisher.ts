type RealtimeEvent = {
  type:
    | 'club_member_joined'
    | 'club_member_left'
    | 'club_created'
    | 'club_deleted'
    | 'club_updated';
  clubId?: string;
  clerkId: string;
  at: number;
};

const stripWrappedQuotes = (value?: string) => {
  if (!value) return '';
  return value.replace(/^"+|"+$/g, '').trim();
};

const toBase64 = (value: string): string =>
  Buffer.from(value, 'utf8').toString('base64');

const getAblyApiKey = () => stripWrappedQuotes(process.env.ABLY_API_KEY);

const isGlobalClubEvent = (type: RealtimeEvent['type']): boolean => {
  return (
    type === 'club_created' ||
    type === 'club_deleted' ||
    type === 'club_updated'
  );
};

const getChannelName = (event: RealtimeEvent): string => {
  if (isGlobalClubEvent(event.type)) {
    return 'clubs';
  }
  return `club:${event.clubId}`;
};

const getAblyHeaders = (ablyApiKey: string) => ({
  'Content-Type': 'application/json',
  Authorization: `Basic ${toBase64(ablyApiKey)}`,
});

const getAblyBody = (event: RealtimeEvent) =>
  JSON.stringify([
    {
      name: 'club-event',
      data: event,
    },
  ]);

const assertSuccessResponse = async (response: Response) => {
  if (response.ok) return;
  const text = await response.text();
  throw new Error(`Ably publish failed (${response.status}): ${text}`);
};

const publishToAbly = async (event: RealtimeEvent): Promise<boolean> => {
  const ablyApiKey = getAblyApiKey();
  if (!ablyApiKey) return false;

  const channel = getChannelName(event);
  const url = `https://rest.ably.io/channels/${encodeURIComponent(
    channel
  )}/messages`;

  const response = await fetch(url, {
    method: 'POST',
    headers: getAblyHeaders(ablyApiKey),
    body: getAblyBody(event),
  });

  await assertSuccessResponse(response);

  return true;
};

export const publishClubEvent = async (event: RealtimeEvent): Promise<void> => {
  try {
    await publishToAbly(event);
  } catch (error) {
    console.error('Failed to publish realtime event:', error);
  }
};
