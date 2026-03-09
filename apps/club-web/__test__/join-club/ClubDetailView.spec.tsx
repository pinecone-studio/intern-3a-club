import React from 'react';
import { render, screen } from '@testing-library/react';
import { ClubDetailView } from '../../app/JoinClub/_components/ClubDetailView';
import { ExtendedClub } from '../../lib/type';

jest.mock('../../app/JoinClub/_components/ClubInfoGrid', () => ({
  ClubInfoGrid: () => <div data-testid="club-info-grid" />,
}));
jest.mock('../../app/JoinClub/_components/ScheduleDetails', () => ({
  ScheduleDetails: () => <div data-testid="schedule-details" />,
}));

const mockClub = {
  id: 'club-1',
  name: 'React',
  status: 'ACTIVE',
  isEnrolled: false,
  bannedUntil: 0,
  timetables: [],
  createdAt: new Date().toISOString(),
  startDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
} as unknown as ExtendedClub;

const baseProps = {
  club: mockClub,
  teacherData: { initial: 'Б', name: 'Батаа Дорж' },
  banned: false,
  remainingTime: 0,
  loading: false,
  handleEnroll: jest.fn(),
  handleLeave: jest.fn(),
  isExpired: false,
};

describe('ClubDetailView', () => {
  it('клубын нэр харуулна', () => {
    render(<ClubDetailView {...baseProps} />);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('багшийн нэр харуулна', () => {
    render(<ClubDetailView {...baseProps} />);
    expect(screen.getByText('Батаа Дорж')).toBeInTheDocument();
  });

  it('багшийн initial харуулна', () => {
    render(<ClubDetailView {...baseProps} />);
    expect(screen.getByText('Б')).toBeInTheDocument();
  });

  it('isExpired=true үед "Элсэх хугацаа дууссан" харуулна', () => {
    render(<ClubDetailView {...baseProps} isExpired={true} />);
    expect(screen.getByText('Элсэх хугацаа дууссан')).toBeInTheDocument();
  });

  it('isExpired=false үед "Элсэх хугацаа дууссан" харуулахгүй', () => {
    render(<ClubDetailView {...baseProps} isExpired={false} />);
    expect(screen.queryByText('Элсэх хугацаа дууссан')).not.toBeInTheDocument();
  });

  it('banned=true үед улаан border байна', () => {
    const { container } = render(
      <ClubDetailView {...baseProps} banned={true} />
    );
    expect(container.firstChild).toHaveClass('border-red-500/50');
  });

  it('banned=false үед цагаан border байна', () => {
    const { container } = render(
      <ClubDetailView {...baseProps} banned={false} />
    );
    expect(container.firstChild).toHaveClass('border-white/5');
  });

  it('ClubInfoGrid render хийгдэнэ', () => {
    render(<ClubDetailView {...baseProps} />);
    expect(screen.getByTestId('club-info-grid')).toBeInTheDocument();
  });

  it('ScheduleDetails render хийгдэнэ', () => {
    render(<ClubDetailView {...baseProps} />);
    expect(screen.getByTestId('schedule-details')).toBeInTheDocument();
  });

  it('isEnrolled=true үед LeaveAction харуулна', () => {
    render(
      <ClubDetailView
        {...baseProps}
        club={{ ...mockClub, isEnrolled: true } as unknown as ExtendedClub}
      />
    );
    expect(screen.getByText('Клубээс гарах')).toBeInTheDocument();
  });

  it('isEnrolled=false үед JoinAction харуулна', () => {
    render(<ClubDetailView {...baseProps} />);
    expect(screen.getByText('Клубт элсэх')).toBeInTheDocument();
  });
});
