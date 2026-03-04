import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { ClubInfoGrid } from '../app/JoinClub/_components/ClubInfoGrid';
import { ExtendedClub } from '../lib/type';

const mockClub = {
  id: '1',
  name: 'Coding Club',
  description: 'Learn to code',
  type: 'Premium',
  status: 'active',
  isEnrolled: false,
  frequency: 'WEEKLY',
  clubTerm: '3',
  minMember: 10,
  maxMember: 20,
  timetables: [
    {
      id: 't1',
      clubId: '1',
      date: '2026-03-02', // Да (Monday)
      room: '301',
      clubStartTime: '13:00',
      duration: 60,
    },
  ],
  bannedUntil: null,
  __typename: 'Club',
  creatorId: 'creator1',
  teacherId: 'teacher1',
  preferredTeachers: [],
} as unknown as ExtendedClub;

describe('ClubInfoGrid', () => {
  it('renders frequency label for WEEKLY', () => {
    render(<ClubInfoGrid club={mockClub} />);
    expect(screen.getByText('Долоо хоног бүр')).toBeInTheDocument();
  });

  it('renders frequency label for ONCE', () => {
    const club = { ...mockClub, frequency: 'ONCE' } as unknown as ExtendedClub;
    render(<ClubInfoGrid club={club} />);
    expect(screen.getByText('Нэг удаа')).toBeInTheDocument();
  });

  it('renders raw frequency when not in FREQUENCY_LABELS', () => {
    const club = {
      ...mockClub,
      frequency: 'CUSTOM',
    } as unknown as ExtendedClub;
    render(<ClubInfoGrid club={club} />);
    expect(screen.getByText('CUSTOM')).toBeInTheDocument();
  });

  it('falls back to WEEKLY when frequency is undefined', () => {
    const club = {
      ...mockClub,
      frequency: undefined,
    } as unknown as ExtendedClub;
    render(<ClubInfoGrid club={club} />);
    expect(screen.getByText('Долоо хоног бүр')).toBeInTheDocument();
  });

  it('renders start date from first timetable', () => {
    render(<ClubInfoGrid club={mockClub} />);
    expect(screen.getByText('2026-03-02')).toBeInTheDocument();
  });

  it('renders unique weekday names from timetables', () => {
    render(<ClubInfoGrid club={mockClub} />);
    expect(screen.getByText('Да')).toBeInTheDocument();
  });

  it('renders multiple unique weekday names', () => {
    const club = {
      ...mockClub,
      timetables: [
        {
          id: 't1',
          clubId: '1',
          date: '2026-03-02',
          room: '301',
          clubStartTime: '13:00',
          duration: 60,
        }, // Да
        {
          id: 't2',
          clubId: '1',
          date: '2026-03-04',
          room: '301',
          clubStartTime: '13:00',
          duration: 60,
        }, // Лх
        {
          id: 't3',
          clubId: '1',
          date: '2026-03-09',
          room: '301',
          clubStartTime: '13:00',
          duration: 60,
        }, // Да (duplicate)
      ],
    } as unknown as ExtendedClub;
    render(<ClubInfoGrid club={club} />);
    expect(screen.getByText('Да, Лх')).toBeInTheDocument();
  });

  it('renders club term when clubTerm >= 1', () => {
    render(<ClubInfoGrid club={mockClub} />);
    expect(screen.getByText('3 сар')).toBeInTheDocument();
  });

  it('does not render club term when clubTerm is 0', () => {
    const club = { ...mockClub, clubTerm: '0' } as unknown as ExtendedClub;
    render(<ClubInfoGrid club={club} />);
    expect(screen.queryByText(/сар/i)).not.toBeInTheDocument();
  });

  it('renders member count correctly', () => {
    render(<ClubInfoGrid club={mockClub} />);
    expect(screen.getByText('10 / 20')).toBeInTheDocument();
  });

  it('renders member percent correctly', () => {
    render(<ClubInfoGrid club={mockClub} />);
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  it('caps percent at 100 when members exceed max', () => {
    const club = {
      ...mockClub,
      minMember: 30,
      maxMember: 20,
    } as unknown as ExtendedClub;
    render(<ClubInfoGrid club={club} />);
    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  it('handles undefined minMember and maxMember gracefully', () => {
    const club = {
      ...mockClub,
      minMember: undefined,
      maxMember: undefined,
    } as unknown as ExtendedClub;
    render(<ClubInfoGrid club={club} />);
    expect(screen.getByText('0%')).toBeInTheDocument();
  });

  it('handles empty timetables without crashing', () => {
    const club = { ...mockClub, timetables: [] } as unknown as ExtendedClub;
    render(<ClubInfoGrid club={club} />);
    expect(screen.getByText('Хуваарь')).toBeInTheDocument();
  });

  it('renders Орох өдрүүд label', () => {
    render(<ClubInfoGrid club={mockClub} />);
    expect(screen.getByText('Орох өдрүүд:')).toBeInTheDocument();
  });
});
