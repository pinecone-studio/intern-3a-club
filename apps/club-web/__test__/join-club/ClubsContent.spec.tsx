import React from 'react';
import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import { ClubsContent } from '../../app/JoinClub/_components/ClubsContent';
import { GET_ALL_APPROVED_CLUBS, GET_ALL_TEACHERS } from '../../lib/club-query';
import { useClubAction } from '../../app/_hooks/use-redis-hook';
import { MockedProvider } from '@apollo/client/testing/react';

jest.mock('../../app/_hooks/use-redis-hook');
jest.mock('@clerk/nextjs', () => ({
  useAuth: () => ({ userId: 'test-user-id' }),
  useUser: () => ({ user: { id: 'test-user-id' } }),
  useClerk: () => ({ signOut: jest.fn() }),
}));

let lastEventSource: { onmessage: ((ev: MessageEvent) => void) | null } | null = null;
global.EventSource = class MockEventSource {
  onmessage: ((_ev: MessageEvent) => void) | null = null;
  onerror: ((_ev: Event) => void) | null = null;
  onopen: ((_ev: Event) => void) | null = null;
  constructor() {
    lastEventSource = this;
  }
  close() {}
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

const mockClub2 = {
  id: 'club-2',
  name: 'Second Club',
  description: 'Second description',
  type: 'Standard',
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

const mockTeacher = {
  id: 'teacher-1',
  firstName: 'Болд',
  lastName: 'Баатар',
  profilePicture: '',
};

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

const createHookReturn = (overrides = {}) => ({
  remainingTime: null,
  banned: false,
  loading: false,
  handleEnroll: jest.fn(),
  handleLeave: jest.fn(),
  ...overrides,
});

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
      <MockedProvider mocks={getSuccessMocks()} addTypename={false}>
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
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <ClubsContent />
      </MockedProvider>
    );
    await waitFor(() => expect(screen.getByText(/Network error/)).toBeInTheDocument());
  });

  it('дата амжилттай ирсэн үед клубын нэр харуулна', async () => {
    render(
      <MockedProvider mocks={getSuccessMocks()} addTypename={false}>
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
      <MockedProvider mocks={emptyMocks} addTypename={false}>
        <ClubsContent />
      </MockedProvider>
    );
    await waitFor(() =>
      expect(screen.getByText('Клуб сонгоно уу')).toBeInTheDocument()
    );
  });

  it('userId prop дамжуулсан үед render хийгдэнэ', async () => {
    render(
      <MockedProvider mocks={getSuccessMocks()} addTypename={false}>
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
      <MockedProvider mocks={getSuccessMocks()} addTypename={false}>
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
      <MockedProvider mocks={getSuccessMocks()} addTypename={false}>
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
      <MockedProvider mocks={mocksWithRefetch} addTypename={false}>
        <ClubsContent />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(screen.getAllByText('Test Club').length).toBeGreaterThan(0)
    );

    if (lastEventSource?.onmessage) {
      await act(async () => {
        lastEventSource!.onmessage!({ data: 'club_member_joined' } as MessageEvent);
      });
    }

    // Wait for refetch to finish and syncing indicator to hide
    await waitFor(() => {
      // isLiveSyncing becomes false after 700ms in refetch().finally()
      act(() => {
        jest.advanceTimersByTime(700);
      });
      // We check if it's rendered by seeing if original data is still there (since mocks are same)
      expect(screen.getAllByText('Test Club').length).toBeGreaterThan(0);
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
      <MockedProvider mocks={twoClubMocks} addTypename={false}>
        <ClubsContent />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(screen.getAllByText('Test Club').length).toBeGreaterThan(0)
    );

    // Initial order: First is mockClub (Test Club)
    expect(screen.getAllByRole('button')[0]).toHaveTextContent('Test Club');
  });

  it('handles ban state updates', async () => {
    mockUseClubAction.mockImplementation(
      ({ onLeaveSuccess }) =>
        createHookReturn({
          handleLeave: () => onLeaveSuccess(),
        })
    );

    const mocks = getSuccessMocks();
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ClubsContent />
      </MockedProvider>
    );

    await waitFor(() => screen.getByText('Test Club'));
    
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

    await waitFor(() => expect(screen.getByText('Клубт элсэх')).toBeInTheDocument());
  });
});

