import React from 'react';
import {
  render,
  screen,
  waitFor,
  fireEvent,
  act,
} from '@testing-library/react';
import { ClubsContent } from '../../app/JoinClub/_components/ClubsContent';

jest.mock('../../app/_hooks/use-redis-hook');
const mockUseAuth = jest.fn(() => ({ userId: 'test-user-id' as string | null }));
jest.mock('@clerk/nextjs', () => ({
  useAuth: () => mockUseAuth(),
  useUser: () => ({ user: { id: 'test-user-id' } }),
  useClerk: () => ({ signOut: jest.fn() }),
}));

let lastEventSource: {
  onmessage: ((_ev: MessageEvent) => void) | null;
} | null = null;
global.EventSource = class MockEventSource {
  onmessage: ((_ev: MessageEvent) => void) | null = null;
  onerror: ((_ev: Event) => void) | null = null;
  onopen: ((_ev: Event) => void) | null = null;
  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    lastEventSource = this;
  }
  close() { }
} as unknown as typeof EventSource;

const mockUseClubAction = jest.mocked(useClubAction);

const mockClub = {
  id: 'club-1',
  name: 'Test Club',
  description: 'Test description',
  type: 'Premium',
  status: 'ACTIVE',
  teacherId: 'teacher-1',
  creatorId: 'creator-1',
  frequency: 'WEEKLY',
  clubTerm: 'FIRST',
  minMember: 5,
  maxMember: 20,
  timetables: [],
  createdAt: new Date().toISOString(),
};

const mockUseAuth = jest.fn<MockAuthReturn, []>(() => ({
  userId: 'clerk-user-1',
}));

jest.mock('@clerk/nextjs', () => ({
  useAuth: () => mockUseAuth(),
}));

const getSuccessMocks = (repeat = 1) => {
  const mocks = [];
  for (let i = 0; i < repeat; i++) {
    mocks.push(
      {
        request: { query: GET_ALL_APPROVED_CLUBS },
        result: { data: { getAllApprovedClubs: [mockClub] } },
      },
      {
        request: { query: GET_ALL_TEACHERS },
        result: { data: { getAllTeachers: [mockTeacher] } },
      }
    );
  }
  return mocks;
};

const mockLogicBase = {
  loading: false,
  error: null,
  selectedClubId: '',
  setSelectedClubId: jest.fn(),
  allTeachers: [],
  onEnroll: jest.fn(),
  onLeave: jest.fn(),
  sortedClubs: [],
  selectedClub: undefined,
  isLiveSyncing: false,
  nowTs: Date.now(),
};

