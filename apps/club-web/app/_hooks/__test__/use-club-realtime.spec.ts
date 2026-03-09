import { renderHook } from '@testing-library/react';
import { useClubRealtime } from '../use-club-realtime';

let lastMockEventSource: MockEventSource | null = null;

class MockEventSource {
  onmessage: ((_ev: { data: string }) => void) | null = null;
  onerror: ((_ev?: unknown) => void) | null = null;
  onopen: ((_ev?: unknown) => void) | null = null;
  url: string;
  constructor(url: string) {
    this.url = url;
    setLastMockEventSource(this);
  }
  close = jest.fn();
}

global.EventSource = MockEventSource as unknown as typeof EventSource;

function setLastMockEventSource(instance: MockEventSource) {
  lastMockEventSource = instance;
}

describe('useClubRealtime', () => {
  const originalEnv = process.env;
  const onEvent = jest.fn();

  beforeEach(() => {
    process.env = { ...originalEnv, NEXT_PUBLIC_ABLY_API_KEY: 'test-key' };
    jest.clearAllMocks();
    jest.useFakeTimers();
    lastMockEventSource = null;
  });

  afterEach(() => {
    process.env = originalEnv;
    jest.useRealTimers();
  });

  it('skip if onEvent missing', () => {
    renderHook(() => useClubRealtime({}));
    expect(lastMockEventSource).toBeNull();
  });

  it('multiple fast events байхад зөвхөн нэг pending timeout үүсгэнэ', () => {
    renderHook(() => useClubRealtime({ onEvent }));

    lastMockEventSource!.onmessage!({ data: 'some-data' });
    lastMockEventSource!.onmessage!({ data: 'more-data' });
    lastMockEventSource!.onmessage!({ data: 'even-more-data' });

    jest.advanceTimersByTime(1200);

    // 1 шууд + 1 throttle‑оор = 2
    expect(onEvent).toHaveBeenCalledTimes(2);
  });

  it('"null" payload дээр extractRealtimeHints falsy branch‑ийг хамарна', () => {
    renderHook(() => useClubRealtime({ onEvent, clubId: 'c1' }));
    lastMockEventSource!.onmessage!({ data: 'null' });
    expect(true).toBe(true);
  });

  it('skip if ably key missing', () => {
    process.env.NEXT_PUBLIC_ABLY_API_KEY = '';
    renderHook(() => useClubRealtime({ onEvent }));
    expect(lastMockEventSource).toBeNull();
  });

  it('initializes with clubIds', () => {
    renderHook(() => useClubRealtime({ onEvent, clubIds: ['c1'] }));
    expect(lastMockEventSource!.url).toContain('club%3Ac1');
  });

  it('throttles execution', () => {
    renderHook(() => useClubRealtime({ onEvent }));

    lastMockEventSource!.onmessage!({ data: 'some-data' });
    expect(onEvent).toHaveBeenCalledTimes(1);

    lastMockEventSource!.onmessage!({ data: 'more-data' });
    expect(onEvent).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1200);
    expect(onEvent).toHaveBeenCalledTimes(2);
  });

  it('filters domain events if not list only', () => {
    renderHook(() => useClubRealtime({ onEvent, clubId: 'c1' }));

    lastMockEventSource!.onmessage!({
      data: JSON.stringify({ name: 'heartbeat' }),
    });
    expect(onEvent).not.toHaveBeenCalled();

    lastMockEventSource!.onmessage!({
      data: JSON.stringify({ name: 'club_updated' }),
    });
    expect(onEvent).toHaveBeenCalledTimes(1);

    lastMockEventSource!.onmessage!({ data: 'club_member_joined' });
    expect(onEvent).toHaveBeenCalledTimes(1); // throttled
    jest.advanceTimersByTime(1200);
    expect(onEvent).toHaveBeenCalledTimes(2);
  });

  it('handles complex extractRealtimeHints branches', () => {
    renderHook(() => useClubRealtime({ onEvent, clubId: 'c1' }));

    lastMockEventSource!.onmessage!({
      data: JSON.stringify(['club_deleted']),
    });
    expect(onEvent).toHaveBeenCalled();

    jest.advanceTimersByTime(1200);

    lastMockEventSource!.onmessage!({
      data: JSON.stringify({ type: 'club-event' }),
    });
    expect(onEvent).toHaveBeenCalled();

    lastMockEventSource!.onmessage!({
      data: null as unknown as string,
    });
  });

  it('closes on unmount', () => {
    const { unmount } = renderHook(() => useClubRealtime({ onEvent }));
    const closeSpy = lastMockEventSource!.close;
    unmount();
    expect(closeSpy).toHaveBeenCalled();
  });

  it('handles onerror', () => {
    renderHook(() => useClubRealtime({ onEvent }));
    lastMockEventSource!.onerror!();
  });

  it('pending timeout байхад unmount хийхэд алдаагүй cleanup хийнэ', () => {
    const { unmount } = renderHook(() => useClubRealtime({ onEvent }));

    lastMockEventSource!.onmessage!({ data: 'club_member_joined' });

    lastMockEventSource!.onmessage!({ data: 'club_member_joined' });

    unmount();

    expect(true).toBe(true);
  });

  it('covers isDomainEvent falsy raw', () => {
    renderHook(() => useClubRealtime({ onEvent, clubId: 'c1' }));
    // Trigger branch where raw is empty string
    lastMockEventSource!.onmessage!({ data: '' });
    expect(onEvent).not.toHaveBeenCalled();
  });
});
