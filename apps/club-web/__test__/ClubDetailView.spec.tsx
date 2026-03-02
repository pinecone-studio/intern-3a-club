import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ClubDetailView } from '../app/JoinClub/_components/ClubDetailView';
import { ExtendedClub } from '../lib/type';

jest.mock('../app/JoinClub/_components/ClubInfoGrid', () => ({
  ClubInfoGrid: () => <div data-testid="info-grid">Info Grid</div>,
}));

jest.mock('../app/JoinClub/_components/ClubActionButton', () => ({
  ClubActionButtons: ({
    onEnroll,
    onLeave,
    loading,
  }: {
    onEnroll: () => void;
    onLeave: () => void;
    loading: boolean;
    isEnrolled: boolean;
    isLocked: boolean;
    status: string;
    remainingTime: number;
  }) => (
    <div>
      <button onClick={onEnroll} disabled={loading}>
        Элсэх
      </button>
      <button onClick={onLeave}>Клубээс гарах</button>
    </div>
  ),
}));

const mockClub = {
  id: 'club-1',
  name: 'Test Club',
  description: 'Test Description',
  teacherId: 'teacher-1',
  status: 'OPEN',
  isEnrolled: false,
} as unknown as ExtendedClub;

describe('ClubDetailView', () => {
  const defaultProps = {
    club: mockClub,
    teacherData: { initial: 'T', name: 'Test Teacher' },
    banned: false,
    remainingTime: 0,
    loading: false,
    handleEnroll: jest.fn(),
    handleLeave: jest.fn(),
  };

  it('Клубын мэдээллийг зөв харуулах ёстой', () => {
    render(<ClubDetailView {...defaultProps} />);
    expect(screen.getByText('Test Club')).toBeInTheDocument();
    expect(screen.getByText('TEST TEACHER')).toBeInTheDocument();
  });

  it('Элсэх товч дарахад функц дуудагдах ёстой', () => {
    render(<ClubDetailView {...defaultProps} />);
    fireEvent.click(screen.getByText('Элсэх'));
    expect(defaultProps.handleEnroll).toHaveBeenCalled();
  });
});
