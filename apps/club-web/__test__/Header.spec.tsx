import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header';

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Flame: () => <div data-testid="flame-icon" />,
  Star: () => <div data-testid="star-icon" />,
  Bell: () => <div data-testid="bell-icon" />,
  RotateCcw: () => <div data-testid="rotate-ccw-icon" />,
  User: () => <div data-testid="user-icon" />,
}));

describe('Header Component', () => {
  it('should render navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('should render stats correctly', () => {
    render(<Header />);
    // Check for static stats values
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('882')).toBeInTheDocument();

    // Check for XP stats
    expect(screen.getByText('4344')).toBeInTheDocument();
    expect(screen.getByText('/4580XP')).toBeInTheDocument();

    // Check for level badge
    expect(screen.getByText('7')).toBeInTheDocument();
  });

  it('should render all action icons', () => {
    render(<Header />);
    expect(screen.getByTestId('flame-icon')).toBeInTheDocument();
    expect(screen.getByTestId('star-icon')).toBeInTheDocument();
    expect(screen.getByTestId('bell-icon')).toBeInTheDocument();
    expect(screen.getByTestId('rotate-ccw-icon')).toBeInTheDocument();
    expect(screen.getByTestId('user-icon')).toBeInTheDocument();
  });
});
