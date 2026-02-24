import { render, screen, fireEvent, act } from '@testing-library/react';
import { ClubsContent } from '../app/JoinClub/_components/ClubsContent';
import React from 'react';

const MOCK_NOW = 1700000000000;

// Mock ClubList to capture onSelect and allow forcing invalid ID

jest.mock('../app/JoinClub/_components/ClubList', () => ({
  ClubList: ({
    clubs,
    onSelect,
    selectedClubId: _selectedClubId,
  }: {
    clubs: { id: number; name: string }[];
    onSelect: (_id: number) => void;
    selectedClubId: number;
  }) => (
    <div data-testid="club-list">
      {clubs.map((c) => (
        <button key={c.id} onClick={() => onSelect(c.id)}>
          {c.name}
        </button>
      ))}
      <button onClick={() => onSelect(999)} data-testid="force-invalid-select">
        Force Invalid ID
      </button>
    </div>
  ),
}));

describe('ClubsContent Logic Coverage', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(MOCK_NOW);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should cover sorting, enrollment and lock logic (Lines 11, 53-63)', async () => {
    render(<ClubsContent />);

    // Line 11: Sorting check (Enroll хийхэд эрэмбэ өөрчлөгдөх)
    // Switch to the 3rd club (Code Club) which is Open
    const codeClubCard = await screen.findByRole('button', {
      name: 'Code Club',
    });
    fireEvent.click(codeClubCard);

    // Wait for the detail view to update to Code Club
    await screen.findByRole('heading', { level: 1, name: /Code Club/i });

    // Now enroll in the selected club
    const enrollBtn = await screen.findByRole('button', {
      name: /Одоо нэгдэх/i,
    });
    fireEvent.click(enrollBtn);

    // Line 53-60: handleLeave & isLocked logic
    const leaveBtn = await screen.findByRole('button', {
      name: /Клубээс гарах/i,
    });
    fireEvent.click(leaveBtn);

    // Locked state
    await screen.findByText(/60с хүлээх/i);

    // Line 61-63: diff <= 0 (Түгжээ тайлагдах)
    act(() => {
      jest.advanceTimersByTime(61000);
    });

    const enrollAgainBtn = await screen.findByRole('button', {
      name: /Одоо нэгдэх/i,
    });
    expect(enrollAgainBtn).toBeInTheDocument();
  });

  it('should cover sorting logic (Line 11) fully - multiple enrolled', async () => {
    render(<ClubsContent />);

    // Enroll TWO clubs to test "Enrolled vs Enrolled" comparison (returns 0)

    // 1. Enroll Code Club
    const codeClubBtn = await screen.findByRole('button', {
      name: 'Code Club',
    });
    fireEvent.click(codeClubBtn);
    await screen.findByRole('heading', { level: 1, name: /Code Club/i });

    const enrollBtn = await screen.findByRole('button', {
      name: /Одоо нэгдэх/i,
    });
    fireEvent.click(enrollBtn);
    // Wait for enrollment state update
    await screen.findByRole('button', { name: /Клубээс гарах/i });

    // 2. Enroll Robotics Lab (First one)
    const roboticsBtn = await screen.findByRole('button', {
      name: 'Robotics Lab',
    });
    fireEvent.click(roboticsBtn);
    await screen.findByRole('heading', { level: 1, name: /Robotics Lab/i });

    const enrollBtn2 = await screen.findByRole('button', {
      name: /Одоо нэгдэх/i,
    });
    fireEvent.click(enrollBtn2);

    // Both are enrolled. Order should be preserved or stable.
    const leaveBtns = screen.getAllByText(/Клубээс гарах/i);
    expect(leaveBtns.length).toBeGreaterThan(0);
  });

  it('should cover fallback selection (Line 53)', () => {
    render(<ClubsContent />);

    // Trigger the fallback: select an ID that doesn't exist
    const forceInvalid = screen.getByTestId('force-invalid-select');
    fireEvent.click(forceInvalid);

    // Should fallback to the first club (Robotics Lab)
    // We check if the Detail view shows Robotics Lab
    // Using regex for case-insensitive match as validatable text might be uppercase via CSS
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /ROBOTICS LAB/i
    );
  });
});
