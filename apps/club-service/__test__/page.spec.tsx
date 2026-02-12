import { render, screen } from '@testing-library/react';
import Index from '../app/page';
import '@testing-library/jest-dom';

describe('Index Page', () => {
  it('should render successfully', async () => {
    // 1. Resolve the async component
    const ResolvedPage = await Index();

    // 2. Render the resolved JSX
    render(ResolvedPage);

    // 3. Assertions
    expect(screen.getByText(/Hello/i)).toBeTruthy();
  });

  it('should have the correct tailwind class', async () => {
    const ResolvedPage = await Index();
    render(ResolvedPage);

    const container = screen.getByText(/Hello/i);
    expect(container).toHaveClass('bg-red-600');
  });
});
