import { render, screen, fireEvent } from '@testing-library/react';
import { ClubList } from '../../app/JoinClub/_components/ClubList';
import { ExtendedClub } from '../../lib/type';
import React from 'react';

interface MockClubCardProps {
  club: ExtendedClub;
  isSelected: boolean;
  onClick: (_id: string) => void;
}

jest.mock('../../app/JoinClub/_components/ClubCard', () => ({
  ClubCard: ({ club, isSelected, onClick }: MockClubCardProps) => (
    <div
      data-testid={`club-card-${club.id}`}
      onClick={() => onClick(club.id)}
      style={{ border: isSelected ? '1px solid blue' : 'none' }}
    >
      {club.name}
    </div>
  ),
}));

const mockTimetable = {
  id: 'tt-1',
  clubId: 'club-1',
  date: 'Даваа, Лхагва',
  room: '401-р өрөө',
  clubStartTime: '18:00-20:00',
  duration: 120,
};

const makeClub = (id: string, name: string): ExtendedClub =>
  ({
    id,
    name,
    description: 'desc',
    type: 'Premium',
    status: 'ACTIVE',
    teacherId: 'teacher-1',
    creatorId: 'creator-1',
    frequency: 'WEEKLY',
    clubTerm: 'FIRST',
    minMember: 5,
    maxMember: 20,
    timetables: [mockTimetable],
    isEnrolled: false,
    bannedUntil: 0,
    createdAt: new Date().toISOString(),
    startDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
  } as ExtendedClub);

const mockClubs: ExtendedClub[] = [
  makeClub('1', 'Robotics Club'),
  makeClub('2', 'Art Club'),
];

describe('ClubList Component', () => {
  const mockOnSelect = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Клубуудын жагсаалтыг бүрэн дүрсэлж харуулах ёстой', () => {
    render(
      <ClubList clubs={mockClubs} selectedClubId="1" onSelect={mockOnSelect} />
    );
    expect(screen.getByText('Robotics Club')).toBeInTheDocument();
    expect(screen.getByText('Art Club')).toBeInTheDocument();
  });

  it('Клуб дээр дарахад onSelect функц зөв ID-тай дуудагдах ёстой', () => {
    render(
      <ClubList clubs={mockClubs} selectedClubId="1" onSelect={mockOnSelect} />
    );
    const artClubCard = screen.getByTestId('club-card-2');
    fireEvent.click(artClubCard);
    expect(mockOnSelect).toHaveBeenCalledWith('2');
  });

  it('Сонгогдсон клуб (selectedClubId) зөв style-тай байх ёстой', () => {
    render(
      <ClubList clubs={mockClubs} selectedClubId="1" onSelect={mockOnSelect} />
    );
    const selectedClub = screen.getByTestId('club-card-1');
    expect(selectedClub).toHaveStyle('border: 1px solid blue');
  });

  it('shows syncing indicator when isLiveSyncing is true', () => {
    render(
      <ClubList
        clubs={mockClubs}
        selectedClubId="1"
        onSelect={mockOnSelect}
        isLiveSyncing={true}
      />
    );
    expect(screen.getByText('Syncing...')).toBeInTheDocument();
  });
});
