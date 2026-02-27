import { render, screen } from '@testing-library/react';
import { MyClubsList } from './PersonalClubs';

// Mock framer-motion to avoid errors in test environment and simplify testing
jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion');
  return {
    ...actual,
    motion: {
      ...actual.motion,
      // Render a simple div instead of a motion component for tests
      div: ({ children, ...rest }: { children: React.ReactNode }) => (
        <div {...rest}>{children}</div>
      ),
    },
  };
});

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  ...jest.requireActual('lucide-react'),
  PencilLine: () => <div data-testid="pencil-icon" />,
}));

describe('MyClubsList', () => {
  it('should render the section title and icon', () => {
    render(<MyClubsList />);
    expect(screen.getByText('Миний Клубууд')).toBeInTheDocument();
    expect(screen.getByTestId('pencil-icon')).toBeInTheDocument();
  });

  it('should render the hardcoded club data correctly', () => {
    render(<MyClubsList />);

    const clubName = 'Leet Code Club';
    const clubDetails = '15 Гишүүд • Technology';
    const clubInitial = 'L';

    expect(screen.getByText(clubName)).toBeInTheDocument();
    expect(screen.getByText(clubDetails)).toBeInTheDocument();
    expect(screen.getByText(clubInitial)).toBeInTheDocument();
  });

  it('should render exactly one club item based on the hardcoded data', () => {
    render(<MyClubsList />);
    const clubHeadings = screen.getAllByRole('heading', { level: 4 });
    expect(clubHeadings).toHaveLength(1);
    expect(clubHeadings[0]).toHaveTextContent('Leet Code Club');
  });
});
