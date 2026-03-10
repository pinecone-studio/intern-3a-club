import React from 'react';
import { render, screen } from '@testing-library/react';
import { ClubsContent } from '../../app/JoinClub/_components/ClubsContent';

type MockAuthReturn = { userId: string | null | undefined };

const mockUseAuth = jest.fn<MockAuthReturn, []>(() => ({
  userId: 'clerk-user-1',
}));

jest.mock('@clerk/nextjs', () => ({
  useAuth: () => mockUseAuth(),
}));

jest.mock('../../app/JoinClub/_components/ClubDetail', () => ({
  ClubDetail: () => <div data-testid="club-detail" />,
}));

jest.mock('../../app/JoinClub/_components/ClubList', () => ({
  ClubList: () => <div data-testid="club-list" />,
}));

jest.mock('../../app/JoinClub/_components/utils/use-clubs-logic', () => ({
  useClubsLogic: jest.fn(),
}));

import { useClubsLogic } from '../../app/JoinClub/_components/utils/use-clubs-logic';

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
    mockUseAuth.mockReturnValue({ userId: 'clerk-user-1' });
  });

  it('loading үед "Уншиж байна..." харуулна', () => {
    (useClubsLogic as jest.Mock).mockReturnValue({
      ...mockLogicBase,
      loading: true,
    });

    render(<ClubsContent />);

    expect(screen.getByText(/Уншиж байна/)).toBeInTheDocument();
  });

  it('error үед алдааны мессеж харуулна', () => {
    (useClubsLogic as jest.Mock).mockReturnValue({
      ...mockLogicBase,
      error: { message: 'Сүлжээний алдаа' },
    });

    render(<ClubsContent />);

    expect(screen.getByText(/Сүлжээний алдаа/)).toBeInTheDocument();
  });

  it('амжилттай үед ClubList болон ClubDetail харуулна', () => {
    (useClubsLogic as jest.Mock).mockReturnValue(mockLogicBase);

    render(<ClubsContent />);

    expect(screen.getByTestId('club-list')).toBeInTheDocument();
    expect(screen.getByTestId('club-detail')).toBeInTheDocument();
  });

  it('userId prop дамжуулахад ажиллана', () => {
    (useClubsLogic as jest.Mock).mockReturnValue(mockLogicBase);

    render(<ClubsContent userId="custom-user" />);

    expect(screen.getByTestId('club-detail')).toBeInTheDocument();
  });

  it('clerkUserId байхгүй үед useClubsLogic(undefined)‑тэй дуудна', () => {
    mockUseAuth.mockReturnValueOnce({ userId: undefined });

    const logicSpy = jest.fn().mockReturnValue(mockLogicBase);
    (useClubsLogic as jest.Mock).mockImplementation(logicSpy);

    render(<ClubsContent />);

    expect(logicSpy).toHaveBeenCalledWith(undefined);
  });
});
