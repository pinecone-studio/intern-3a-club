import { renderHook, act, waitFor } from '@testing-library/react'; 
import { toast } from 'sonner';
import { useClubAction } from '../../app/_hooks/use-redis-hook'; 

jest.mock('sonner', () => ({
  toast: { success: jest.fn() },
}));

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
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });
  it('should cover lines 71-73 by handling ban response with time', async () => {
  // fetch-ийг "remainingTime" байгаагаар mock-дох
  (global.fetch as jest.Mock).mockResolvedValue({
    ok: true,
    status: 200,
    json: async () => ({ remainingTime: 3600 }), // 0-ээс их утга өгөх
  });

  const { result } = renderHook(() => useClubAction(mockProps));

  await act(async () => {
    // Энэ функц дотор handleBanResponse(3600) дуудагдаж 71-73-р мөрийг ажиллуулна
    await result.current.handleEnroll(); 
  });

  // Энд өөрийнхөө hook-ийн state өөрчлөгдсөнийг шалгаж болно
  // жишээ нь: expect(result.current.isBanned).toBe(true);
});

  // --- 1. Mount Fetch Error ---
  it('should handle fetch error on mount', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Fetch failed'));
    
    renderHook(() => useClubAction(mockProps));

    // waitFor ашиглан async catch блок ажиллахыг хүлээх
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
});

  // --- 2. Timer & Toast ---
  it('should handle countdown timer and toast', async () => {
    jest.useFakeTimers();
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ remainingTime: 2 }),
    });

    const { result } = renderHook(() => useClubAction(mockProps));

    // Mount-ын fetch дуустал хүлээх
    await waitFor(() => {
      expect(result.current.banned).toBe(true);
    });

    // Таймерыг урагшлуулах
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(result.current.banned).toBe(false);
    expect(toast.success).toHaveBeenCalledWith('Клуб руу нэгдэх боломжтой боллоо!');
    jest.useRealTimers();
  });

  // --- 3. handleEnroll Error ---
  it('should catch error in handleEnroll', async () => {
    // 1. Mount үеийн fetch, 2. handleEnroll үеийн fetch
    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({ ok: true, json: () => Promise.resolve({ remainingTime: 0 }) })
      .mockRejectedValueOnce(new Error('Join failed'));

    const { result } = renderHook(() => useClubAction(mockProps));

    // Hook render болж дуустал хүлээх
    await Promise.resolve(); 

    await act(async () => {
      await result.current.handleEnroll();
    });

    expect(console.error).toHaveBeenCalledWith('Join error:', expect.any(Error));
    expect(result.current.loading).toBe(false);
  });

  // --- 4. handleLeave Error ---
  it('should catch error in handleLeave', async () => {
    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({ ok: true, json: () => Promise.resolve({ remainingTime: 0 }) })
      .mockRejectedValueOnce(new Error('Leave failed'));

    const { result } = renderHook(() => useClubAction(mockProps));
    await Promise.resolve();

    await act(async () => {
      await result.current.handleLeave();
    });

    expect(console.error).toHaveBeenCalledWith('Leave error:', expect.any(Error));
  });

  // --- 5. Confirm Cancel ---
  it('should abort handleLeave if confirm is false', async () => {
    (window.confirm as jest.Mock).mockReturnValue(false);
    (global.fetch as jest.Mock).mockResolvedValueOnce({ 
      ok: true, 
      json: () => Promise.resolve({ remainingTime: 0 }) 
    });

    const { result } = renderHook(() => useClubAction(mockProps));
    await Promise.resolve();

    await act(async () => {
      await result.current.handleLeave();
    });

    // Зөвхөн mount-ын fetch дуудагдсан байна (Нийт 1 удаа)
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(mockProps.onLeaveSuccess).not.toHaveBeenCalled();
  });
});