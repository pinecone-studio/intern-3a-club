import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PendingModalItem } from '../../../app/_components/teacher/pending/PendingModalItem';
import type { Club } from '../../../libs/types';

const club: Club = {
  id: '1',
  name: 'Test Club',
  description: 'desc',
  teacherId: 't1',
  minMember: 5,
  maxMember: 10,
  status: 'pending',
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

describe('PendingModalItem', () => {
  it('renders basic club information', () => {
    const onTeacherChange = jest.fn();

    render(
      <PendingModalItem
        club={club}
        selectedTeacherId="t1"
        onTeacherChange={onTeacherChange}
        onReject={jest.fn()}
        onApprove={jest.fn()}
      />
    );

    expect(screen.getByText('Test Club')).toBeInTheDocument();
    expect(screen.getByText('desc')).toBeInTheDocument();
    expect(screen.getByText('10:00')).toBeInTheDocument();
    expect(screen.getByText(/room 101/i)).toBeInTheDocument();
    expect(screen.getByText('5-10')).toBeInTheDocument();
  });

  it('calls onReject when confirm clicked', () => {
    const onReject = jest.fn();

    render(
      <PendingModalItem
        club={club}
        selectedTeacherId="t1"
        onTeacherChange={jest.fn()}
        onReject={onReject}
        onApprove={jest.fn()}
      />
    );

    // Эхлээд Reject товч → дараа нь dialog дээрх баталгаажуулах товч
    fireEvent.click(screen.getByText(/reject/i));
    fireEvent.click(screen.getByText('Татгалзах'));

    expect(onReject).toHaveBeenCalledWith(club);
  });

  it('calls onApprove when teacher is selected and confirm clicked', () => {
    const onApprove = jest.fn();

    render(
      <PendingModalItem
        club={{ ...club, preferredTeachers: ['t1'] }}
        selectedTeacherId="t1"
        onTeacherChange={jest.fn()}
        onReject={jest.fn()}
        onApprove={onApprove}
      />
    );

    // Approve товч → дараа нь dialog дээрх баталгаажуулах товч
    fireEvent.click(screen.getByText(/approve/i));
    fireEvent.click(screen.getByText('Батлах'));

    expect(onApprove).toHaveBeenCalledWith(
      expect.objectContaining({ id: '1' }),
      't1'
    );
  });

  it('does not call onApprove when teacher is not selected', () => {
    const onApprove = jest.fn();

    render(
      <PendingModalItem
        club={club}
        selectedTeacherId={undefined}
        onTeacherChange={jest.fn()}
        onReject={jest.fn()}
        onApprove={onApprove}
      />
    );

    fireEvent.click(screen.getByText(/approve/i));

    expect(onApprove).not.toHaveBeenCalled();
  });
});
