import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing/react';
import { RequestHistory } from '../components/club-add/RequestHistory';
import { GET_ALL_CLUBS_BY_CREATOR_ID } from '../lib/club-query';

jest.mock('@clerk/nextjs', () => ({
  useAuth: jest.fn(),
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
  });

  it('renders request rows with statuses', async () => {
    const mocks = [
      {
        request: { query: GET_ALL_CLUBS_BY_CREATOR_ID },
        result: {
          data: {
            getAllClubsByCreatorId: [
              { id: 'c1', name: 'Chess Club', status: 'approved' },
              { id: 'c2', name: 'Robotics Club', status: 'pending' },
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
    expect(screen.getByText('Robotics Club')).toBeInTheDocument();
    expect(screen.getByText('approved')).toBeInTheDocument();
    expect(screen.getByText('pending')).toBeInTheDocument();
  });

  it('renders empty message when user is not authenticated', async () => {
    useAuth.mockReturnValue({
      isLoaded: true,
      userId: null,
      getToken: jest.fn().mockResolvedValue(null),
    });

    render(
      <MockedProvider mocks={[]}>
        <RequestHistory />
      </MockedProvider>
    );

    expect(
      await screen.findByText('Таны илгээсэн хүсэлт алга байна.')
    ).toBeInTheDocument();
  });
});
