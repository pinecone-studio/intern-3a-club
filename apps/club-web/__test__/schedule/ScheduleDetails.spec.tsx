import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { ExtendedClub } from '../../lib/type';
import { ScheduleDetails } from '../../app/JoinClub/_components/ScheduleDetails';
const mockClub: ExtendedClub = {
  id: '1',
  name: 'Coding Club',
  description: 'Learn to code',
  timetables: [
    {
      id: 't1',
      clubId: '1',
      date: '2026-03-01',
      room: '301',
      clubStartTime: '13:00',
      duration: 60,
    },
    {
      id: 't2',
      clubId: '1',
      date: '2026-03-08',
      room: '302',
      clubStartTime: '14:00',
      duration: 90,
    },
  ],
} as ExtendedClub;

describe('ScheduleDetails', () => {
  it('renders the toggle button', () => {
    render(<ScheduleDetails club={mockClub} />);
    expect(screen.getByText('Дэлгэрэнгүй хуваарь харах')).toBeInTheDocument();
  });

  it('does not show schedule cards by default', () => {
    render(<ScheduleDetails club={mockClub} />);
    expect(screen.queryByText('2026-03-01')).not.toBeInTheDocument();
  });

  it('shows schedule cards when toggle is clicked', () => {
    render(<ScheduleDetails club={mockClub} />);
    fireEvent.click(screen.getByText('Дэлгэрэнгүй хуваарь харах'));
    expect(screen.getByText('2026-03-01')).toBeInTheDocument();
    expect(screen.getByText('2026-03-08')).toBeInTheDocument();
  });

  it('renders schedule details correctly when open', () => {
    render(<ScheduleDetails club={mockClub} />);
    fireEvent.click(screen.getByText('Дэлгэрэнгүй хуваарь харах'));

    expect(screen.getByText('301')).toBeInTheDocument();
    expect(screen.getByText('13:00')).toBeInTheDocument();
    expect(screen.getByText('60 мин')).toBeInTheDocument();
    expect(screen.getByText('302')).toBeInTheDocument();
    expect(screen.getByText('14:00')).toBeInTheDocument();
    expect(screen.getByText('90 мин')).toBeInTheDocument();
  });

  it('shows ChevronDown when closed and ChevronUp when open', () => {
    render(<ScheduleDetails club={mockClub} />);
    const toggle = screen.getByText('Дэлгэрэнгүй хуваарь харах');

    expect(document.querySelector('svg')).toBeInTheDocument();

    fireEvent.click(toggle);
    expect(screen.getByText('Хаах')).toBeInTheDocument();
  });

  it('closes schedule when Хаах is clicked', () => {
    render(<ScheduleDetails club={mockClub} />);
    fireEvent.click(screen.getByText('Дэлгэрэнгүй хуваарь харах'));
    expect(screen.getByText('2026-03-01')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Хаах'));
    expect(screen.queryByText('2026-03-01')).not.toBeInTheDocument();
  });

  it('toggles closed when clicked again', () => {
    render(<ScheduleDetails club={mockClub} />);
    const toggle = screen.getByText('Дэлгэрэнгүй хуваарь харах');

    fireEvent.click(toggle);
    expect(screen.getByText('2026-03-01')).toBeInTheDocument();

    fireEvent.click(toggle);
    expect(screen.queryByText('2026-03-01')).not.toBeInTheDocument();
  });

  it('renders empty timetables without crashing', () => {
    const emptyClub = { ...mockClub, timetables: [] } as ExtendedClub;
    render(<ScheduleDetails club={emptyClub} />);
    fireEvent.click(screen.getByText('Дэлгэрэнгүй хуваарь харах'));
    expect(screen.getByText('Хаах')).toBeInTheDocument();
  });
});
