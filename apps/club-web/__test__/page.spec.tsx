import { render, screen } from '@testing-library/react';
import ClubWebHomePage from '../app/page';

jest.mock('@apollo/client/react', () => ({
  useQuery: jest.fn(),
  useMutation: jest.fn(() => [jest.fn()]),
}));

jest.mock('@apollo/client', () => ({
  gql: jest.fn((strings: TemplateStringsArray, ...values: unknown[]) =>
    String.raw(strings, ...values)
  ),
}));

const useQuery = jest.requireMock('@apollo/client/react').useQuery;

describe('ClubWebHomePage', () => {
  it('should show loading state', () => {
    useQuery.mockReturnValue({ data: undefined, loading: true, error: undefined });
    render(<ClubWebHomePage />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should show error state', () => {
    useQuery.mockReturnValue({
      data: undefined,
      loading: false,
      error: { message: 'Network error' },
    });
    render(<ClubWebHomePage />);
    expect(screen.getByText('Error: Network error')).toBeInTheDocument();
  });

  it('should show Locations heading when data is loaded', () => {
    useQuery.mockReturnValue({
      data: { locations: [] },
      loading: false,
      error: undefined,
    });
    render(<ClubWebHomePage />);
    expect(screen.getByText('Locations')).toBeInTheDocument();
  });

  it('should render location list when data is loaded', () => {
    useQuery.mockReturnValue({
      data: {
        locations: [
          {
            id: '1',
            name: 'Main Hall',
            description: 'Central venue',
            photo: 'photo1.jpg',
          },
          {
            id: '2',
            name: 'Studio B',
            description: 'Small room',
            photo: 'photo2.jpg',
          },
        ],
      },
      loading: false,
      error: undefined,
    });
    render(<ClubWebHomePage />);
    expect(screen.getByText('Main Hall')).toBeInTheDocument();
    expect(screen.getByText('Central venue')).toBeInTheDocument();
    expect(screen.getByText('Studio B')).toBeInTheDocument();
    expect(screen.getByText('Small room')).toBeInTheDocument();
  });
});
