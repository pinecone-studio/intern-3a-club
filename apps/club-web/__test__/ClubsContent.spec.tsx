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

// 1. Apollo Mock
jest.mock('@apollo/client/react', () => ({
  useQuery: jest.fn(),
}));

// 2. Child Components Mock
jest.mock('../app/JoinClub/_components/ClubDetail', () => ({
  ClubDetail: ({
    selectedClub,
    onEnroll,
    onLeave,
    isLocked,
    remainingTime,
  }: any) => (
    <div data-testid="detail-container">
      <h2 data-testid="detail-name">{selectedClub?.name || ''}</h2>
      <button
        data-testid="enroll-btn"
        onClick={() => onEnroll(selectedClub?.id)}
      >
        Enroll
      </button>
      <button data-testid="leave-btn" onClick={() => onLeave(selectedClub?.id)}>
        Leave
      </button>
      {isLocked && (
        <span data-testid="lock-timer">Locked - {remainingTime}s</span>
      )}
    </div>
  ),
}));

jest.mock('../app/JoinClub/_components/ClubList', () => ({
  ClubList: ({ onSelect, clubs }: any) => (
    <div data-testid="list-container">
      {(clubs || []).map((c: any) => (
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

const mockUseQuery = useQuery as unknown as jest.Mock;

const mockClubsData = [
  { id: '1', name: 'Math Club', status: 'active', teacherId: 'T1' },
  { id: '2', name: 'Art Club', status: 'active', teacherId: 'T2' },
];

describe('ClubsContent Full Coverage', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('1. Success flow: Load, Select, Enroll, Leave, Timer', async () => {
    mockUseQuery.mockReturnValue({
      loading: false,
      data: { getAllClubs: mockClubsData },
      error: undefined,
    });

    render(<ClubsContent />);

    // Сонгогдсон клубыг шалгах
    await waitFor(() => {
      expect(screen.getByTestId('detail-name')).toHaveTextContent('Math Club');
    });

    // Клуб солих
    fireEvent.click(screen.getByTestId('select-2'));
    expect(screen.getByTestId('detail-name')).toHaveTextContent('Art Club');

    // Enroll & Leave
    fireEvent.click(screen.getByTestId('enroll-btn'));
    fireEvent.click(screen.getByTestId('leave-btn'));

    // Timer шалгах
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByTestId('lock-timer')).toBeInTheDocument();

    // Lock тайлагдах
    act(() => {
      jest.advanceTimersByTime(61000);
    });
    expect(screen.queryByTestId('lock-timer')).not.toBeInTheDocument();
  });

  it('2. Loading & Error branches', () => {
    mockUseQuery.mockReturnValue({ loading: true });
    const { rerender, container } = render(<ClubsContent />);
    expect(container.firstChild).toBeNull();

    mockUseQuery.mockReturnValue({
      loading: false,
      error: { message: 'Fetch Failed' },
    });
    rerender(<ClubsContent />);
    expect(screen.getByText('Fetch Failed')).toBeInTheDocument();
  });

  it('3. Branch Coverage 100%: Empty data edge cases', () => {
    // Case 1: getAllClubs is empty array (Line 41 branch)
    mockUseQuery.mockReturnValue({
      loading: false,
      data: { getAllClubs: [] },
      error: undefined,
    });
    const { rerender } = render(<ClubsContent />);
    expect(screen.getByTestId('list-container')).toBeEmptyDOMElement();

    // Case 2: data exists but getAllClubs is undefined (Line 80 fallback branch)
    mockUseQuery.mockReturnValue({
      loading: false,
      data: {},
      error: undefined,
    });
    rerender(<ClubsContent />);
    expect(screen.getByTestId('list-container')).toBeEmptyDOMElement();

    // Case 3: data is completely undefined (Line 16 branch)
    mockUseQuery.mockReturnValue({
      loading: false,
      data: undefined,
      error: undefined,
    });
    rerender(<ClubsContent />);
    expect(screen.getByTestId('detail-name')).toHaveTextContent('');
  });
});
