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

  it('does not fetch when isLoaded is false', async () => {
    useAuth.mockReturnValue({ isLoaded: false, userId: 'u1', getToken: jest.fn() });
    render(<MockedProvider mocks={[]}><MyClubsList /></MockedProvider>);
    await waitFor(() => {
      expect(screen.queryByText('Ачаалж байна...')).not.toBeInTheDocument();
    });
  });

  it('covers expansion toggle and fallbacks', async () => {
    const mocks = [
      {
        request: { query: GET_MY_CLUBS_DETAIL_FOR_TEST },
        result: {
          data: {
            getAllClubsByCreatorId: [
              {
                id: 'c2', name: 'Club 2', description: null, teacherId: 'unknown-t', type: null, status: 'approved',
                preferredTeachers: null, minMember: null, maxMember: null, frequency: null, clubTerm: null,
                timetables: [{ id: 'tt2', date: null, room: null, clubStartTime: null, duration: null, __typename: 'Timetable' }],
                members: null,
                __typename: 'Club',
              }
            ]
          }
        }
      },
      {
        request: { query: GET_ALL_TEACHERS },
        result: { data: { getAllTeachers: [] } }
      }
    ];

    render(<MockedProvider mocks={mocks}><MyClubsList /></MockedProvider>);
    const btn = await screen.findByRole('button', { name: /Club 2/i });

    // Expand
    fireEvent.click(btn);
    expect(await screen.findByText('Тайлбар байхгүй')).toBeInTheDocument();
    expect(screen.getByText('unknown-t')).toBeInTheDocument();
    expect(screen.getByText('- • - • - • 0 min')).toBeInTheDocument();

    // Collapse
    fireEvent.click(btn);
    await waitFor(() => {
      expect(screen.queryByText('Тайлбар байхгүй')).not.toBeInTheDocument();
    });
  });

  it('covers teacher name formatting combinations (line 137)', async () => {
    const mocks = [
      {
        request: { query: GET_MY_CLUBS_DETAIL_FOR_TEST },
        result: {
          data: {
            getAllClubsByCreatorId: [
              { id: 'c3', name: 'C3', status: 'approved', teacherId: 't-only-first', __typename: 'Club' },
              { id: 'c4', name: 'C4', status: 'approved', teacherId: 't-only-last', __typename: 'Club' },
              { id: 'c5', name: 'C5', status: 'approved', teacherId: null, __typename: 'Club' },
              { id: 'c6', name: 'C6', status: 'approved', teacherId: 't-none', __typename: 'Club' },
            ]
          }
        }
      },
      {
        request: { query: GET_ALL_TEACHERS },
        result: {
          data: {
            getAllTeachers: [
              { id: 't-only-first', firstName: 'OnlyFirst', lastName: null, __typename: 'Teacher' },
              { id: 't-only-last', firstName: null, lastName: 'OnlyLast', __typename: 'Teacher' },
              { id: 't-none', firstName: null, lastName: null, __typename: 'Teacher' },
            ]
          }
        }
      }
    ];
    render(<MockedProvider mocks={mocks}><MyClubsList /></MockedProvider>);

    // t-only-first
    const btn3 = await screen.findByRole('button', { name: /C3/i });
    fireEvent.click(btn3);
    expect(await screen.findByText('OnlyFirst')).toBeInTheDocument();

    // t-only-last
    const btn4 = await screen.findByRole('button', { name: /C4/i });
    fireEvent.click(btn4);
    expect(await screen.findByText('OnlyLast')).toBeInTheDocument();

    // teacherId null -> shows '-'
    const btn5 = await screen.findByRole('button', { name: /C5/i });
    fireEvent.click(btn5);
    expect(screen.getAllByText('-').length).toBeGreaterThan(0);

    // t-none (both names null) -> shows ID 't-none' (covers line 138-139)
    const btn6 = await screen.findByRole('button', { name: /C6/i });
    fireEvent.click(btn6);
    expect(await screen.findByText('t-none')).toBeInTheDocument();
  });

  it('covers club teacher and timetable fallbacks', async () => {
    const mocks = [
      {
        request: { query: GET_MY_CLUBS_DETAIL_FOR_TEST },
        result: {
          data: {
            getAllClubsByCreatorId: [
              {
                id: 'c3', name: 'Club 3', status: 'approved', teacherId: 'non-existent-teacher',
                timetables: [], members: [], __typename: 'Club',
              }
            ]
          }
        }
      },
      {
        request: { query: GET_ALL_TEACHERS },
        result: { data: { getAllTeachers: [] } }
      }
    ];

    render(<MockedProvider mocks={mocks}><MyClubsList /></MockedProvider>);
    const btn = await screen.findByRole('button', { name: /Club 3/i });
    fireEvent.click(btn);

    // non-existent-teacher fallback (line 220)
    expect(screen.getByText('non-existent-teacher')).toBeInTheDocument();
    // empty timetables fallback (line 277)
    expect(screen.getByText('Хуваарь алга')).toBeInTheDocument();
  });

  it('covers toTeacherArray with null (line 133)', async () => {
    const mocks = [
      {
        request: { query: GET_MY_CLUBS_DETAIL_FOR_TEST },
        result: { data: { getAllClubsByCreatorId: [] } }
      },
      {
        request: { query: GET_ALL_TEACHERS },
        result: { data: { getAllTeachers: null as any } }
      }
    ];
    render(<MockedProvider mocks={mocks}><MyClubsList /></MockedProvider>);
    await waitFor(() => expect(screen.queryByText('Ачаалж байна...')).not.toBeInTheDocument());
  });

  it('covers unmount during getToken (line 98)', async () => {
    let resolveToken: (_value: string) => void;
    const tokenPromise = new Promise<string>((resolve) => {
      resolveToken = resolve;
    });
    useAuth.mockReturnValue({
      isLoaded: true,
      userId: 'u1',
      getToken: jest.fn().mockReturnValue(tokenPromise),
    });

    const { unmount } = render(<MockedProvider mocks={[]}><MyClubsList /></MockedProvider>);
    unmount();
    act(() => {
      resolveToken!('token');
    });
  });

  it('covers unmount during getToken catch', async () => {
    let rejectToken: (_error: Error) => void;
    const tokenPromise = new Promise<string>((_, reject) => {
      rejectToken = reject;
    });
    useAuth.mockReturnValue({
      isLoaded: true,
      userId: 'u1',
      getToken: jest.fn().mockReturnValue(tokenPromise),
    });

    const { unmount } = render(<MockedProvider mocks={[]}><MyClubsList /></MockedProvider>);
    unmount();
    await act(async () => {
      rejectToken!(new Error('fail'));
    });
  });
});
