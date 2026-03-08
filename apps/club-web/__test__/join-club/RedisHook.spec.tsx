import { renderHook, act, waitFor } from '@testing-library/react';
import { toast } from 'sonner';
import { useClubAction } from '../../app/_hooks/use-redis-hook';

jest.mock('@apollo/client/react', () => ({
  useMutation: jest.fn(() => [jest.fn().mockResolvedValue({}), { loading: false }]),
}));

jest.mock('sonner', () => ({
  toast: { success: jest.fn(), error: jest.fn() },
}));

// Mock EventSource locally to avoid global config changes
global.EventSource = class MockEventSource {
  // constructor(_url: string) {} // Useless constructor removed
  onmessage: ((_ev: MessageEvent) => void) | null = null;
  onerror: ((_ev: Event) => void) | null = null;
  onopen: ((_ev: Event) => void) | null = null;
  close() { }
} as unknown as typeof EventSource;

describe('useClubAction Hook', () => {
  const mockProps = {
    userid: 'user-123',
    clubid: 'club-456',
    onEnrollSuccess: jest.fn(),
    onLeaveSuccess: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn();
    window.confirm = jest.fn(() => true);
    jest.spyOn(console, 'error').mockImplementation(() => { });
  });

  it('should cover lines 71-73 by handling ban response with time', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ remainingTime: 3600 }),
    });

    const { result } = renderHook(() => useClubAction(mockProps));
    await act(async () => {
      await result.current.handleEnroll();
    });
  });

  it('should handle fetch error on mount', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Fetch failed'));
    renderHook(() => useClubAction(mockProps));
    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith('Fetch error', expect.any(Error));
    });
  });

  it('covers success paths', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ remainingTime: 0 }),
    });

    const { result } = renderHook(() => useClubAction(mockProps));
    await act(async () => {
      await result.current.handleEnroll();
      await result.current.handleLeave();
    });
    expect(mockProps.onEnrollSuccess).toHaveBeenCalled();
    expect(mockProps.onLeaveSuccess).toHaveBeenCalled();
  });

  it('should handle countdown timer and toast', async () => {
    jest.useFakeTimers();
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ remainingTime: 2 }),
    });

    const { result } = renderHook(() => useClubAction(mockProps));
    await waitFor(() => {
      expect(result.current.banned).toBe(true);
    });

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(result.current.banned).toBe(false);
    expect(toast.success).toHaveBeenCalledWith('Клуб руу нэгдэх боломжтой боллоо!');
    jest.useRealTimers();
  });

  it('should catch error in handleEnroll', async () => {
    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({ ok: true, json: () => Promise.resolve({ remainingTime: 0 }) })
      .mockRejectedValueOnce(new Error('Join failed'));

    const { result } = renderHook(() => useClubAction(mockProps));
    await act(async () => {
      await result.current.handleEnroll();
    });
    expect(console.error).toHaveBeenCalledWith('Join error:', expect.any(Error));
  });

  it('should catch error in handleLeave', async () => {
    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({ ok: true, json: () => Promise.resolve({ remainingTime: 0 }) })
      .mockRejectedValueOnce(new Error('Leave failed'));

    const { result } = renderHook(() => useClubAction(mockProps));
    await act(async () => {
      await result.current.handleLeave();
    });
    expect(console.error).toHaveBeenCalledWith('Leave error:', expect.any(Error));
  });

  it('should abort handleLeave if confirm is false', async () => {
    (window.confirm as jest.Mock).mockReturnValue(false);
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ remainingTime: 0 })
    });

    const { result } = renderHook(() => useClubAction(mockProps));
    await act(async () => {
      await result.current.handleLeave();
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(mockProps.onLeaveSuccess).not.toHaveBeenCalled();
  });

  it('should abort handleEnroll if no userId', async () => {
    const { result } = renderHook(() => useClubAction({ ...mockProps, userid: '' }));
    await act(async () => {
      await result.current.handleEnroll();
    });
    expect(toast.error).toHaveBeenCalledWith('Эхлээд нэвтэрнэ үү.');
  });

  it('should abort handleLeave if no userId', async () => {
    const { result } = renderHook(() => useClubAction({ ...mockProps, userid: '' }));
    await act(async () => {
      await result.current.handleLeave();
    });
    expect(toast.error).toHaveBeenCalledWith('Эхлээд нэвтэрнэ үү.');
  });
});