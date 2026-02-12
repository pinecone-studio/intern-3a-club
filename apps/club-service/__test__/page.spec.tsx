import { render, screen } from '@testing-library/react';
import { page as Page } from '../app/page';

describe('club-web page', () => {
  it('renders', () => {
    render(<Page />);
    expect(screen.getByText('page')).toBeInTheDocument();
  });
});
