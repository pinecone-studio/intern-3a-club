import { renderHook, act } from '@testing-library/react';
import { toast } from 'sonner';
import { useClubAction } from '../app/_hooks/use-redis-hook';

// 1. Sonner toast-ийг mock хийх
jest.mock('sonner', () => ({
  toast: { success: jest.fn() },
}));

describe('useClubAction', () => {
  const mockProps = {
    userid: 'user123',
    clubid: '1', // TypeScript-ийн string төрлийн алдааг зассан
    onEnrollSuccess: jest.fn(),
    onLeaveSuccess: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();

    // Global fetch-ийг Jest орчинд тодорхойлох
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

  it('should catch error in handleEnroll (Line 91 coverage)', async () => {
    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ remainingTime: 0 }),
      }) // Mount үеийн fetch
      .mockRejectedValueOnce(new Error('Join error scenario')); // handleEnroll алдаа

    const { result } = renderHook(() => useClubAction(mockProps));

    await act(async () => {
      await result.current.handleEnroll();
    });

    // 91-р мөр: console.error('Join error:', err) дуудагдсан эсэхийг шалгах
    expect(console.error).toHaveBeenCalledWith(
      'Join error:',
      expect.any(Error)
    );
    // Finally блок: setLoading(false) ажилласан эсэхийг шалгах
    expect(result.current.loading).toBe(false);
  });

  // --- LINE 106-108 TEST (handleLeave error handling) ---
  it('should catch error in handleLeave (Lines 106-108 coverage)', async () => {
    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ remainingTime: 0 }),
      }) // Mount үеийн fetch
      .mockRejectedValueOnce(new Error('Leave error scenario')); // handleLeave алдаа

    const { result } = renderHook(() => useClubAction(mockProps));

    await act(async () => {
      await result.current.handleLeave();
    });

    // 107-р мөр: console.error('Leave error:', err) дуудагдсан эсэхийг шалгах
    expect(console.error).toHaveBeenCalledWith(
      'Leave error:',
      expect.any(Error)
    );
    // 109-р мөр: setLoading(false) ажилласан эсэхийг шалгах
    expect(result.current.loading).toBe(false);
  });

  // --- Таймер болон амжилттай үйлдлүүдийг шалгах ---
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
  });

  it('should abort handleLeave if confirm is cancelled', async () => {
    (window.confirm as jest.Mock).mockReturnValue(false);
    const { result } = renderHook(() => useClubAction(mockProps));

    await act(async () => {
      await result.current.handleLeave();
    });

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(mockProps.onLeaveSuccess).not.toHaveBeenCalled();
  });
});
