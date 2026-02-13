import { render, screen, fireEvent } from '@testing-library/react';
import { ClubDetail } from '../app/JoinClub/_components/ClubDetail';
import React from 'react';
import { Club } from '../lib/type';

describe('ClubDetail 100% Coverage', () => {
  const mockClubData = {
    id: 1,
    name: 'Test Club',
    status: 'Open' as const,
    description: 'Test Purpose',
    schedule: 'Mon & Wed',
    time: '16:00',
    class: 'B-201',
    currentMembers: 10,
    maxMembers: 20,
    image: '/test.jpg',
    instructors: [{ name: 'Ari', role: 'Mentor', image: '/ari.png' }],
    enrolledStudents: ['Student 1'],
    isEnrolled: false,
  };

  const mockOnEnroll = jest.fn();
  const mockOnLeave = jest.fn();

  it('should call onEnroll and onLeave correctly', () => {
    const { rerender } = render(
      <ClubDetail
        selectedClub={
          mockClubData as unknown as Club & { isEnrolled?: boolean }
        }
        onEnroll={mockOnEnroll}
        onLeave={mockOnLeave}
        isLocked={false}
        remainingTime={0}
      />
    );

    const enrollBtn = screen.getByText(/Одоо нэгдэх/i);
    fireEvent.click(enrollBtn);
    expect(mockOnEnroll).toHaveBeenCalledWith(mockClubData.id);

    const enrolledClub = { ...mockClubData, isEnrolled: true };
    rerender(
      <ClubDetail
        selectedClub={
          enrolledClub as unknown as Club & { isEnrolled?: boolean }
        }
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
});
