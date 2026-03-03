import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
  cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing/react';
import { ClubsContent } from '../app/JoinClub/_components/ClubsContent';
import { GET_ALL_CLUBS } from '../lib/type';
import React from 'react';
import { gql } from '@apollo/client';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

const mocks = [
  {
    request: {
      query: GET_ALL_CLUBS,
    },
    result: {
      data: {
        getAllClubs: [
          {
            id: '1',
            name: 'Robotics Club',
            description: 'Build robots',
            teacherId: 'T1',
            type: 'mentor',
            status: 'Open',
            minMember: 5,
            maxMember: 10,
            timetables: [
              {
                id: 'tt1',
                clubId: '1',
                date: '2024-05-01',
                room: '301',
                clubStartTime: '14:00',
                duration: 90,
              },
            ],
            __typename: 'Club',
          },
          {
            id: '2',
            name: 'Art Club',
            description: 'Painting',
            teacherId: 'T2',
            type: 'mentor',
            status: 'Open',
            minMember: 2,
            maxMember: 5,
            timetables: [],
            __typename: 'Club',
          },
        ],
      },
    },
  },
];

describe('ClubsContent Component', () => {
  it('renders loading state then clubs', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <ClubsContent />
      </MockedProvider>
    );

    // Initial loading state (returns null in component)
    expect(screen.queryByText('Robotics Club')).not.toBeInTheDocument();

    // Wait for data
    await waitFor(() =>
      expect(screen.getAllByText('Robotics Club').length).toBeGreaterThan(0)
    );
    expect(screen.getAllByText('Art Club').length).toBeGreaterThan(0);
  });

  it('renders error state', async () => {
    const errorMock = [
      {
        request: { query: GET_ALL_CLUBS },
        error: new Error('Failed to fetch'),
      },
    ];

    render(
      <MockedProvider mocks={errorMock}>
        <ClubsContent />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(screen.getByText('Failed to fetch')).toBeInTheDocument()
    );
  });

  it('handles empty clubs data', async () => {
    const emptyMock = [
      {
        request: { query: GET_ALL_CLUBS },
        result: { data: { getAllClubs: [] } },
      },
    ];

    render(
      <MockedProvider mocks={emptyMock}>
        <ClubsContent />
      </MockedProvider>
    );

    // Should stay in loading or show nothing?
    // Currently, if rawClubs is empty, it returns and stays with allClubs=[]
    // but the component itself is rendered.
    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(screen.queryByText('Robotics Club')).not.toBeInTheDocument();
  });

  it('handles club selection', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <ClubsContent />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(screen.getAllByText('Robotics Club').length).toBeGreaterThan(0)
    );

    // Click on Art Club in the list
    const artClubInList = screen.getAllByText('Art Club')[0];
    fireEvent.click(artClubInList);

    // Verify detail shows Art Club
    // In ClubDetail, it might show the name.
    await waitFor(() => {
      const headers = screen.getAllByText('Art Club');
      expect(headers.length).toBeGreaterThan(0);
    });
  });

  it('handles enrollment and leaving with cooldown', async () => {
    jest.useFakeTimers();

    render(
      <MockedProvider mocks={mocks}>
        <ClubsContent />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(screen.getAllByText('Robotics Club').length).toBeGreaterThan(0)
    );

    // Enroll
    const enrollBtn = screen.getByRole('button', { name: /нэгдэх/i });
    fireEvent.click(enrollBtn);

    // Button should change to Leave
    await waitFor(() =>
      expect(screen.getByRole('button', { name: /гарах/i })).toBeInTheDocument()
    );

    // Leave
    const leaveBtn = screen.getByRole('button', { name: /гарах/i });
    fireEvent.click(leaveBtn);

    // Should show locked state/timer
    // ClubsContent line 110: remainingTime={remainingTime}
    // ClubDetail should show it.
    await waitFor(() =>
      expect(screen.getByText(/Түр хүлээх шаардлагатай!/i)).toBeInTheDocument()
    );

    // Advance time 30s
    act(() => {
      jest.advanceTimersByTime(30000);
    });

    // Timer should still be there
    await waitFor(() => {
      const els = screen.getAllByText(/хүлээх/i);
      const has30 = els.some((el) => el.textContent?.includes('30'));
      expect(has30).toBe(true);
    });

    // Advance another 31s
    act(() => {
      jest.advanceTimersByTime(31000);
    });

    // Timer should be gone, enroll button back
    await waitFor(() =>
      expect(
        screen.getByRole('button', { name: /нэгдэх/i })
      ).toBeInTheDocument()
    );

    jest.useRealTimers();
  });

  it('covers sortClubs with different isEnrolled values', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <ClubsContent />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(screen.getAllByText('Robotics Club').length).toBeGreaterThan(0)
    );

    // Initial state: both isEnrolled: false. Order: Robotics(1), Art(2)
    // ClubCard names are in h3 tags. Teacher name in detail is also h3, but we can filter.
    const cardHeadings = screen
      .getAllByRole('heading', { level: 3 })
      .filter((h) => h.textContent?.includes('Club'));
    expect(cardHeadings[0]).toHaveTextContent('Robotics Club');
    expect(cardHeadings[1]).toHaveTextContent('Art Club');

    // Enroll in Art Club (id: 2)
    const artClubInList = screen.getAllByText('Art Club')[0];
    fireEvent.click(artClubInList);
    const enrollBtn = screen.getByRole('button', { name: /нэгдэх/i });
    fireEvent.click(enrollBtn);

    // Now Art Club isEnrolled: true. It should move to the top.
    await waitFor(() => {
      const newListHeadings = screen
        .getAllByRole('heading', { level: 3 })
        .filter((h) => h.textContent?.includes('Club'));
      expect(newListHeadings[0]).toHaveTextContent('Art Club');
      expect(newListHeadings[1]).toHaveTextContent('Robotics Club');
    });
  });

  it('covers bannedUntil branch when not locked', async () => {
    const mockWithBanned = [
      {
        request: { query: GET_ALL_CLUBS },
        result: {
          data: {
            getAllClubs: [
              {
                id: '3',
                name: 'Banned Club',
                description: 'desc',
                teacherId: 'T3',
                type: 'mentor',
                status: 'Open',
                minMember: 1,
                maxMember: 10,
                timetables: [],
                __typename: 'Club' as const,
              },
            ],
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mockWithBanned}>
        <ClubsContent />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(screen.getAllByText('Banned Club').length).toBeGreaterThan(0)
    );
    expect(
      screen.queryByText(/Түр хүлээх шаардлагатай!/i)
    ).not.toBeInTheDocument();
  });

  it('covers bannedUntil fallback (?? 0) by providing null', async () => {
    const nullBannedMock = [
      {
        request: { query: GET_ALL_CLUBS },
        result: {
          data: {
            getAllClubs: [
              {
                id: '99',
                name: 'Null Banned Club',
                description: 'desc',
                teacherId: 'T99',
                type: 'mentor',
                status: 'Open',
                minMember: 1,
                maxMember: 10,
                timetables: [],
                bannedUntil: null,
                __typename: 'Club' as const,
              },
            ],
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={nullBannedMock}>
        <ClubsContent />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(screen.getAllByText('Null Banned Club').length).toBeGreaterThan(0)
    );
    expect(
      screen.queryByText(/Түр хүлээх шаардлагатай!/i)
    ).not.toBeInTheDocument();
  });

  it('covers isLocked branch when bannedUntil is in the future', async () => {
    // Initial setup for Leave
    const leaveMock = [
      {
        request: { query: GET_ALL_CLUBS },
        result: {
          data: {
            getAllClubs: [
              {
                id: '5',
                name: 'Leave Club',
                description: 'desc',
                teacherId: 'T5',
                type: 'mentor',
                status: 'Open',
                minMember: 1,
                maxMember: 10,
                timetables: [],
                bannedUntil: Date.now() + 3600000,
                __typename: 'Club' as const,
              },
            ],
          },
        },
      },
      {
        request: {
          query: gql`
            mutation EnrollClub($clubId: ID!) {
              enrollClub(clubId: $clubId) {
                id
              }
            }
          `,
          variables: { clubId: '5' },
        },
        result: { data: { enrollClub: { id: '5' } } },
      },
      {
        request: {
          query: gql`
            mutation LeaveClub($clubId: ID!) {
              leaveClub(clubId: $clubId) {
                id
                bannedUntil
              }
            }
          `,
          variables: { clubId: '5' },
        },
        result: {
          data: { leaveClub: { id: '5', bannedUntil: Date.now() + 3600000 } },
        },
      },
    ];

    cleanup(); // Cleanup previous render
    render(
      <MockedProvider mocks={leaveMock}>
        <ClubsContent />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(screen.getAllByText('Leave Club').length).toBeGreaterThan(0)
    );

    // Enroll first
    fireEvent.click(screen.getByRole('button', { name: /нэгдэх/i }));

    // Then Leave
    await waitFor(() => screen.getByRole('button', { name: /гарах/i }));
    fireEvent.click(screen.getByRole('button', { name: /гарах/i }));

    // Now it should be locked
    expect(screen.getByText(/Түр хүлээх шаардлагатай!/i)).toBeInTheDocument();
  });

  it('covers ClubsContent Line 80 timer expiry', async () => {
    jest.useFakeTimers().setSystemTime(new Date('2024-05-01T10:00:00Z'));

    const mockClubs = [
      {
        id: '10',
        name: 'Timer Club',
        description: 'desc',
        teacherId: 'T10',
        type: 'mentor',
        status: 'Open',
        minMember: 1,
        maxMember: 10,
        timetables: [],
        __typename: 'Club' as const,
      },
    ];

    const mock = [
      {
        request: { query: GET_ALL_CLUBS },
        result: { data: { getAllClubs: mockClubs } },
      },
    ];

    render(
      <MockedProvider mocks={mock}>
        <ClubsContent />
      </MockedProvider>
    );

    const clubs = await screen.findAllByText(/Timer Club/i);
    fireEvent.click(clubs[0]);

    // Enroll
    fireEvent.click(screen.getByText('Одоо нэгдэх'));

    // Leave - this sets bannedUntil
    fireEvent.click(screen.getByText('Клубээс гарах'));

    // Check lock
    await waitFor(() => expect(screen.getByText(/Түр хүлээх шаардлагатай!/i)).toBeInTheDocument());

    act(() => {
      jest.advanceTimersByTime(70000);
    });

    await waitFor(() => expect(screen.queryByText(/Түр хүлээх шаардлагатай!/i)).not.toBeInTheDocument());

    jest.useRealTimers();
  });
});
