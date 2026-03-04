import { render, screen } from '@testing-library/react';
import { ClubsHeader } from '../../app/JoinClub/_components/ClubsHeader';
import '@testing-library/jest-dom';

describe('ClubsHeader', () => {
  it('renders correctly', () => {
    render(<ClubsHeader />);

    expect(screen.getByText('Клубууд')).toBeInTheDocument();
   
  });
});
