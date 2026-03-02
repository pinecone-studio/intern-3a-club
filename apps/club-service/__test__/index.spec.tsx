import { render, screen } from '@testing-library/react';
import Home from '../pages/index'; // default import ашиглах

describe('Home Page', () => {
  it('should render the welcome heading correctly', () => {
    // 1. Компонентыг render хийх
    render(<Home />);

    // 2. <h1>Welcome!</h1> текст байгаа эсэхийг шалгах
    const heading = screen.getByRole('heading', { name: /welcome to/i });

    // 3. Баталгаажуулалт (Assertion)
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });

  it('should match the snapshot', () => {
    // UI-д өөрчлөлт орсон эсэхийг хянахын тулд snapshot ашиглаж болно
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
