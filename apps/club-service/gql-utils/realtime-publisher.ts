type RealtimeEvent = {
  type: 'club_member_joined' | 'club_member_left';
  clubId: string;
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

const publishToAbly = async (event: RealtimeEvent): Promise<boolean> => {
  const ablyApiKey = getAblyApiKey();
  if (!ablyApiKey) return false;

  const channel = `club:${event.clubId}`;
  const url = `https://rest.ably.io/channels/${encodeURIComponent(
    channel
  )}/messages`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${toBase64(ablyApiKey)}`,
    },
    body: JSON.stringify([
      {
        name: 'club-event',
        data: event,
      },
    ]),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Ably publish failed (${response.status}): ${text}`);
  }

  return true;
};

export const publishClubEvent = async (event: RealtimeEvent): Promise<void> => {
  try {
    await publishToAbly(event);
  } catch (error) {
    console.error('Failed to publish realtime event:', error);
  }
};
