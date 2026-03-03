import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PendingClubDetail } from '../../../app/_components/teacher/pending/PendingDetail';
import type { Club } from '../../../libs/types';

const baseClub: Club = {
  id: '1',
  name: 'Pending Club',
  description: 'some description',
  teacherId: 't1',
  minMember: 5,
  maxMember: 10,
  status: 'pending',
  timetables: [
    {
      id: 'tt1',
      clubId: '1',
      date: '2025-01-01',
      room: '101',
      clubStartTime: '10:00',
      duration: 60,
    },
  ],
};

describe('PendingClubDetail', () => {
  it('renders description and primary timetable info', () => {
    render(<PendingClubDetail club={baseClub} />);

    expect(screen.getByText('some description')).toBeInTheDocument();
    expect(screen.getByText('10:00')).toBeInTheDocument();
    expect(screen.getByText('101')).toBeInTheDocument();
    expect(screen.getByText('5 - 10')).toBeInTheDocument();
    expect(screen.getByText(/pending/i)).toBeInTheDocument();
  });

  it('falls back when timetable is missing', () => {
    const noTimetable: Club = { ...baseClub, timetables: [] };
    render(<PendingClubDetail club={noTimetable} />);

    // Schedule болон Room аль аль нь '-' fallback ашиглана.
    const dashValues = screen.getAllByText('-');
    expect(dashValues.length).toBeGreaterThanOrEqual(2);
  });
});
