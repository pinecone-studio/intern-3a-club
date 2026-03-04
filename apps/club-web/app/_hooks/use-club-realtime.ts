'use client';

import { useEffect } from 'react';

type UseClubRealtimeOptions = {
  clubId?: string;
  onEvent?: () => void;
};

export const useClubRealtime = ({ clubId, onEvent }: UseClubRealtimeOptions) => {
  useEffect(() => {
    if (!clubId || !onEvent) return;

    const ablyApiKey = process.env.NEXT_PUBLIC_ABLY_API_KEY;
    if (!ablyApiKey) return;

    const channel = `club:${clubId}`;
    const sseUrl = `https://realtime.ably.io/sse?channels=${encodeURIComponent(
      channel
    )}&v=1.2&key=${encodeURIComponent(ablyApiKey)}`;
    const stream = new EventSource(sseUrl);

    stream.onmessage = (event) => {
      // Ignore non-domain events (heartbeats/control messages).
      if (!event?.data) return;
      if (
        !event.data.includes('club-event') &&
        !event.data.includes('club_member_joined') &&
        !event.data.includes('club_member_left')
      ) {
        return;
      }
      onEvent();
    };
    stream.onerror = () => {
      stream.close();
    };

    return () => {
      stream.close();
    };
  }, [clubId, onEvent]);
};
