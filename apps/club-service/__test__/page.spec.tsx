// import { render, screen } from '@testing-library/react';
// import Page from '../app/page';

// describe('club-web page', () => {
//   it('renders', () => {
//     render(<Page />);
//     expect(screen.getByText('page')).toBeInTheDocument();
//   });
// });

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';

describe('club-web page', () => {
  it('renders', async () => {
    const ResolvedPage = await (Page as any)();

    render(ResolvedPage);

    expect(screen.getByText(/page/i)).toBeInTheDocument();
  });
});
