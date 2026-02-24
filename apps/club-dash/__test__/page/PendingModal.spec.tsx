import { render, fireEvent, screen } from '@testing-library/react';
import { PendingModal } from '../../app/_components/teacher/pending/PendingModal';
import type { Club } from '../../libs/types';

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

describe('PendingModal', () => {
  it('calls onApprove when Approve clicked', () => {
    const onApprove = jest.fn();
    const onReject = jest.fn();
    const setOpenModal = jest.fn();

    render(
      <PendingModal
        pending={[club]}
        setOpenModal={setOpenModal}
        onApprove={onApprove}
        onReject={onReject}
      />
    );

    fireEvent.click(screen.getByText(/approve/i));
    expect(onApprove).toHaveBeenCalledWith(club);
  });

  it('calls onReject when Reject clicked', () => {
    const onApprove = jest.fn();
    const onReject = jest.fn();
    const setOpenModal = jest.fn();

    render(
      <PendingModal
        pending={[club]}
        setOpenModal={setOpenModal}
        onApprove={onApprove}
        onReject={onReject}
      />
    );

    fireEvent.click(screen.getByText(/reject/i));
    expect(onReject).toHaveBeenCalledWith(club);
  });

  it('calls setOpenModal(false) when close button (X) clicked', () => {
    const setOpenModal = jest.fn();
    render(
      <PendingModal
        pending={[club]}
        setOpenModal={setOpenModal}
        onApprove={() => {}}
        onReject={() => {}}
      />
    );

    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    expect(setOpenModal).toHaveBeenCalledWith(false);
  });

  it('calls setOpenModal(false) when backdrop clicked', () => {
    const setOpenModal = jest.fn();
    render(
      <PendingModal
        pending={[club]}
        setOpenModal={setOpenModal}
        onApprove={() => {}}
        onReject={() => {}}
      />
    );

    const backdrop = document.querySelector('.absolute.inset-0');
    if (backdrop) fireEvent.click(backdrop as HTMLElement);
    expect(setOpenModal).toHaveBeenCalledWith(false);
  });

  it('renders multiple pending items', () => {
    const club2 = { ...club, id: '2', name: 'Club 2' };
    render(
      <PendingModal
        pending={[club, club2]}
        setOpenModal={() => {}}
        onApprove={() => {}}
        onReject={() => {}}
      />
    );
    expect(screen.getByText('Test Club')).toBeInTheDocument();
    expect(screen.getByText('Club 2')).toBeInTheDocument();
  });

  it('renders club with null description', () => {
    const clubNoDesc = { ...club, description: null };
    render(
      <PendingModal
        pending={[clubNoDesc]}
        setOpenModal={() => {}}
        onApprove={() => {}}
        onReject={() => {}}
      />
    );
    expect(screen.getByText('Test Club')).toBeInTheDocument();
    expect(screen.queryByText('desc')).not.toBeInTheDocument();
  });

  it('renders PendingClubDetail fallbacks for empty timetables', () => {
    const clubEmptyTimetables = { ...club, id: 'empty-tt', timetables: [] };
    render(
      <PendingModal
        pending={[clubEmptyTimetables]}
        setOpenModal={() => {}}
        onApprove={() => {}}
        onReject={() => {}}
      />
    );
    expect(screen.getByText('Test Club')).toBeInTheDocument();
    const scheduleTiles = screen.getAllByText('-');
    expect(scheduleTiles.length).toBeGreaterThanOrEqual(2);
  });

  it('renders PendingClubDetail with zero members fallback', () => {
    const clubZeroMembers = {
      ...club,
      id: 'zero-m',
      minMember: 0,
      maxMember: 0,
    };
    render(
      <PendingModal
        pending={[clubZeroMembers]}
        setOpenModal={() => {}}
        onApprove={() => {}}
        onReject={() => {}}
      />
    );
    expect(screen.getByText(/0 - 0/)).toBeInTheDocument();
  });

  it('renders PendingClubDetail when minMember/maxMember are undefined', () => {
    const clubUndefinedMembers = {
      ...club,
      id: 'undef-m',
      minMember: undefined,
      maxMember: undefined,
    } as unknown as Club;
    render(
      <PendingModal
        pending={[clubUndefinedMembers]}
        setOpenModal={() => {}}
        onApprove={() => {}}
        onReject={() => {}}
      />
    );
    expect(screen.getByText(/0 - 0/)).toBeInTheDocument();
  });
});
