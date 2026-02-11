import { render, screen } from '@testing-library/react';
import Index from '../app/page';

describe('Index (page)', () => {
  it('should render the Locations heading', async () => {
    const Page = await Index();
    render(Page);

    expect(screen.getByText('Locations')).toBeInTheDocument();
  });

  it('should have the correct container styling', async () => {
    const { container } = render(await Index());

    expect(container.innerHTML).toContain('w-full');
  });
});
