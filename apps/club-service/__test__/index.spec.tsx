import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home Page', () => {
  it('should render the welcome heading correctly', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', { name: /welcome to/i });

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });

  it('should match the snapshot', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
