import { render, screen } from '@testing-library/react';
import Index from '../app/page';

describe('Index (page)', () => {
  it('should render hello text', async () => {
    const Page = await Index();
    render(Page);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  it('should have a div with red background class', async () => {
    const Page = await Index();
    const { container } = render(Page);
    const div = container.querySelector('.bg-red-500');
    expect(div).toBeInTheDocument();
  });
});
