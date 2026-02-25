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

describe('ClubsContent 100% Coverage Final', () => {
  const mockClubsData = [
    { id: '1', name: 'Math Club', status: 'active' },
    { id: '2', name: 'Art Club', status: 'active' },
  ];

  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('Бүх логик болон таймерыг шалгах (Line 16, 68, 80)', async () => {
    mockUseQuery.mockReturnValue({
      loading: false,
      data: { getAllClubs: mockClubsData },
      error: undefined,
    });

    render(<ClubsContent />);

    // handleSelect ажиллуулах (Line 68)
    await waitFor(() =>
      expect(screen.getByTestId('select-2')).toBeInTheDocument()
    );
    fireEvent.click(screen.getByTestId('select-2'));

    // Enroll/Leave ажиллуулж "isEnrolled: true" нөхцөлийг үүсгэх (Line 16)
    fireEvent.click(screen.getByTestId('enroll-btn'));
    fireEvent.click(screen.getByTestId('leave-btn'));

    // Таймерыг урагшлуулж Lock төлөвийг шалгах
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // setImmediate-ийн оронд Promise ашиглан async төлөвийг хүлээх
    await act(async () => {
      await Promise.resolve();
    });

    expect(screen.getByTestId('lock-timer')).toBeInTheDocument();
  });

  it('Edge cases: Loading, Error, Empty Data (Line 80)', () => {
    // Loading
    mockUseQuery.mockReturnValue({ loading: true });
    const { rerender, container } = render(<ClubsContent />);
    expect(container.firstChild).toBeNull();

    // Error
    mockUseQuery.mockReturnValue({
      loading: false,
      error: { message: 'Apollo Error' },
    });
    rerender(<ClubsContent />);
    expect(screen.getByText('Apollo Error')).toBeInTheDocument();

    // Case: data object exists but getAllClubs is null/missing (Line 80 fallback)
    mockUseQuery.mockReturnValue({ loading: false, data: {} });
    rerender(<ClubsContent />);
    expect(screen.getByTestId('list-container')).toBeEmptyDOMElement();

    // Case: data undefined
    mockUseQuery.mockReturnValue({ loading: false, data: undefined });
    rerender(<ClubsContent />);
  });
});