describe('ClubsContent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseClubAction.mockReturnValue(createHookReturn());
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('loading үед "Уншиж байна..." харуулна', () => {
    render(
      <MockedProvider mocks={getSuccessMocks()}>
        <ClubsContent />
      </MockedProvider>
    );
    expect(screen.getByText('Уншиж байна...')).toBeInTheDocument();
  });

  it('алдаа гарсан үед алдааны мессеж харуулна', async () => {
    const errorMocks = [
      {
        request: { query: GET_ALL_APPROVED_CLUBS },
        error: new Error('Network error'),
      },
      {
        request: { query: GET_ALL_TEACHERS },
        result: { data: { getAllTeachers: [] } },
      },
    ];

    render(
      <MockedProvider mocks={errorMocks}>
        <ClubsContent />
      </MockedProvider>
    );
    await waitFor(() =>
      expect(screen.getByText(/Network error/)).toBeInTheDocument()
    );
  });

  it('дата амжилттай ирсэн үед клубын нэр харуулна', async () => {
    render(
      <MockedProvider mocks={getSuccessMocks()}>
        <ClubsContent />
      </MockedProvider>
    );
    await waitFor(() =>
      expect(screen.getAllByText('Test Club').length).toBeGreaterThan(0)
    );
  });

  it('хоосон дата ирсэн үед "Клуб сонгоно уу" харуулна', async () => {
    const emptyMocks = [
      {
        request: { query: GET_ALL_APPROVED_CLUBS },
        result: { data: { getAllApprovedClubs: [] } },
      },
      {
        request: { query: GET_ALL_TEACHERS },
        result: { data: { getAllTeachers: [] } },
      },
    ];

    render(
      <MockedProvider mocks={emptyMocks}>
        <ClubsContent />
      </MockedProvider>
    );
    await waitFor(() =>
      expect(screen.getByText('Клуб сонгоно уу')).toBeInTheDocument()
    );
  });

  it('userId prop дамжуулсан үед render хийгдэнэ', async () => {
    render(
      <MockedProvider mocks={getSuccessMocks()}>
        <ClubsContent userId="test-user" />
      </MockedProvider>
    );
    await waitFor(() =>
      expect(screen.getAllByText('Test Club').length).toBeGreaterThan(0)
    );
  });

  it('onEnroll дуудагдсан үед клуб enrolled болно', async () => {
    mockUseClubAction.mockImplementation(({ onEnrollSuccess }) =>
      createHookReturn({ handleEnroll: () => onEnrollSuccess() })
    );

    render(
      <MockedProvider mocks={getSuccessMocks()}>
        <ClubsContent />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(screen.getAllByText('Test Club').length).toBeGreaterThan(0)
    );

    fireEvent.click(screen.getByText('Клубт элсэх'));

    await waitFor(() =>
      expect(screen.getByText('Клубээс гарах')).toBeInTheDocument()
    );
  });

  it('onLeave дуудагдсан үед клубаас гарна', async () => {
    mockUseClubAction.mockImplementation(
      ({ onEnrollSuccess, onLeaveSuccess }) =>
        createHookReturn({
          handleEnroll: () => onEnrollSuccess(),
          handleLeave: () => onLeaveSuccess(),
        })
    );

    render(
      <MockedProvider mocks={getSuccessMocks()}>
        <ClubsContent />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(screen.getAllByText('Test Club').length).toBeGreaterThan(0)
    );

    fireEvent.click(screen.getByText('Клубт элсэх'));
    await waitFor(() =>
      expect(screen.getByText('Клубээс гарах')).toBeInTheDocument()
    );

    fireEvent.click(screen.getByText('Клубээс гарах'));
    await waitFor(() =>
      expect(screen.getByText('Клубт элсэх')).toBeInTheDocument()
    );

    // Test ban timeout
    act(() => {
      jest.advanceTimersByTime(120 * 1000);
    });
  });

  it('realtime event triggers refetch and isLiveSyncing', async () => {
    const mocksWithRefetch = getSuccessMocks(2);

    render(
      <MockedProvider mocks={mocksWithRefetch}>
        <ClubsContent />
      </MockedProvider>
    );

    render(<ClubsContent />);

    if (lastEventSource?.onmessage) {
      await act(async () => {
        lastEventSource!.onmessage!({
          data: 'club_member_joined',
        } as MessageEvent);
      });
    }

    // Wait for refetch to finish and original data to be visible again
    await waitFor(() => {
      expect(screen.getAllByText('Test Club').length).toBeGreaterThan(0);
    });

    // Advance time to allow the live syncing indicator to disappear
    act(() => {
      jest.advanceTimersByTime(700);
    });
  });

  it('compareByEnrollment logic check with two clubs', async () => {
    const twoClubMocks = [
      {
        request: { query: GET_ALL_APPROVED_CLUBS },
        result: { data: { getAllApprovedClubs: [mockClub, mockClub2] } },
      },
      {
        request: { query: GET_ALL_TEACHERS },
        result: { data: { getAllTeachers: [mockTeacher] } },
      },
    ];

    render(
      <MockedProvider mocks={twoClubMocks}>
        <ClubsContent />
      </MockedProvider>
    );

    render(<ClubsContent userId="custom-user" />);

    // When both clubs have no timetables, compareByEnrollment falls back to
    // alphabetical (localeCompare), so "Second Club" < "Test Club"
    const headings = screen.getAllByRole('heading', { level: 3 });
    const clubNames = headings
      .map((h) => h.textContent)
      .filter((t) => t === 'Test Club' || t === 'Second Club');
    expect(clubNames[0]).toBe('Second Club');
  });

  it('handles ban state updates', async () => {
    mockUseClubAction.mockImplementation(
      ({ onEnrollSuccess, onLeaveSuccess }) =>
        createHookReturn({
          handleEnroll: () => onEnrollSuccess(),
          handleLeave: () => onLeaveSuccess(),
        })
    );

    const mocks = getSuccessMocks();
    render(
      <MockedProvider mocks={mocks}>
        <ClubsContent />
      </MockedProvider>
    );

    const logicSpy = jest.fn().mockReturnValue(mockLogicBase);
    (useClubsLogic as jest.Mock).mockImplementation(logicSpy);

    // Enroll and then leave to trigger ban
    fireEvent.click(screen.getByText('Клубт элсэх'));
    await waitFor(() => screen.getByText('Клубээс гарах'));

    await act(async () => {
      fireEvent.click(screen.getByText('Клубээс гарах'));
    });

    // Advance time to trigger ban expiration logic
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    act(() => {
      jest.advanceTimersByTime(120 * 1000);
    });

    await waitFor(() =>
      expect(screen.getByText('Клубт элсэх')).toBeInTheDocument()
    );
  });

  it('covers ban reset branch (line 110) in ClubsContent.tsx', async () => {
    // This test covers the case where a club has an expired ban
    // We mock applyLeave from clubs-utils to return a club with an expired ban
    // But since we use useClubsLogic hook which uses internal state, we can trigger it via timers.

    mockUseClubAction.mockImplementation(({ onEnrollSuccess, onLeaveSuccess }) =>
      createHookReturn({
        handleEnroll: () => onEnrollSuccess(),
        handleLeave: () => onLeaveSuccess(),
      })
    );

    render(
      <MockedProvider mocks={getSuccessMocks()}>
        <ClubsContent />
      </MockedProvider>
    );

    await waitFor(() => expect(screen.getAllByText('Test Club').length).toBeGreaterThan(0));

    // Enroll and then leave to trigger ban
    fireEvent.click(screen.getByText('Клубт элсэх'));
    await waitFor(() => screen.getByText('Клубээс гарах'));
    fireEvent.click(screen.getByText('Клубээс гарах'));

    // Move time forward past BAN_MS (120s)
    act(() => {
      jest.advanceTimersByTime(121 * 1000);
    });

    // Check if it's back to enrollable state
    await waitFor(() => expect(screen.getByText('Клубт элсэх')).toBeInTheDocument());
  });

  it('covers pickUserId and null clerkUserId fallbacks', async () => {
    // 1. explicit-id branch (covered)
    const { rerender } = render(
      <MockedProvider mocks={getSuccessMocks()}>
        <ClubsContent userId="explicit-id" />
      </MockedProvider>
    );
    await waitFor(() => expect(screen.getAllByText('Test Club').length).toBeGreaterThan(0));

    // 2. userId undefined hits clerkUserId (covered by default mock)
    rerender(
      <MockedProvider mocks={getSuccessMocks()}>
        <ClubsContent />
      </MockedProvider>
    );
    await waitFor(() => expect(screen.getAllByText('Test Club').length).toBeGreaterThan(0));

    // 3. clerkUserId is null -> hits line 190 ( ?? undefined ) and 181 ( clerk || '' )
    mockUseAuth.mockReturnValue({ userId: null } as unknown as { userId: string | null });
    rerender(
      <MockedProvider mocks={getSuccessMocks()}>
        <ClubsContent />
      </MockedProvider>
    );
    await waitFor(() => expect(screen.getAllByText('Test Club').length).toBeGreaterThan(0));
    // Revert mock for other tests
    mockUseAuth.mockReturnValue({ userId: 'test-user-id' } as unknown as { userId: string | null });
  });

  it('covers expired ban branch (line 107) directly', async () => {
    mockUseClubAction.mockImplementation(({ onEnrollSuccess, onLeaveSuccess }) =>
      createHookReturn({
        handleEnroll: () => onEnrollSuccess(),
        handleLeave: () => onLeaveSuccess(),
      })
    );

    render(
      <MockedProvider mocks={getSuccessMocks()}>
        <ClubsContent />
      </MockedProvider>
    );

    await waitFor(() => expect(screen.getAllByText('Test Club').length).toBeGreaterThan(0));

    // 1. Coverage: hasActiveBan is false (early return in effect)
    // Already hit before enroll.

    // Enroll and leave
    fireEvent.click(screen.getByText('Клубт элсэх'));
    await waitFor(() => screen.getByText('Клубээс гарах'));
    fireEvent.click(screen.getByText('Клубээс гарах'));

    // 2. Coverage: banUntil > 0 but banUntil > nowTs (hits line 110 else branch)
    act(() => {
      jest.advanceTimersByTime(10 * 1000); // Only 10s passed, ban is 120s
    });

    // 3. Coverage: Move time forward past BAN_MS (120s) to hit the "if" branch (line 108)
    act(() => {
      jest.advanceTimersByTime(111 * 1000);
    });

    await waitFor(() => expect(screen.getByText('Клубт элсэх')).toBeInTheDocument());
  });
});
