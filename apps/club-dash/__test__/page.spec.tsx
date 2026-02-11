import { render, screen } from '@testing-library/react';
import Index from '../app/page';

// describe('Index (page)', () => {
//   it('should render hello text', async () => {
//     const Page = await Index();
//     render(Page);
//     expect(screen.getByText('hello')).toBeInTheDocument();
//   });

//   it('should have a div with red background class', async () => {
//     const Page = await Index();
//     const { container } = render(Page);
//     const div = container.querySelector('.bg-red-500');
//     expect(div).toBeInTheDocument();
//   });
// });

describe('Index (page)', () => {
  it('should render the Locations heading', async () => {
    render(await Index());
    expect(screen.getByText('Locations')).toBeInTheDocument();
  });

  it('should have the correct container styling', async () => {
    const { container } = render(await Index());

    const div = container.querySelector('.w-full');
    expect(div).toBeInTheDocument();
  });
});
