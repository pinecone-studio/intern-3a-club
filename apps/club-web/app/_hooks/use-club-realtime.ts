'use client';
/* eslint-disable complexity */

import { useEffect, useRef } from 'react';

type UseClubRealtimeOptions = {
  clubId?: string;
  clubIds?: string[];
  onEvent?: () => void;
};

export const useClubRealtime = ({
  clubId,
  clubIds,
  onEvent,
}: UseClubRealtimeOptions) => {
  const onEventRef = useRef(onEvent);
  onEventRef.current = onEvent;

  useEffect(() => {
    if (!onEvent) return;

    const ablyApiKey = process.env.NEXT_PUBLIC_ABLY_API_KEY;
    if (!ablyApiKey) return;

    const channelsFromList = (clubIds || []).filter(Boolean).map((id) => `club:${id}`);
    const fallbackChannel = clubId ? [`club:${clubId}`] : [];
    const channels = Array.from(
      new Set(['clubs', ...(channelsFromList.length > 0 ? channelsFromList : fallbackChannel)])
    );
    if (channels.length === 0) return;
    const isClubListOnly = channels.length === 1 && channels[0] === 'clubs';

    const channelsParam = channels.map((channel) => encodeURIComponent(channel)).join(',');
    const sseUrl = `https://realtime.ably.io/sse?channels=${channelsParam}&v=1.2&key=${encodeURIComponent(
      ablyApiKey
    )}`;
    const stream = new EventSource(sseUrl);
    let lastEmitAt = 0;
    let pendingTimeout: ReturnType<typeof setTimeout> | null = null;
    const THROTTLE_MS = 1200;

    const eventTypes = new Set([
      'club_member_joined',
      'club_member_left',
      'club_created',
      'club_deleted',
      'club_updated',
    ]);

    const extractRealtimeHints = (value: unknown, bag: Set<string>) => {
      if (!value) return;
      if (typeof value === 'string') {
        for (const eventType of eventTypes) {
          if (value.includes(eventType)) {
            bag.add(eventType);
          }
        }
        if (value.includes('club-event')) {
          bag.add('club-event');
        }
        return;
      }
      if (Array.isArray(value)) {
        for (const item of value) extractRealtimeHints(item, bag);
        return;
      }
      if (typeof value === 'object') {
        const entry = value as Record<string, unknown>;
        if (typeof entry.name === 'string') {
          bag.add(entry.name);
        }
        if (typeof entry.type === 'string') {
          bag.add(entry.type);
        }
        for (const nestedValue of Object.values(entry)) {
          extractRealtimeHints(nestedValue, bag);
        }
      }
    };

    const isDomainEvent = (raw: string) => {
      if (!raw) return false;

      const hints = new Set<string>();
      extractRealtimeHints(raw, hints);

      try {
        extractRealtimeHints(JSON.parse(raw), hints);
      } catch {
        // Non-JSON payloads are handled by raw-string scan above.
      }

      if (hints.has('club-event')) return true;
      for (const eventType of eventTypes) {
        if (hints.has(eventType)) return true;
      }
      return false;
    };

    const emitThrottled = () => {
      const now = Date.now();
      const elapsed = now - lastEmitAt;
      if (elapsed >= THROTTLE_MS) {
        lastEmitAt = now;
        onEventRef.current?.();
        return;
      }
      if (pendingTimeout) return;
      pendingTimeout = setTimeout(() => {
        pendingTimeout = null;
        lastEmitAt = Date.now();
        onEventRef.current?.();
      }, THROTTLE_MS - elapsed);
    };

    stream.onmessage = (event) => {
      // For approved club list, any payload on "clubs" should refresh list.
      if (!event?.data) return;
      if (isClubListOnly) {
        emitThrottled();
        return;
      }
      // Ignore non-domain events (heartbeats/control messages).
      if (!isDomainEvent(event.data)) {
        return;
      }
      emitThrottled();
    };
    stream.onerror = () => {
      // Let EventSource reconnect automatically.
    };

    return () => {
      if (pendingTimeout) clearTimeout(pendingTimeout);
      stream.close();
    };
  }, [clubId, clubIds, onEvent]);
};
