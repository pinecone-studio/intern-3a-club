import { renderHook, act } from '@testing-library/react';
import { useClubsLogic } from '../../app/JoinClub/_components/utils/use-clubs-logic';

jest.mock('@apollo/client/react', () => ({
  useQuery: jest.fn(),
}));

jest.mock('../../app/_hooks/use-club-realtime', () => ({
  useClubRealtime: jest.fn(),
}));

jest.mock('../../app/JoinClub/_components/utils/clubs-utils', () => ({
  mapClub: jest.fn((c: unknown) => c),
  applyEnroll: jest.fn((clubs: unknown[]) => clubs),
  applyLeave: jest.fn((clubs: unknown[]) => clubs),
  clearBan: jest.fn((clubs: unknown[]) => clubs),
  compareByEnrollment: jest.fn(() => 0),
  resolveSelectedId: jest.fn(
    (_: string, clubs: { id: string }[]) => clubs[0]?.id ?? ''
  ),
}));

import { useQuery } from '@apollo/client/react';

const mockClub = {
  id: 'club-1',
  name: 'React',
  description: '',
  status: 'ACTIVE',
  isEnrolled: false,
  bannedUntil: 0,
  timetables: [],
  createdAt: new Date().toISOString(),
  startDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
};

const setupQuery = (
  clubs = [mockClub],
  teachers = [],
  mockRefetch = jest.fn().mockResolvedValue({})
) => {
  const teacherResponse = { data: { getAllTeachers: teachers } };
  const clubResponse = {
    loading: false,
    error: null,
    data: { getAllApprovedClubs: clubs },
    refetch: mockRefetch,
  };

  (useQuery as unknown as jest.Mock).mockImplementation(
    (...args: unknown[]) => {
      const query = args[0] as {
        definitions?: { name?: { value?: string } }[];
      };
      const isTeacher =
        query?.definitions?.[0]?.name?.value === 'GetAllTeachers';
      if (isTeacher) return teacherResponse;
      return clubResponse;
    }
  );
};

