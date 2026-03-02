import { render, screen, fireEvent } from '@testing-library/react';
import { ClubList } from '../app/JoinClub/_components/ClubList';
import { GetAllClub } from '../lib/type';
import React from 'react';

// 1. ClubCard-ийг mock хийхдээ 'any' ашиглахгүйгээр төрлийг нь зааж өгөх
interface MockClubCardProps {
  club: GetAllClub;
  isSelected: boolean;
  onClick: (_id: string) => void;
}

jest.mock('../app/JoinClub/_components/ClubCard', () => ({
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

const mockClubs: GetAllClub[] = [
  {
    id: '1',
    name: 'Robotics Club',
    description: 'Build robots',
    status: 'Open',
    teacherId: 'T1',
    type: 'mentor',
    minMember: 5,
    maxMember: 10,
    timetables: [],
  },
  {
    id: '2',
    name: 'Art Club',
    description: 'Painting',
    status: 'Open',
    teacherId: 'T2',
    type: 'mentor',
    minMember: 2,
    maxMember: 5,
    timetables: [],
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
