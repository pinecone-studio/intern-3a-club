import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Pending } from '../../app/_components/teacher/pending/Pending';
import type { PendingClubsData } from '../../libs/types';

const mockUseQuery = jest.fn();
const mockUseMutation = jest.fn();

jest.mock('@apollo/client/react', () => ({
  ...jest.requireActual('@apollo/client/react'),
  useQuery: (...args: unknown[]) => mockUseQuery(...args),
  useMutation: (...args: unknown[]) => mockUseMutation(...args),
}));

describe('Pending', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders pending count from mapped data', () => {
    const data: PendingClubsData = {
      getAllPendingClubs: [
        {
          id: '1',
          name: 'Club 1',
          description: 'd1',
          teacherId: 't1',
          minMember: 5,
          maxMember: 10,
          status: 'pending',
          timetables: [],
        },
      ],
    };

    mockUseQuery.mockReturnValue({ data, loading: false, error: undefined });
    mockUseMutation.mockReturnValue([jest.fn(), {}]);

    render(<Pending />);

    expect(
      screen.getByRole('button', { name: /pending \(1\)/i })
    ).toBeInTheDocument();
  });

  it('opens modal when button clicked', () => {
    const data: PendingClubsData = {
      getAllPendingClubs: [
        {
          id: '1',
          name: 'Club 1',
          description: 'd1',
          teacherId: 't1',
          minMember: 5,
          maxMember: 10,
          status: 'pending',
          timetables: [],
        },
      ],
    };

    mockUseQuery.mockReturnValue({ data, loading: false, error: undefined });
    mockUseMutation.mockReturnValue([jest.fn(), {}]);

    render(<Pending />);

    // товчийг дарсны дараа modal header харагдана
    fireEvent.click(screen.getByRole('button', { name: /pending \(1\)/i }));

    return waitFor(() => {
      expect(screen.getByText(/pending requests/i)).toBeInTheDocument();
    });
  });
});
