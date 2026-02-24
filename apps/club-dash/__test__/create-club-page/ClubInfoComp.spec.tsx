import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { ClubInfoComp } from '../../../club-dash/app/createClub/_components/ClubInfoComp';

describe('ClubInfoComp', () => {
  it('should render the component and display info text', () => {
    // This executes the function (100% Functions)
    // and the return statement (100% Statements)
    render(<ClubInfoComp />);

    // Assert the content exists
    const element = screen.getByText('info');
    expect(element).toBeInTheDocument();
  });

  it('should have the expected CSS classes for layout', () => {
    render(<ClubInfoComp />);

    // This ensures the div with classes is rendered
    const container = screen.getByText('info');
    expect(container).toHaveClass('flex', 'flex-col', 'gap-8');
  });
});
