import { render, screen } from '@testing-library/react';
import { Sidebar } from '../components/Sidebar';

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  ChevronDown: () => <div data-testid="chevron-down-icon" />,
  CalendarClock: () => <div data-testid="calendar-clock-icon" />,
  Settings: () => <div data-testid="settings-icon" />,
  LogOut: () => <div data-testid="logout-icon" />,
}));

describe('Sidebar Component', () => {
  it('should render main menu items', () => {
    render(<Sidebar />);

    const menuItems = [
      'Home',
      'Academic',
      'Challenge',
      'Internship',
      'Career Development',
      'Personal space',
      'Team',
    ];

    menuItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('should render navigation links with correct hrefs', () => {
    render(<Sidebar />);

    const joinLink = screen.getByText('Join club').closest('a');
    expect(joinLink).toHaveAttribute('href', '/JoinClub');

    const createLink = screen.getByText('Create club').closest('a');
    expect(createLink).toHaveAttribute('href', '/');
  });

  it('should render bottom action items', () => {
    render(<Sidebar />);

    expect(screen.getByText('Request absence')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Sign Out')).toBeInTheDocument();
  });

  it('should render icons correctly', () => {
    render(<Sidebar />);

    // ChevronDown is used multiple times
    const chevrons = screen.getAllByTestId('chevron-down-icon');
    expect(chevrons.length).toBeGreaterThan(0);

    expect(screen.getByTestId('calendar-clock-icon')).toBeInTheDocument();
    expect(screen.getByTestId('settings-icon')).toBeInTheDocument();
    expect(screen.getByTestId('logout-icon')).toBeInTheDocument();
  });
});