describe('useClubsLogic', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    setupQuery();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it('loading state буцаана', () => {
    (useQuery as unknown as jest.Mock).mockReturnValue({
      loading: true,
      error: null,
      data: null,
      refetch: jest.fn(),
    });
    const { result } = renderHook(() => useClubsLogic('user-1'));
    expect(result.current.loading).toBe(true);
  });

  it('error state буцаана', () => {
    (useQuery as unknown as jest.Mock).mockReturnValue({
      loading: false,
      error: { message: 'Сүлжээний алдаа' },
      data: null,
      refetch: jest.fn(),
    });
    const { result } = renderHook(() => useClubsLogic('user-1'));
    expect(result.current.error).toBeDefined();
  });

  it('клубуудыг зөв ачаална', () => {
    const { result } = renderHook(() => useClubsLogic('user-1'));
    expect(result.current.sortedClubs.length).toBe(1);
  });

  it('хоосон клуб үед selectedClubId хоосон байна', () => {
    (useQuery as unknown as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      data: { getAllApprovedClubs: [] },
      refetch: jest.fn(),
    });
    const { result } = renderHook(() => useClubsLogic('user-1'));
    expect(result.current.selectedClubId).toBe('');
  });

  it('хоосон клуб үед sortedClubs хоосон байна', () => {
    (useQuery as unknown as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      data: { getAllApprovedClubs: [] },
      refetch: jest.fn(),
    });
    const { result } = renderHook(() => useClubsLogic('user-1'));
    expect(result.current.sortedClubs).toHaveLength(0);
  });

  it('onEnroll дуудагдана', () => {
    const { result } = renderHook(() => useClubsLogic('user-1'));
    act(() => {
      result.current.onEnroll();
      jest.advanceTimersByTime(200000);
    });
    expect(result.current.sortedClubs).toBeDefined();
  });

  it('onLeave дуудагдана', () => {
    const { result } = renderHook(() => useClubsLogic('user-1'));
    act(() => {
      result.current.onLeave();
      jest.advanceTimersByTime(200000);
    });
    expect(result.current.sortedClubs).toBeDefined();
  });

  it('setSelectedClubId ажиллана', () => {
    const { result } = renderHook(() => useClubsLogic('user-1'));
    act(() => {
      result.current.setSelectedClubId('club-2');
    });
    expect(result.current.selectedClubId).toBe('club-2');
  });

  it('selectedClub зөв клубыг буцаана', () => {
    const { result } = renderHook(() => useClubsLogic('user-1'));
    act(() => {
      result.current.setSelectedClubId('club-1');
    });
    expect(result.current.selectedClub?.id).toBe('club-1');
  });

  it('selectedClub байхгүй үед undefined буцаана', () => {
    const { result } = renderHook(() => useClubsLogic('user-1'));
    act(() => {
      result.current.setSelectedClubId('nonexistent');
    });
    expect(result.current.selectedClub).toBeUndefined();
  });

  it('allTeachers буцаана', () => {
    setupQuery([mockClub], [
      { id: 't-1', firstName: 'Бат', lastName: 'Дорж' },
    ] as never);
    const { result } = renderHook(() => useClubsLogic('user-1'));
    expect(result.current.allTeachers).toBeDefined();
  });

  it('allTeachers хоосон үед хоосон массив буцаана', () => {
    setupQuery([mockClub], []);
    const { result } = renderHook(() => useClubsLogic('user-1'));
    expect(result.current.allTeachers).toHaveLength(0);
  });

  it('ban идэвхтэй үед setInterval ажиллана', () => {
    const bannedClub = { ...mockClub, bannedUntil: Date.now() + 60000 };
    setupQuery([bannedClub]);
    const spyInterval = jest.spyOn(window, 'setInterval');
    renderHook(() => useClubsLogic('user-1'));
    act(() => {
      jest.advanceTimersByTime(1100);
    });
    expect(spyInterval).toHaveBeenCalled();
  });

  it('ban дууссан үед clearExpiredBans дуудагдана', () => {
    let internalTime = 1000000;
    const dateSpy = jest
      .spyOn(Date, 'now')
      .mockImplementation(() => internalTime);

    const expiringBanClub = {
      ...mockClub,
      id: 'c1',
      bannedUntil: internalTime + 1000,
    };
    const longBanClub = {
      ...mockClub,
      id: 'c2',
      bannedUntil: internalTime + 5000,
    };
    setupQuery([expiringBanClub, longBanClub]);
    const { result } = renderHook(() => useClubsLogic('user-1'));

    act(() => {
      internalTime += 1100;
      jest.advanceTimersByTime(1100);
    });

    const c1 = result.current.sortedClubs.find((c) => c.id === 'c1');
    expect(c1?.bannedUntil).toBe(0);
    dateSpy.mockRestore();
  });

  it('bannedUntil undefined үед зөв ажиллана', () => {
    const undefinedBanClub = { ...mockClub, bannedUntil: undefined };
    setupQuery([undefinedBanClub as never]);
    const { result } = renderHook(() => useClubsLogic('user-1'));
    expect(result.current.sortedClubs.length).toBe(1);
  });

  it('ban‑тай болон bannedUntil байхгүй клубуудын бүх замыг cover хийнэ', () => {
    const futureBanClub = {
      ...mockClub,
      id: 'club-banned',
      bannedUntil: Date.now() + 60000, // идэвхтэй ban
    };

    // bannedUntil undefined → nullish coalescing-ийн нөгөө branch ажиллана
    const neutralClub = {
      ...mockClub,
      id: 'club-neutral',
      bannedUntil: undefined as unknown as number,
    };

    setupQuery([futureBanClub, neutralClub as never]);

    const { result } = renderHook(() => useClubsLogic('user-1'));
    expect(result.current.sortedClubs).toHaveLength(2);

    act(() => {
      // hasActiveBan=true үед clearExpiredBans бүх клуб дээр ажиллана
      jest.advanceTimersByTime(2000);
    });
  });

  it('isLiveSyncing эхэндээ false байна', () => {
    const { result } = renderHook(() => useClubsLogic('user-1'));
    expect(result.current.isLiveSyncing).toBe(false);
  });

  it('handleRealtimeEvent дуудагдахад isLiveSyncing өөрчлөгдөнө', async () => {
    let capturedOnEvent: () => void = () => {};
    const { useClubRealtime } = require('../../app/_hooks/use-club-realtime');
    useClubRealtime.mockImplementation(
      ({ onEvent }: { onEvent: () => void }) => {
        capturedOnEvent = onEvent;
      }
    );

    const mockRefetch = jest.fn().mockResolvedValue({});
    setupQuery([mockClub], [], mockRefetch);

    const { result } = renderHook(() => useClubsLogic('user-1'));
    expect(result.current.isLiveSyncing).toBe(false);

    await act(async () => {
      capturedOnEvent();
      await Promise.resolve(); // wait for refetch().finally
    });

    expect(result.current.isLiveSyncing).toBe(true);
    expect(mockRefetch).toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(700);
    });

    expect(result.current.isLiveSyncing).toBe(false);
  });

  it('nowTs тоон утга буцаана', () => {
    const { result } = renderHook(() => useClubsLogic('user-1'));
    expect(typeof result.current.nowTs).toBe('number');
  });

  it('clerkUserId байхгүй үед ажиллана', () => {
    const { result } = renderHook(() => useClubsLogic(undefined));
    expect(result.current.sortedClubs).toBeDefined();
  });
});
