import { render, screen } from '@testing-library/react';
import { ClubsHeader } from '../app/JoinClub/_components/ClubsHeader';
import '@testing-library/jest-dom';

describe('ClubsHeader', () => {
  it('renders correctly', () => {
    render(<ClubsHeader openClubsCount={5} />);

    expect(screen.getByText('Клубууд')).toBeInTheDocument();
    expect(screen.getByText('5 нээлттэй клуб')).toBeInTheDocument();
  });
});
