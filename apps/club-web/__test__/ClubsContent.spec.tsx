import { render, screen, fireEvent } from '@testing-library/react';
// Замыг өөрийн бүтцэд тааруулж шалгаарай (../app/JoinClub/_components/ гэх мэт)
import React, { ComponentProps } from 'react';
import { ClubActionButtons } from '../app/JoinClub/_components';

type ClubActionButtonsProps = ComponentProps<typeof ClubActionButtons>;

describe('ClubActionButtons 100% Coverage', () => {
  const mockOnEnroll = jest.fn();
  const mockOnLeave = jest.fn();

  const defaultProps: ClubActionButtonsProps = {
    isEnrolled: false,
    isLocked: false,
    status: 'Open',
    remainingTime: 0,
    onEnroll: mockOnEnroll,
    onLeave: mockOnLeave,
    className: '',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should cover line 33 (className logic)', () => {
    const { rerender } = render(<ClubActionButtons {...defaultProps} />);
    expect(screen.getByRole('button')).toHaveClass('w-full');

    rerender(<ClubActionButtons {...defaultProps} className="custom-test" />);
    expect(screen.getByRole('button')).toHaveClass('custom-test');
  });

  it('should handle enrollment (Lines 36-45)', () => {
    render(<ClubActionButtons {...defaultProps} isEnrolled={true} />);
    const leaveBtn = screen.getByText(/Клубээс гарах/i);
    fireEvent.click(leaveBtn);
    expect(mockOnLeave).toHaveBeenCalled();
  });

  it('should handle locked state (Lines 47-51)', () => {
    render(
      <ClubActionButtons {...defaultProps} isLocked={true} remainingTime={15} />
    );
    expect(screen.getByText(/15с хүлээх/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should show "Full" status when status is not Open', () => {
    render(<ClubActionButtons {...defaultProps} status="Full" />);
    expect(screen.getByText(/Суудал дүүрсэн/i)).toBeInTheDocument();
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockOnEnroll).not.toHaveBeenCalled();
  });

  it('should call onEnroll when clickable', () => {
    render(<ClubActionButtons {...defaultProps} />);
    fireEvent.click(screen.getByText(/Одоо нэгдэх/i));
    expect(mockOnEnroll).toHaveBeenCalled();
  });
});
