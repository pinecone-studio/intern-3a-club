import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ClubCard } from '../../app/JoinClub/_components/ClubCard';
import { ExtendedClub } from '../../lib/type';

const mockTimetable = {
  id: 'tt-1',
  clubId: 'club-1',
  date: 'Даваа, Лхагва',
  room: '401-р өрөө',
  clubStartTime: '18:00-20:00',
  duration: 120,
};

const mockClub = {
  id: 'club-1',
  name: 'React',
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
} as ExtendedClub;

describe('ClubCard', () => {
  it('клубын нэрийг харуулна', () => {
    render(<ClubCard club={mockClub} isSelected={false} onClick={jest.fn()} />);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('isEnrolled=true үед "Элссэн" badge харуулна', () => {
    render(
      <ClubCard
        club={{ ...mockClub, isEnrolled: true }}
        isSelected={false}
        onClick={jest.fn()}
      />
    );
    expect(screen.getByText('Элссэн')).toBeInTheDocument();
  });

  it('isEnrolled=false үед badge харуулахгүй', () => {
    render(<ClubCard club={mockClub} isSelected={false} onClick={jest.fn()} />);
    expect(screen.queryByText('Элссэн')).not.toBeInTheDocument();
  });

  it('timetable байгаа үед хуваарь харуулна', () => {
    render(<ClubCard club={mockClub} isSelected={false} onClick={jest.fn()} />);
    expect(screen.getByText(/хүртэл элсэх боломжтой/)).toBeInTheDocument();
    expect(screen.getByText('401-р өрөө')).toBeInTheDocument();
  });

  it('timetable байхгүй үед fallback текст харуулна', () => {
    render(
      <ClubCard
        club={{ ...mockClub, timetables: [] }}
        isSelected={false}
        onClick={jest.fn()}
      />
    );
    expect(screen.getByText(/хүртэл элсэх боломжтой/)).toBeInTheDocument();
    expect(screen.getByText('Өрөө тодорхойгүй')).toBeInTheDocument();
  });

  it('isSelected=true үед border-blue-500 класс байна', () => {
    const { container } = render(
      <ClubCard club={mockClub} isSelected={true} onClick={jest.fn()} />
    );
    expect(container.firstChild).toHaveClass('border-blue-500');
  });

  it('isSelected=false үед border-white/5 класс байна', () => {
    const { container } = render(
      <ClubCard club={mockClub} isSelected={false} onClick={jest.fn()} />
    );
    expect(container.firstChild).toHaveClass('border-white/5');
  });

  it('карт дарахад onClick дуудагдана', () => {
    const onClick = jest.fn();
    render(<ClubCard club={mockClub} isSelected={false} onClick={onClick} />);
    fireEvent.click(screen.getByText('React'));
    expect(onClick).toHaveBeenCalledWith('club-1');
  });
});
