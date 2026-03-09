import React from 'react';
import { render, screen } from '@testing-library/react';
import JoinClubPage from '../../app/JoinClub/page';

jest.mock('@clerk/nextjs', () => ({
  useAuth: () => ({ userId: 'test-user-id' }),
  useUser: () => ({ user: { id: 'test-user-id' } }),
}));

jest.mock('../../app/JoinClub/_components', () => ({
  ClubListSkeleton: () => <div data-testid="club-list-skeleton" />,
  ClubDetailSkeleton: () => <div data-testid="club-detail-skeleton" />,
}));

jest.mock('../../app/JoinClub/_components/ClubsContent', () => ({
  ClubsContent: () => <div data-testid="clubs-content" />,
}));

jest.mock('@apollo/client/react', () => ({
  useQuery: jest.fn(),
}));

import { useQuery } from '@apollo/client/react';

const mockUseQuery = useQuery as unknown as jest.Mock;

describe('JoinClubPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('loading үед skeleton‑уудыг харуулна', () => {
    mockUseQuery.mockReturnValue({
      loading: true,
      error: null,
      data: null,
    });

    render(<JoinClubPage />);

    expect(screen.getByTestId('club-list-skeleton')).toBeInTheDocument();
    expect(screen.getByTestId('club-detail-skeleton')).toBeInTheDocument();
    expect(screen.queryByTestId('clubs-content')).not.toBeInTheDocument();
  });

  it('алдаа гарсан үед алдааны мессеж харуулна', () => {
    mockUseQuery.mockReturnValue({
      loading: false,
      error: { message: 'Network error' },
      data: null,
    });

    render(<JoinClubPage />);

    expect(screen.getByText(/Алдаа гарлаа/)).toBeInTheDocument();
    expect(screen.getByText(/Network error/)).toBeInTheDocument();
    expect(screen.queryByTestId('clubs-content')).not.toBeInTheDocument();
  });

  it('амжилттай үед ClubsContent болон wrapper‑ийг харуулна', () => {
    mockUseQuery.mockReturnValue({
      loading: false,
      error: null,
      data: { getAllApprovedClubs: [] },
    });

    const { container } = render(<JoinClubPage />);

    expect(screen.getByTestId('clubs-content')).toBeInTheDocument();
    expect(screen.queryByTestId('club-list-skeleton')).not.toBeInTheDocument();
    expect(
      screen.queryByTestId('club-detail-skeleton')
    ).not.toBeInTheDocument();

    const wrapper = container.querySelector('.min-h-screen');
    expect(wrapper).toBeTruthy();
  });
});
