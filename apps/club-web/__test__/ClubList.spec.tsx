import { render, screen, fireEvent } from '@testing-library/react';
import { ClubList } from '../app/JoinClub/_components/ClubList';
import { Club, Instructor } from '../lib/type';
import React from 'react';

// 1. ClubCard-ийг mock хийхдээ 'any' ашиглахгүйгээр төрлийг нь зааж өгөх
interface MockClubCardProps {
  club: Club;
  isSelected: boolean;
  onClick: (_id: number) => void;
}

jest.mock('./ClubCard', () => ({
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

// 2. Тестийн датанд ашиглах 'ExtendedClub' интерфейсийг энд тодорхойлох
interface ExtendedClub extends Club {
  isEnrolled?: boolean;
  bannedUntil?: number;
}

const mockClubs: ExtendedClub[] = [
  {
    id: 1,
    name: 'Robotics Club',
    description: 'Build robots',
    status: 'Open',
    schedule: 'Mon',
    time: '16:00',
    class: 'Room 1',
    currentMembers: 5,
    maxMembers: 10,
    image: '/img1.jpg',
    instructors: [] as Instructor[],
    enrolledStudents: [] as string[],
    isEnrolled: false,
  },
  {
    id: 2,
    name: 'Art Club',
    description: 'Painting',
    status: 'Open',
    schedule: 'Tue',
    time: '15:00',
    class: 'Room 2',
    currentMembers: 2,
    maxMembers: 5,
    image: '/img2.jpg',
    instructors: [] as Instructor[],
    enrolledStudents: [] as string[],
    isEnrolled: true,
  },
];

describe('ClubList Component', () => {
  const mockOnSelect = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Клубуудын жагсаалтыг бүрэн дүрсэлж харуулах ёстой', () => {
    render(
      <ClubList clubs={mockClubs} selectedClubId={1} onSelect={mockOnSelect} />
    );

    expect(screen.getByText('Robotics Club')).toBeInTheDocument();
    expect(screen.getByText('Art Club')).toBeInTheDocument();
  });

  it('Клуб дээр дарахад onSelect функц зөв ID-тай дуудагдах ёстой', () => {
    render(
      <ClubList clubs={mockClubs} selectedClubId={1} onSelect={mockOnSelect} />
    );

    const artClubCard = screen.getByTestId('club-card-2');
    fireEvent.click(artClubCard);

    expect(mockOnSelect).toHaveBeenCalledWith(2);
  });

  it('Сонгогдсон клуб (selectedClubId) зөв style-тай байх ёстой', () => {
    render(
      <ClubList clubs={mockClubs} selectedClubId={1} onSelect={mockOnSelect} />
    );

    const selectedClub = screen.getByTestId('club-card-1');
    expect(selectedClub).toHaveStyle('border: 1px solid blue');
  });
});
