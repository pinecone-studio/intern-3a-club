import { render, screen } from '@testing-library/react';
import { RequestHistory } from '../components/club-add/RequestHistory';
import { useQuery } from '@apollo/client/react';

// Mock the useQuery hook from Apollo Client
jest.mock('@apollo/client/react', () => ({
  ...jest.requireActual('@apollo/client/react'),
  useQuery: jest.fn(),
}));

// Mock lucide-react to avoid rendering actual icons in tests
jest.mock('lucide-react', () => ({
  ...jest.requireActual('lucide-react'),
  History: () => <div data-testid="history-icon" />,
}));

const mockUseQuery = useQuery as unknown as jest.Mock;

describe('RequestHistory', () => {
  beforeEach(() => {
    mockUseQuery.mockClear();
  });

  it('should render the title and icon', () => {
    mockUseQuery.mockReturnValue({
      data: undefined,
      loading: true,
      error: undefined,
    });
    render(<RequestHistory />);

    expect(screen.getByText('Илгээсэн хүсэлтүүд')).toBeInTheDocument();
    expect(screen.getByTestId('history-icon')).toBeInTheDocument();
  });

  it('should display loading skeletons while data is being fetched', () => {
    mockUseQuery.mockReturnValue({
      data: undefined,
      loading: true,
      error: undefined,
    });
    render(<RequestHistory />);

    const skeletons = screen.getAllByTestId('loading-skeleton');
    expect(skeletons.length).toBeGreaterThan(0);
    expect(skeletons).toHaveLength(3);
  });

  it('should display request rows when data is successfully fetched', () => {
    const mockRequests = [
      { id: 'req-1', name: 'Chess Club', status: 'approved' },
      { id: 'req-2', name: 'Art Club', status: 'pending' },
      { id: 'req-3', name: 'Science Club', status: undefined },
    ];

    mockUseQuery.mockReturnValue({
      data: { getAllClubs: mockRequests },
      loading: false,
      error: undefined,
    });

    render(<RequestHistory />);

    expect(screen.queryByTestId('loading-skeleton')).not.toBeInTheDocument();

    expect(screen.getByText('Chess Club')).toBeInTheDocument();
    expect(screen.getByText('req-1')).toBeInTheDocument();
    expect(screen.getByText('approved')).toBeInTheDocument();

    expect(screen.getByText('Art Club')).toBeInTheDocument();
    expect(screen.getByText('req-2')).toBeInTheDocument();
    expect(screen.getByText('pending'));
  });

  it('should display an empty list when there are no requests', () => {
    mockUseQuery.mockReturnValue({
      data: { getAllClubs: [] },
      loading: false,
      error: undefined,
    });

    render(<RequestHistory />);

    expect(screen.queryByTestId('loading-skeleton')).not.toBeInTheDocument();
    const listContainer = screen.getByTestId('request-list');
    expect(listContainer.children.length).toBe(0);
  });

  // ЭНЭ ХЭСГИЙГ ЗАССАН:
  it('should handle GraphQL errors gracefully', () => {
    const error = new Error('Failed to fetch');
    mockUseQuery.mockReturnValue({
      data: undefined,
      loading: false,
      error: error,
    });

    render(<RequestHistory />);

    // 'Илгээсэн хүсэлтүүд' текст байгаа эсэхийг шалгах
    expect(screen.getByText('Илгээсэн хүсэлтүүд')).toBeInTheDocument();

    // parentElement?.nextElementSibling гэхийн оронд шууд Test ID-аар нь барьж авна
    const listContainer = screen.getByTestId('request-list');

    // Алдаа гарсан үед жагсаалт хоосон байх ёстой
    expect(listContainer.childElementCount).toBe(0);

    // Loading skeleton байхгүй байх ёстой
    expect(screen.queryByTestId('loading-skeleton')).not.toBeInTheDocument();
  });
});
