import { fireEvent, render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing/react';
import gql from 'graphql-tag';
import { MyClubsList } from '../components/club-add/PersonalClubs';
import { GET_ALL_TEACHERS } from '../lib/club-query';

jest.mock('@clerk/nextjs', () => ({
  useAuth: jest.fn(),
}));

let lastOnEvent: (() => void) | null = null;
jest.mock('../app/_hooks/use-club-realtime', () => ({
  useClubRealtime: jest.fn(({ onEvent }) => {
    lastOnEvent = onEvent;
  }),
}));

jest.mock('framer-motion', () => ({
  motion: {
    button: ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
      <button {...props}>{children}</button>
    ),
  },
}));

const { useAuth } = jest.requireMock('@clerk/nextjs') as {
  useAuth: jest.Mock;
};

// EXACT MATCH of the query in PersonalClubs.tsx
const GET_MY_CLUBS_DETAIL_FOR_TEST = gql`
  query GetAllClubsByCreatorId {
    getAllClubsByCreatorId {
      id
      name
      description
      teacherId
      type
      status
      preferredTeachers
      minMember
      maxMember
      frequency
      clubTerm
      timetables {
        id
        date
        room
        clubStartTime
        duration
      }
      members {
        id
        studentId
      }
    }
  }
`;

describe('MyClubsList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useAuth.mockReturnValue({
      isLoaded: true,
      userId: 'user-1',
      getToken: jest.fn().mockResolvedValue('token-1'),
    });
    lastOnEvent = null;
  });

  it('renders loading state then empty', async () => {
    const mocks = [
      {
        request: { query: GET_MY_CLUBS_DETAIL_FOR_TEST },
        result: { data: { getAllClubsByCreatorId: [] } },
        delay: 50,
      },
    ];
    render(<MockedProvider mocks={mocks}><MyClubsList /></MockedProvider>);
    await waitFor(() => expect(screen.getByText('Ачаалж байна...')).toBeInTheDocument());
    expect(await screen.findByText(/Approved болсон клуб одоогоор алга байна/)).toBeInTheDocument();
  });

  it('renders clubs and handles realtime refetch', async () => {
    const mocks = [
      {
        request: { query: GET_MY_CLUBS_DETAIL_FOR_TEST },
        result: {
          data: {
            getAllClubsByCreatorId: [
              {
                id: 'c1', name: 'Club 1', description: 'D1', teacherId: 't1', type: 'mentor', status: 'approved',
                preferredTeachers: null, minMember: 1, maxMember: 10, frequency: 'ONCE', clubTerm: '1',
                timetables: [{ id: 'tt1', date: '2024-10-10', room: 'R1', clubStartTime: '10:00', duration: 60, __typename: 'Timetable' }],
                members: [{ id: 'm1', studentId: 's1', __typename: 'Member' }],
                __typename: 'Club',
              }
            ]
          }
        }
      },
      {
        request: { query: GET_ALL_TEACHERS },
        result: { data: { getAllTeachers: [{ id: 't1', firstName: 'A', lastName: 'B', __typename: 'Teacher' }] } }
      }
    ];

    render(<MockedProvider mocks={mocks}><MyClubsList /></MockedProvider>);
    const btn = await screen.findByRole('button', { name: /Club 1/i });
    fireEvent.click(btn);
    expect(await screen.findByText('A B')).toBeInTheDocument();

    // Trigger realtime
    if (lastOnEvent) {
      await act(async () => {
        lastOnEvent!();
      });
    }
  });

  it('covers error state', async () => {
    const mocks = [{ request: { query: GET_MY_CLUBS_DETAIL_FOR_TEST }, error: new Error('fail') }];
    render(<MockedProvider mocks={mocks}><MyClubsList /></MockedProvider>);
    expect(await screen.findByText(/Клуб ачааллахад алдаа гарлаа: fail/)).toBeInTheDocument();
  });

  it('covers catch block in getToken', async () => {
    useAuth.mockReturnValue({ isLoaded: true, userId: 'u1', getToken: jest.fn().mockRejectedValue('fail') });
    await act(async () => {
      render(<MockedProvider mocks={[]}><MyClubsList /></MockedProvider>);
    });
    await waitFor(() => expect(screen.queryByText('Ачаалж байна...')).not.toBeInTheDocument());
  });

  it('covers userId missing', async () => {
    useAuth.mockReturnValue({ isLoaded: true, userId: null, getToken: jest.fn() });
    await act(async () => {
      render(<MockedProvider mocks={[]}><MyClubsList /></MockedProvider>);
    });
  });
});
