import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useQuery } from '@apollo/client/react';
import JoinClubPage from '../app/JoinClub/page';

// 1. Apollo useQuery-г mock хийх
jest.mock('@apollo/client/react', () => ({
  useQuery: jest.fn(),
}));

const mockUseQuery = useQuery as unknown as jest.Mock;

describe('JoinClubPage', () => {
  // Тест бүрийн дараа цэвэрлэх
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('Уншиж байх үеийн төлөвийг зөв харуулдаг (Loading state)', () => {
    mockUseQuery.mockReturnValue({
      loading: true,
      error: undefined,
      data: undefined,
    });

    render(<JoinClubPage />);
    expect(screen.getByText('Уншиж байна...')).toBeInTheDocument();
  });

  it('Алдаа гарсан үеийн төлөвийг зөв харуулдаг (Error state)', () => {
    mockUseQuery.mockReturnValue({
      loading: false,
      error: { message: 'Холболтын алдаа' },
      data: undefined,
    });

    render(<JoinClubPage />);
    expect(
      screen.getByText(/Алдаа гарлаа: Холболтын алдаа/)
    ).toBeInTheDocument();
  });

  it('Дата амжилттай ирсэн үед "hello" гэж харуулдаг (Success state)', () => {
    mockUseQuery.mockReturnValue({
      loading: false,
      error: undefined,
      data: {
        getAllClubs: [{ id: '1', name: 'Test Club' }],
      },
    });

    render(<JoinClubPage />);

    // Таны код дээр одоогоор "hello" гэж байгаа тул:
    expect(screen.getByText('hello')).toBeInTheDocument();
  });
});
