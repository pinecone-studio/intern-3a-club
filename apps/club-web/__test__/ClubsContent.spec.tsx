import React from 'react';
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { useQuery } from '@apollo/client/react';
import { ClubsContent } from '../app/JoinClub/_components/ClubsContent';
import { Data, ExtendedClub, GetAllClub } from '../lib/type';

// 1. Apollo Mock төрөлжүүлэлт
jest.mock('@apollo/client/react', () => ({
  useQuery: jest.fn(),
}));

const mockUseQuery = useQuery as jest.MockedFunction<typeof useQuery>;

// 2. Child Components Mock - Төрөлжүүлэлтийг strict болгов
interface DetailProps {
  selectedClub?: ExtendedClub;
  onEnroll: (id: string) => void;
  onLeave: (id: string) => void;
  isLocked: boolean;
  remainingTime: number;
}

jest.mock('../app/JoinClub/_components/ClubDetail', () => ({
  ClubDetail: ({
    selectedClub,
    onEnroll,
    onLeave,
    isLocked,
    remainingTime,
  }: DetailProps) => (
    <div data-testid="detail-container">
      <h2 data-testid="detail-name">{selectedClub?.name || ''}</h2>
      <button
        data-testid="enroll-btn"
        onClick={() => selectedClub && onEnroll(selectedClub.id)}
      >
        Enroll
      </button>
      <button
        data-testid="leave-btn"
        onClick={() => selectedClub && onLeave(selectedClub.id)}
      >
        Leave
      </button>
      {isLocked && (
        <span data-testid="lock-timer">Locked - {remainingTime}s</span>
      )}
    </div>
  ),
}));

interface ListProps {
  onSelect: (id: string) => void;
  clubs: ExtendedClub[];
}

jest.mock('../app/JoinClub/_components/ClubList', () => ({
  ClubList: ({ onSelect, clubs }: ListProps) => (
    <div data-testid="list-container">
      {clubs.map((c) => (
        <button
          key={c.id}
          data-testid={`select-${c.id}`}
          onClick={() => onSelect(c.id)}
        >
          {c.name}
        </button>
      ))}
    </div>
  ),
}));

describe('ClubsContent 100% Coverage Final', () => {
  const mockClubsData: GetAllClub[] = [
    {
      id: '1',
      name: 'Math Club',
      status: 'active',
      description: 'Math is fun',
      teacherId: 'Teacher 1',
      timetables: [],
      type: 'Academic',
      minMember: 5,
      maxMember: 20,
    },
    {
      id: '2',
      name: 'Art Club',
      status: 'active',
      description: 'Art is life',
      teacherId: 'Teacher 2',
      timetables: [],
      type: 'Hobby',
      minMember: 5,
      maxMember: 20,
    },
  ];

  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('Бүх логик, Таймер, Enroll/Leave нөхцөлийг шалгах (Line 16, 52, 58, 60)', async () => {
    // 100% coverage авахын тулд refetch болон бусад Apollo талбаруудыг mock-дох
    mockUseQuery.mockReturnValue({
      loading: false,
      data: { getAllClubs: mockClubsData } as Data,
      error: undefined,
      networkStatus: 7,
      called: true,
      refetch: jest.fn(),
    } as ReturnType<typeof useQuery>);

    render(<ClubsContent />);

    // handleSelect (Line 68)
    await waitFor(() =>
      expect(screen.getByTestId('select-2')).toBeInTheDocument()
    );
    fireEvent.click(screen.getByTestId('select-2'));

    // handleEnroll (Line 52-53)
    fireEvent.click(screen.getByTestId('enroll-btn'));

    // handleLeave (Line 58-60)
    fireEvent.click(screen.getByTestId('leave-btn'));

    // Timer logic (Line 16, 80)
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    await act(async () => {
      await Promise.resolve();
    });

    expect(screen.getByTestId('lock-timer')).toBeInTheDocument();
  });

  it('Edge cases: Loading, Error, Empty Data coverage', () => {
    // 1. Loading state
    mockUseQuery.mockReturnValue({ loading: true } as ReturnType<
      typeof useQuery
    >);
    const { rerender, container } = render(<ClubsContent />);
    expect(container.firstChild).toBeNull();

    // 2. Error state (Constructor алдаанаас сэргийлж объект байдлаар дамжуулав)
    mockUseQuery.mockReturnValue({
      loading: false,
      error: { message: 'Apollo Error' },
      data: undefined,
    } as ReturnType<typeof useQuery>);

    rerender(<ClubsContent />);
    expect(screen.getByText('Apollo Error')).toBeInTheDocument();

    // 3. Empty Data (Line 42 fallback)
    mockUseQuery.mockReturnValue({
      loading: false,
      data: { getAllClubs: [] } as Data,
    } as ReturnType<typeof useQuery>);

    rerender(<ClubsContent />);
    expect(screen.getByTestId('list-container')).toBeEmptyDOMElement();
  });
});
