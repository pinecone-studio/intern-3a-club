import { renderHook, act } from '@testing-library/react';

import { toast } from 'sonner';
import { useClubAction } from '../app/_hooks/use-redis-hook';

// Mock Sonner toast
jest.mock('sonner', () => ({
  toast: { success: jest.fn() },
}));

describe('useClubAction', () => {
  const mockProps = {
    userid: 'user123',
    clubid: 1,
    onEnrollSuccess: jest.fn(),
    onLeaveSuccess: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn();
    window.confirm = jest.fn(() => true);
    // Silent console errors for clean test output during catch block tests
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    (console.error as jest.Mock).mockRestore();
  });

  it('should fetch ban status and start timer if banned on mount', async () => {
    jest.useFakeTimers();
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue({ remainingTime: 2 }),
    });

    const { result } = renderHook(() => useClubAction(mockProps));

    // Resolve the initial useEffect fetch
    await act(async () => {
      await Promise.resolve();
    });

    expect(result.current.banned).toBe(true);
    expect(result.current.remainingTime).toBe(2);

    // Fast-forward timer to hit line 51-58 (success toast and clear ban)
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(result.current.banned).toBe(false);
    expect(toast.success).toHaveBeenCalledWith(
      'Клуб руу нэгдэх боломжтой боллоо!'
    );
    jest.useRealTimers();
  });

  it('should handle fetch error in initial useEffect', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error('Fetch failed')
    );

    renderHook(() => useClubAction(mockProps));

    await act(async () => {
      await Promise.resolve();
    });

    expect(console.error).toHaveBeenCalledWith(
      'Fetch error',
      expect.any(Error)
    );
  });

  it('should enroll successfully when not banned', async () => {
    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue({ remainingTime: 0 }),
      }) // mount
      .mockResolvedValueOnce({
        status: 200,
        json: jest.fn().mockResolvedValue({ remainingTime: 0 }),
      }); // handleEnroll

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
        json: jest.fn().mockResolvedValue({ remainingTime: 0 }),
      })
      .mockResolvedValueOnce({
        status: 403,
        json: jest.fn().mockResolvedValue({ remainingTime: 60 }),
      });

    const { result } = renderHook(() => useClubAction(mockProps));

    await act(async () => {
      await result.current.handleEnroll();
    });

    expect(result.current.banned).toBe(true);
    expect(mockProps.onEnrollSuccess).not.toHaveBeenCalled();
    expect(console.error).not.toHaveBeenCalled(); // No error, just a 403
  });

  it('should catch error in handleEnroll (Line 88)', async () => {
    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue({ remainingTime: 0 }),
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

  it('should handleLeave successfully and ask for confirmation', async () => {
    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue({ remainingTime: 0 }),
      })
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue({ remainingTime: 10 }),
      });

    const { result } = renderHook(() => useClubAction(mockProps));

    await act(async () => {
      await result.current.handleLeave();
    });

    expect(window.confirm).toHaveBeenCalled();
    expect(result.current.banned).toBe(true);
    expect(mockProps.onLeaveSuccess).toHaveBeenCalled();
  });

  it('should abort handleLeave if confirm is cancelled', async () => {
    (window.confirm as jest.Mock).mockReturnValue(false);
    const { result } = renderHook(() => useClubAction(mockProps));

    await act(async () => {
      await result.current.handleLeave();
    });

    expect(global.fetch).toHaveBeenCalledTimes(1); // Only the mount call
    expect(mockProps.onLeaveSuccess).not.toHaveBeenCalled();
  });

  it('should catch error in handleLeave (Line 107)', async () => {
    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue({ remainingTime: 0 }),
      })
      .mockRejectedValueOnce(new Error('Leave failed'));

    const { result } = renderHook(() => useClubAction(mockProps));

    await act(async () => {
      await result.current.handleLeave();
    });

    expect(console.error).toHaveBeenCalledWith(
      'Leave error:',
      expect.any(Error)
    );
  });
});
