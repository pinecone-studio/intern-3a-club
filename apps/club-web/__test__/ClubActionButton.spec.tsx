import { render, screen, fireEvent } from '@testing-library/react';
import { ClubActionButtons } from '../app/JoinClub/_components/ClubActionButton';
import React from 'react';

describe('ClubActionButtons 100% Coverage', () => {
  const defaultProps = {
    isEnrolled: false,
    isLocked: false,
    status: 'Open',
    remainingTime: 0,
    onEnroll: jest.fn(),
    onLeave: jest.fn(),
  };

  it('should cover line 33 (default className) and pass custom className', () => {
    // 1. className дамжуулахгүй байх (Line 33-ийн default утгыг хамрах)
    const { rerender } = render(<ClubActionButtons {...defaultProps} />);
    const button = screen.getByRole('button');

    // Анхны классууд байгаа эсэхийг шалгах
    expect(button).toHaveClass('w-full');

    // 2. className дамжуулах (Line 33-ийн хувьсагч ашиглагдах хэсгийг хамрах)
    const customClass = 'my-custom-style';
    rerender(<ClubActionButtons {...defaultProps} className={customClass} />);

    // Custom класс нэмэгдсэн эсэхийг шалгах
    expect(button).toHaveClass('my-custom-style');
  });

  it('should cover isEnrolled branch (Lines 36-45)', () => {
    render(<ClubActionButtons {...defaultProps} isEnrolled={true} />);
    const leaveBtn = screen.getByText(/Клубээс гарах/i);
    fireEvent.click(leaveBtn);
    expect(defaultProps.onLeave).toHaveBeenCalled();
  });

  it('should cover isLocked state and ButtonContent (Lines 24-32, 47-51)', () => {
    render(
      <ClubActionButtons {...defaultProps} isLocked={true} remainingTime={10} />
    );

    // Locked үеийн текст болон классыг шалгах
    expect(screen.getByText(/10с хүлээх/i)).toBeInTheDocument();
    expect(screen.getByText(/Түр хүлээх шаардлагатай/i)).toBeInTheDocument();
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('cursor-not-allowed');
  });

  it('should show "Full" status when status is not Open', () => {
    render(<ClubActionButtons {...defaultProps} status="Full" />);
    expect(screen.getByText(/Суудал дүүрсэн/i)).toBeInTheDocument();
  });
});
