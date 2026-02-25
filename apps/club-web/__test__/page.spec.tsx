import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useQuery } from '@apollo/client/react';
import JoinClubPage from '../app/JoinClub/page';

// 1. Apollo Mock
jest.mock('@apollo/client/react', () => ({
  useQuery: jest.fn(),
}));

// 2. ClubsContent Mock (Замыг зассан)
jest.mock('../app/JoinClub/_components/ClubsContent', () => ({
  ClubsContent: () => <div data-testid="clubs-content">Clubs Content Mock</div>,
}));

const mockUseQuery = useQuery as unknown as jest.Mock;

describe('JoinClubPage Full Coverage', () => {
  it('Loading, Error, and Success states', () => {
    // 1. Loading
    mockUseQuery.mockReturnValue({ loading: true });
    render(<JoinClubPage />);
    expect(screen.getByText('Уншиж байна...')).toBeInTheDocument();

    // 2. Error
    mockUseQuery.mockClear();
    mockUseQuery.mockReturnValue({
      loading: false,
      error: { message: 'Fetch Fail' },
    });
    render(<JoinClubPage />);
    expect(screen.getByText(/Алдаа гарлаа: Fetch Fail/)).toBeInTheDocument();

    // 3. Success (Line 11-16)
    mockUseQuery.mockClear();
    mockUseQuery.mockReturnValue({ loading: false, data: { getAllClubs: [] } });
    render(<JoinClubPage />);
    expect(screen.getByTestId('clubs-content')).toBeInTheDocument();
  });
});
