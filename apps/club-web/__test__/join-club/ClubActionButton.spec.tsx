import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ClubActionButtons } from '../../app/JoinClub/_components/ClubActionButton';

const defaultProps = {
  isEnrolled: false,
  isLocked: false,
  isExpired: false,
  status: 'Open',
  remainingTime: 0,
  onEnroll: jest.fn(),
  onLeave: jest.fn(),
  loading: false,
};

describe('ClubActionButtons', () => {
  beforeEach(() => jest.clearAllMocks());

  it('isEnrolled=false үед товч харуулна', () => {
    render(<ClubActionButtons {...defaultProps} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('isEnrolled=true үед "Клубээс гарах" товч харуулна', () => {
    render(<ClubActionButtons {...defaultProps} isEnrolled={true} />);
    expect(screen.getByText('Клубээс гарах')).toBeInTheDocument();
  });

  it('loading=true үед "Уншиж байна..." харуулна', () => {
    render(
      <ClubActionButtons {...defaultProps} isEnrolled={true} loading={true} />
    );
    expect(screen.getByText('Уншиж байна...')).toBeInTheDocument();
  });

  it('isLocked=true үед товч disabled байна', () => {
    render(
      <ClubActionButtons {...defaultProps} isLocked={true} remainingTime={10} />
    );
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('isLocked=true үед bg-red-500/20 класс байна', () => {
    render(
      <ClubActionButtons {...defaultProps} isLocked={true} remainingTime={10} />
    );
    expect(screen.getByRole('button')).toHaveClass('bg-red-500/20');
  });

  it('onEnroll дуудагдана', () => {
    const onEnroll = jest.fn();
    render(<ClubActionButtons {...defaultProps} onEnroll={onEnroll} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onEnroll).toHaveBeenCalled();
  });

  it('onLeave дуудагдана', () => {
    const onLeave = jest.fn();
    render(
      <ClubActionButtons
        {...defaultProps}
        isEnrolled={true}
        onLeave={onLeave}
      />
    );
    fireEvent.click(screen.getByText('Клубээс гарах'));
    expect(onLeave).toHaveBeenCalled();
  });

  it('isExpired=true, isEnrolled=false үед "Элсэх хугацаа дууссан" харуулна', () => {
    render(
      <ClubActionButtons
        {...defaultProps}
        isExpired={true}
        isEnrolled={false}
      />
    );
    expect(screen.getByText('Элсэх хугацаа дууссан')).toBeInTheDocument();
  });
});
