import React from 'react';
import { render, screen } from '@testing-library/react';
import { JoinLabel } from '../../app/JoinClub/_components/ClubJoinLabel';

describe('JoinLabel', () => {
  it('loading=true үед "Уншиж байна..." харуулна', () => {
    render(<JoinLabel loading={true} isLocked={false} time={0} />);
    expect(screen.getByText('Уншиж байна...')).toBeInTheDocument();
  });

  it('isLocked=true үед хүлээх контент харуулна', () => {
    render(<JoinLabel loading={false} isLocked={true} time={10} />);
    expect(screen.getByText(/10 сek хүлээх/)).toBeInTheDocument();
  });

  it('isLocked=false үед "Клубт элсэх" харуулна', () => {
    render(<JoinLabel loading={false} isLocked={false} time={0} />);
    expect(screen.getByText('Клубт элсэх')).toBeInTheDocument();
  });
});
