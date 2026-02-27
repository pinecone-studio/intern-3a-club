import { render, screen } from '@testing-library/react';
import { SystemTip } from '../components/club-add/SystemTip';

// Mock lucide-react icons for simplicity and to isolate the component test
jest.mock('lucide-react', () => ({
  ...jest.requireActual('lucide-react'),
  Clock: () => <div data-testid="clock-icon" />,
  Check: () => <div data-testid="check-icon" />,
}));

describe('SystemTip', () => {
  it('should render the title and description correctly', () => {
    render(<SystemTip />);

    const title = 'Хуваарь баталгаажуулалт';
    const description =
      'Систем таны сонгосон олон өдрүүдийн давхцлыг шалгаж байна.';

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('should render the Check and Clock icons', () => {
    render(<SystemTip />);

    expect(screen.getByTestId('check-icon')).toBeInTheDocument();
    expect(screen.getByTestId('clock-icon')).toBeInTheDocument();
  });

  it('should have the correct structure and classes for styling', () => {
    const { container } = render(<SystemTip />);

    const mainDiv = container.firstChild;
    expect(mainDiv).toHaveClass('bg-black/30');
    expect(mainDiv).toHaveClass('border-white/5');
    expect(mainDiv).toHaveClass('backdrop-blur-3xl');

    const iconContainer = screen.getByTestId('check-icon').parentElement;
    expect(iconContainer).toHaveClass('bg-emerald-500/15');
  });
});
