import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { ClubDetailView } from '../../app/JoinClub/_components/ClubDetailView';
import { ExtendedClub } from '../../lib/type';

jest.mock('../../app/JoinClub/_components/ClubInfoGrid', () => ({
  ClubInfoGrid: () => <div data-testid="club-info-grid" />,
}));

jest.mock('../../app/JoinClub/_components/ScheduleDetails', () => ({
  ScheduleDetails: () => <div data-testid="schedule-details" />,
}));

jest.mock('../../app/JoinClub/_components/ClubActionButton', () => ({
  ClubActionButtons: ({
    onEnroll,
    onLeave,
  }: {
    onEnroll: () => void;
    onLeave: () => void;
  }) => (
    <div>
      <button onClick={onEnroll}>Enroll</button>
      <button onClick={onLeave}>Leave</button>
    </div>
  ),
}));

const mockClub = {
  id: '1',
  name: 'Coding Club',
  description: 'Learn to code',
  type: 'Premium',
  status: 'active',
  isEnrolled: false,
  timetables: [],
  bannedUntil: null,
  __typename: 'Club',
  creatorId: 'creator1',
  teacherId: 'teacher1',
  minMember: 5,
  maxMember: 20,
  preferredTeachers: [],
} as unknown as ExtendedClub;

const defaultProps = {
  club: mockClub,
  teacherData: { initial: 'N', name: 'Narantsatsralt' },
  banned: false,
  remainingTime: 0,
  loading: false,
  handleEnroll: jest.fn(),
  handleLeave: jest.fn(),
};

describe('ClubDetailView', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders club name', () => {
    render(<ClubDetailView {...defaultProps} />);
    expect(screen.getByText('Coding Club')).toBeInTheDocument();
  });

  it('renders club description', () => {
    render(<ClubDetailView {...defaultProps} />);
    expect(screen.getByText('Learn to code')).toBeInTheDocument();
  });

  it('renders club type badge', () => {
    render(<ClubDetailView {...defaultProps} />);
    expect(screen.getByText('Premium')).toBeInTheDocument();
  });

  it('falls back to Premium when club type is undefined', () => {
    const clubWithoutType = {
      ...mockClub,
      type: undefined,
    } as unknown as ExtendedClub;
    render(<ClubDetailView {...defaultProps} club={clubWithoutType} />);
    expect(screen.getByText('Premium')).toBeInTheDocument();
  });

  it('renders teacher profile with initial and name', () => {
    render(<ClubDetailView {...defaultProps} />);
    expect(screen.getByText('N')).toBeInTheDocument();
    expect(screen.getByText('Narantsatsralt')).toBeInTheDocument();
    expect(screen.getByText('Хариуцсан багш')).toBeInTheDocument();
  });

  it('renders ClubInfoGrid', () => {
    render(<ClubDetailView {...defaultProps} />);
    expect(screen.getByTestId('club-info-grid')).toBeInTheDocument();
  });

  it('renders ScheduleDetails', () => {
    render(<ClubDetailView {...defaultProps} />);
    expect(screen.getByTestId('schedule-details')).toBeInTheDocument();
  });

  it('calls handleEnroll when Enroll button is clicked', () => {
    render(<ClubDetailView {...defaultProps} />);
    fireEvent.click(screen.getByText('Enroll'));
    expect(defaultProps.handleEnroll).toHaveBeenCalledTimes(1);
  });

  it('calls handleLeave when Leave button is clicked', () => {
    render(<ClubDetailView {...defaultProps} />);
    fireEvent.click(screen.getByText('Leave'));
    expect(defaultProps.handleLeave).toHaveBeenCalledTimes(1);
  });
});
