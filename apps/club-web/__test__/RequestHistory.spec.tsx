import { render, screen, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing/react';
import { RequestHistory } from '../components/club-add/RequestHistory';
import { GET_ALL_CLUBS_BY_CREATOR_ID } from '../lib/club-query';

jest.mock('@clerk/nextjs', () => ({
  useAuth: jest.fn(),
}));

let lastOnEvent: (() => void) | null = null;
jest.mock('../app/_hooks/use-club-realtime', () => ({
  useClubRealtime: jest.fn(({ onEvent }) => {
    lastOnEvent = onEvent;
  }),
}));

const { useAuth } = jest.requireMock('@clerk/nextjs') as {
  useAuth: jest.Mock;
};

const baseAuth = {
  isLoaded: true,
  userId: 'user-1',
  getToken: jest.fn().mockResolvedValue('token-1'),
};

describe('RequestHistory', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useAuth.mockReturnValue(baseAuth);
    lastOnEvent = null;
  });

  it('renders request rows with statuses and handles refetch', async () => {
    const mocks = [
      {
        request: { query: GET_ALL_CLUBS_BY_CREATOR_ID },
        result: {
          data: {
            getAllClubsByCreatorId: [
              { id: 'c1', name: 'Chess Club', status: 'approved', __typename: 'Club' },
            ],
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks}>
        <RequestHistory />
      </MockedProvider>
    );

    expect(await screen.findByText('Chess Club')).toBeInTheDocument();

    // Trigger realtime event
    if (lastOnEvent) {
      await act(async () => {
        lastOnEvent!();
      });
    }
  });

  it('handles loading and error states', async () => {
    const errorMock = [
      {
        request: { query: GET_ALL_CLUBS_BY_CREATOR_ID },
        error: new Error('Failed'),
      },
    ];
    render(<MockedProvider mocks={errorMock}><RequestHistory /></MockedProvider>);
    expect(await screen.findAllByTestId('loading-skeleton')).toHaveLength(3);
    expect(await screen.findByText(/Хүсэлт ачааллахад алдаа гарлаа: Failed/)).toBeInTheDocument();
  });

  it('covers getToken catch block', async () => {
    useAuth.mockReturnValue({
      isLoaded: true,
      userId: 'user-1',
      getToken: jest.fn().mockRejectedValue(new Error('fail')),
    });
    await act(async () => {
      render(<MockedProvider mocks={[]}><RequestHistory /></MockedProvider>);
    });
  });

  it('covers userId missing', async () => {
    useAuth.mockReturnValue({
      isLoaded: true,
      userId: null,
      getToken: jest.fn(),
    });
    await act(async () => {
      render(<MockedProvider mocks={[]}><RequestHistory /></MockedProvider>);
    });
  });

  it('renders non-approved status with amber styling', async () => {
    const mocks = [
      {
        request: { query: GET_ALL_CLUBS_BY_CREATOR_ID },
        result: {
          data: {
            getAllClubsByCreatorId: [
              { id: 'c2', name: 'Pending Club', status: 'pending', __typename: 'Club' },
            ],
          },
        },
      },
    ];
    render(<MockedProvider mocks={mocks}><RequestHistory /></MockedProvider>);
    expect(await screen.findByText('Pending Club')).toBeInTheDocument();
    expect(await screen.findByText('pending')).toBeInTheDocument();
  });

  it('shows empty state when no requests', async () => {
    const mocks = [
      {
        request: { query: GET_ALL_CLUBS_BY_CREATOR_ID },
        result: { data: { getAllClubsByCreatorId: [] } },
      },
    ];
    render(<MockedProvider mocks={mocks}><RequestHistory /></MockedProvider>);
    await waitFor(
      () => {
        expect(screen.getByText('Таны илгээсэн хүсэлт алга байна.')).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  it('covers statusText fallback (line 27)', async () => {
    const mocks = [
      {
        request: { query: GET_ALL_CLUBS_BY_CREATOR_ID },
        result: {
          data: {
            getAllClubsByCreatorId: [
              { id: 'c3', name: 'No Status Club', status: undefined, __typename: 'Club' },
            ],
          },
        },
      },
    ];
    render(<MockedProvider mocks={mocks}><RequestHistory /></MockedProvider>);
    expect(await screen.findByText('unknown')).toBeInTheDocument();
  });

  it('covers isLoaded false (line 67)', async () => {
    useAuth.mockReturnValue({
      isLoaded: false,
      userId: 'user-1',
      getToken: jest.fn(),
    });
    render(<MockedProvider mocks={[]}><RequestHistory /></MockedProvider>);
    // Should return early and not show loading
    expect(screen.queryByTestId('loading-skeleton')).not.toBeInTheDocument();
  });

  it('covers unmount during getToken (line 83)', async () => {
    let resolveToken: (_value: string) => void;
    const tokenPromise = new Promise<string>((resolve) => {
      resolveToken = resolve;
    });
    useAuth.mockReturnValue({
      isLoaded: true,
      userId: 'u1',
      getToken: jest.fn().mockReturnValue(tokenPromise),
    });

    const { unmount } = render(<MockedProvider mocks={[]}><RequestHistory /></MockedProvider>);
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

    const { unmount } = render(<MockedProvider mocks={[]}><RequestHistory /></MockedProvider>);
    unmount();
    await act(async () => {
      rejectToken!(new Error('fail'));
    });
  });
});
