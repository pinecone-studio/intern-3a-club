import { renderHook, act } from '@testing-library/react';
import { toast } from 'sonner';
import { useClubAction } from '../app/_hooks/use-redis-hook';

// 1. Sonner toast-ийг mock хийх
jest.mock('sonner', () => ({
  toast: { success: jest.fn() },
}));

describe('useClubAction', () => {
  // ЗАСВАР: clubid-ийг 1 (number) байсныг '1' (string) болгож өөрчлөв.
  const mockProps = {
    userid: 'user123',
    clubid: '1',
    onEnrollSuccess: jest.fn(),
    onLeaveSuccess: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();

    // Node орчинд (Jest) fetch-ийг тодорхойлж өгөх
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({ remainingTime: 0 }),
      })
    );

    window.confirm = jest.fn(() => true);
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    (console.error as jest.Mock).mockRestore();
    jest.useRealTimers();
  });

  it('should fetch ban status and start timer if banned on mount', async () => {
    jest.useFakeTimers();
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ remainingTime: 2 }),
    });

    const { result } = renderHook(() => useClubAction(mockProps));

    await act(async () => {
      await Promise.resolve();
    });

    expect(result.current.banned).toBe(true);
    expect(result.current.remainingTime).toBe(2);

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(result.current.banned).toBe(false);
    expect(toast.success).toHaveBeenCalledWith(
      'Клуб руу нэгдэх боломжтой боллоо!'
    );
  });

  it('should enroll successfully when not banned', async () => {
    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ remainingTime: 0 }),
      })
      .mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: () => Promise.resolve({ remainingTime: 0 }),
      });

    const { result } = renderHook(() => useClubAction(mockProps));

    await act(async () => {
      await result.current.handleEnroll();
    });

    expect(mockProps.onEnrollSuccess).toHaveBeenCalled();
    expect(result.current.loading).toBe(false);
  });

  it('should set banned state if handleEnroll returns 403', async () => {
    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ remainingTime: 0 }),
      })
      .mockResolvedValueOnce({
        ok: true,
        status: 403,
        json: () => Promise.resolve({ remainingTime: 60 }),
      });

    const { result } = renderHook(() => useClubAction(mockProps));

    await act(async () => {
      await result.current.handleEnroll();
    });

    expect(result.current.banned).toBe(true);
    expect(mockProps.onEnrollSuccess).not.toHaveBeenCalled();
  });

  it('should handleLeave successfully and ask for confirmation', async () => {
    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ remainingTime: 0 }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ remainingTime: 10 }),
      });

    const { result } = renderHook(() => useClubAction(mockProps));

    await act(async () => {
      await result.current.handleLeave();
    });

    expect(window.confirm).toHaveBeenCalled();
    expect(result.current.banned).toBe(true);
    expect(mockProps.onLeaveSuccess).toHaveBeenCalled();
  });

  it('should catch error in handleEnroll', async () => {
    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ remainingTime: 0 }),
      })
      .mockRejectedValueOnce(new Error('Network error'));

    const { result } = renderHook(() => useClubAction(mockProps));

    await act(async () => {
      await result.current.handleEnroll();
    });

    expect(console.error).toHaveBeenCalledWith(
      'Join error:',
      expect.any(Error)
    );
    expect(result.current.loading).toBe(false);
  });
});
