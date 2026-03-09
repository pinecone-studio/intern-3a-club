import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ClubActionButtons } from '../../app/JoinClub/_components/ClubActionButton';

const baseProps = {
  isEnrolled: false,
  isExpired: false,
  isLocked: false,
  status: 'ACTIVE',
  remainingTime: 0,
  loading: false,
  onEnroll: jest.fn(),
  onLeave: jest.fn(),
};

describe('ClubActionButtons', () => {
  it('isEnrolled=false, isExpired=false үед JoinAction харуулна', () => {
    render(<ClubActionButtons {...baseProps} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('isExpired=true, isEnrolled=false үед ExpiredAction харуулна', () => {
    render(<ClubActionButtons {...baseProps} isExpired={true} />);
    expect(screen.getByText('Бүртгэл хаагдсан')).toBeInTheDocument();
  });

  it('isEnrolled=true үед LeaveAction харуулна', () => {
    render(<ClubActionButtons {...baseProps} isEnrolled={true} />);
    expect(screen.getByText('Клубээс гарах')).toBeInTheDocument();
  });

  it('isEnrolled=true, isExpired=true үед LeaveAction disabled харуулна', () => {
    render(
      <ClubActionButtons {...baseProps} isEnrolled={true} isExpired={true} />
    );
    expect(
      screen.getByText('Гарах боломжгүй (Клуб эхэлсэн)')
    ).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('isEnrolled=true, loading=true үед "Уншиж байна..." харуулна', () => {
    render(
      <ClubActionButtons {...baseProps} isEnrolled={true} loading={true} />
    );
    expect(screen.getByText('Уншиж байна...')).toBeInTheDocument();
  });

  it('isLocked=true үед JoinAction disabled байна', () => {
    render(<ClubActionButtons {...baseProps} isLocked={true} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('status=Full үед JoinAction disabled байна', () => {
    render(<ClubActionButtons {...baseProps} status="Full" />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('onEnroll дуудагдана', () => {
    const onEnroll = jest.fn();
    render(<ClubActionButtons {...baseProps} onEnroll={onEnroll} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onEnroll).toHaveBeenCalled();
  });

  it('onLeave дуудагдана', () => {
    const onLeave = jest.fn();
    render(
      <ClubActionButtons {...baseProps} isEnrolled={true} onLeave={onLeave} />
    );
    fireEvent.click(screen.getByRole('button'));
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
