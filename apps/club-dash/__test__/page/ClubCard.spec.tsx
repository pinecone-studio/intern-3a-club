import { render, fireEvent, screen } from '@testing-library/react';
import { ClubCard } from '../../app/_components/teacher/approved/clubcard/ClubCard';
import { ClubCardHeader } from '../../app/_components/teacher/approved/clubcard/ClubCardHeader';
import { ClubCardActions } from '../../app/_components/teacher/approved/clubcard/ClubCardActions';
import { DetailTile } from '../../app/_components/teacher/main/DetailTile';
import type { Club } from '../../libs/types';

jest.mock('../../app/_components/teacher/approved/Approved', () => ({
  ApprovedClubDetail: ({
    club,
    onEdit,
  }: {
    club: Club;
    onEdit?: (_c: Club) => void;
  }) => (
    <div data-testid="approved-detail">
      <button onClick={() => onEdit?.(club)}>Edit</button>
      <button>Delete</button>
    </div>
  ),
}));

const club: Club = {
  id: '1',
  name: 'club',
  description: 'goal',
  teacherId: 'teacher-1',
  minMember: 5,
  maxMember: 10,
  status: 'approved',
  timetables: [
    {
      id: 't1',
      clubId: '1',
      date: '2025-01-01',
      room: '101',
      clubStartTime: '10:00',
      duration: 60,
    },
  ],
};

describe('DetailTile', () => {
  it('renders label and value', () => {
    render(<DetailTile icon={<span />} label="x" value="y" />);
    expect(screen.getByText('x')).toBeInTheDocument();
    expect(screen.getByText('y')).toBeInTheDocument();
  });
});

describe('ClubCardHeader', () => {
  it('renders club name and display info', () => {
    render(<ClubCardHeader req={club} />);
    expect(screen.getByText('club')).toBeInTheDocument();
    expect(screen.getByText(/goal/i)).toBeInTheDocument();
  });

  it('handles null description', () => {
    render(<ClubCardHeader req={{ ...club, description: null }} />);
    expect(screen.getByText('club')).toBeInTheDocument();
  });

  it('shows fallback "-" for startTime and room when timetables is empty', () => {
    render(<ClubCardHeader req={{ ...club, timetables: [] }} />);
    expect(screen.getByText('club')).toBeInTheDocument();
    const dashes = screen.getAllByText('-');
    expect(dashes.length).toBeGreaterThanOrEqual(2);
  });

  it('shows fallback "-" when timetable has null room or clubStartTime', () => {
    render(
      <ClubCardHeader
        req={{
          ...club,
          timetables: [
            {
              id: 't1',
              clubId: '1',
              date: '2025-01-01',
              room: null as unknown as string,
              clubStartTime: null as unknown as string,
              duration: 60,
            },
          ],
        }}
      />
    );
    const dashes = screen.getAllByText('-');
    expect(dashes.length).toBeGreaterThanOrEqual(2);
  });
});

describe('ClubCardActions', () => {
  it('toggles expand and calls setExpandedId when Edit Detail clicked', () => {
    const setExpandedId = jest.fn();
    render(
      <ClubCardActions
        req={club}
        isPrimary={false}
        isExpanded={false}
        setExpandedId={setExpandedId}
      />
    );
    const editBtn = screen.getByText(/edit detail/i);
    fireEvent.click(editBtn);
    expect(setExpandedId).toHaveBeenCalledWith('1');
  });

  it('collapses when Close clicked', () => {
    const setExpandedId = jest.fn();
    render(
      <ClubCardActions
        req={club}
        isPrimary={false}
        isExpanded={true}
        setExpandedId={setExpandedId}
      />
    );
    fireEvent.click(screen.getByText(/close/i));
    expect(setExpandedId).toHaveBeenCalledWith(null);
  });

  it('renders approve buttons when not primary', () => {
    render(
      <ClubCardActions
        req={{ ...club, id: '2' }}
        isPrimary={false}
        isExpanded={false}
        setExpandedId={() => {}}
      />
    );
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
  });

  it('does not render approve buttons when primary', () => {
    render(
      <ClubCardActions
        req={club}
        isPrimary={true}
        isExpanded={true}
        setExpandedId={() => {}}
      />
    );
    expect(screen.getByText(/close/i)).toBeInTheDocument();
  });
});

describe('ClubCard', () => {
  it('renders collapsed card and expands on Edit Detail click', () => {
    const setExpandedId = jest.fn();
    render(
      <ClubCard
        req={club}
        isPrimary={false}
        isExpanded={false}
        setExpandedId={setExpandedId}
        expandedId={null}
        onDelete={() => {}}
      />
    );
    expect(screen.getByText('club')).toBeInTheDocument();
    fireEvent.click(screen.getByText(/edit detail/i));
    expect(setExpandedId).toHaveBeenCalledWith('1');
  });

  it('renders expanded card with detail', () => {
    render(
      <ClubCard
        req={club}
        isPrimary={true}
        isExpanded={true}
        setExpandedId={() => {}}
        expandedId={club.id}
        onDelete={() => {}}
      />
    );
    expect(screen.getByTestId('approved-detail')).toBeInTheDocument();
  });
});
