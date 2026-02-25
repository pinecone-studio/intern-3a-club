import { render, screen, fireEvent } from '@testing-library/react';
import { ClubDetail } from '../app/JoinClub/_components/ClubDetail';
import React from 'react';
import { ExtendedClub } from '../../lib/type';

describe('ClubDetail 100% Coverage', () => {
  const mockClubData: ExtendedClub = {
    id: '830b09d2-1fa9-4ecc-b2e8-024dea389584',
    name: 'shine shine ',
    description: 'asdfsdfdf',
    status: 'approved',
    teacherId: '2',
    type: 'mentor',
    minMember: 5,
    maxMember: 20,
    isEnrolled: false,
    bannedUntil: 0,
    timetables: [
      {
        id: '921a28f8-f299-41a5-9b83-aacbf5f0868d',
        clubId: '830b09d2-1fa9-4ecc-b2e8-024dea389584',
        date: '2026-03-05',
        room: '301',
        clubStartTime: '13:00',
        duration: 90,
      },
    ],
  };

  const mockOnEnroll = jest.fn();
  const mockOnLeave = jest.fn();

  it('Backend-ээс ирсэн датаг зөв харуулж байна', () => {
    render(
      <ClubDetail
        selectedClub={mockClubData}
        onEnroll={mockOnEnroll}
        onLeave={mockOnLeave}
        isLocked={false}
        remainingTime={0}
      />
    );

    expect(screen.getByText(/shine shine/i)).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText(/301/i)).toBeInTheDocument();
  });

  const enrollBtn = screen.getByText(/Одоо нэгдэх/i);
  fireEvent.click(enrollBtn);
  expect(mockOnEnroll).toHaveBeenCalledWith(mockClubData.id);

  const enrolledClub = { ...mockClubData, isEnrolled: true };
  rerender(
    <ClubDetail
      selectedClub={enrolledClub as unknown as ExtendedClub}
      onEnroll={mockOnEnroll}
      onLeave={mockOnLeave}
      isLocked={false}
      remainingTime={0}
    />
  );

  const leaveBtn = screen.getByText(/Клубээс гарах/i);
  fireEvent.click(leaveBtn);
  expect(mockOnLeave).toHaveBeenCalledWith(mockClubData.id);
});
