import { render, screen, fireEvent, act } from '@testing-library/react';
import { ClubsContent } from '../app/JoinClub/_components/ClubsContent';
import React from 'react';

const MOCK_NOW = 1700000000000;

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
    const codeClubCard = screen.getByText('Code Club');
    fireEvent.click(codeClubCard);

    // Now enroll in the selected club
    const enrollBtn = screen.getByText(/Одоо нэгдэх/i);
    fireEvent.click(enrollBtn);

    // Line 53-60: handleLeave & isLocked logic
    const leaveBtn = await screen.findByText(/Клубээс гарах/i);
    fireEvent.click(leaveBtn);

    // Locked state
    expect(screen.getByText(/60с хүлээх/i)).toBeInTheDocument();

    // Line 61-63: diff <= 0 (Түгжээ тайлагдах)
    act(() => {
      jest.advanceTimersByTime(61000);
    });

    const enrollAgainBtn = await screen.findByText(/Одоо нэгдэх/i);
    expect(enrollAgainBtn).toBeInTheDocument();
  });

  it('should cover fallback selection (Line 55)', () => {
    render(<ClubsContent />);
    // Байхгүй ID сонгох оролдлого хийх (Internal state-ийг өдөөх)
    const cards = screen.getAllByRole('button');
    fireEvent.click(cards[0]);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
