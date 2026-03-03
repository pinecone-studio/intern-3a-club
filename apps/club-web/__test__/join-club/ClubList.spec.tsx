import { render, screen, fireEvent } from '@testing-library/react';
import { ClubList } from '../../app/JoinClub/_components/ClubList';
import { ExtendedClub } from '../../lib/type'; 
import React from 'react';


interface MockClubCardProps { 
  club: ExtendedClub;
  isSelected: boolean;
  onClick: (_id: string) => void;
}

jest.mock('../../app/JoinClub/_components/ClubCard',() => ({
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

const mockClubs: ExtendedClub[] = [
  {
    id: '1',
    name: 'Robotics Club',
    description: 'Build robots',
    status: 'Open',
    teacherId: 'T1',
    creatorId: 'C1',
    type: 'mentor',
    minMember: 5,
    maxMember: 10,
    frequency: 'Weekly',
    clubTerm: 'Spring',
    timetables: [],
    __typename: 'Club',
    isEnrolled: false,
    bannedUntil: 0,
  },
  {
    id: '2',
    name: 'Art Club',
    description: 'Painting',
    status: 'Open',
    teacherId: 'T2',
    creatorId: 'C2',
    type: 'mentor',
    minMember: 2,
    maxMember: 5,
    frequency: 'Weekly',
    clubTerm: 'Spring',
    timetables: [],
    __typename: 'Club',
    isEnrolled: true,
    bannedUntil: 0,
  },
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
});