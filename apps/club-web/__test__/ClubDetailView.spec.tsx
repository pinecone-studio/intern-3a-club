import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ExtendedClub } from '../lib/type';
import { ClubDetailView } from '../app/JoinClub/_components/ClubDetailView';

// Хамааралтай жижиг компонентуудыг mock хийх (хэрэв шаардлагатай бол)
jest.mock('./ClubInfoGrid', () => ({
  ClubInfoGrid: () => <div data-testid="info-grid">Info Grid</div>,
}));

jest.mock('./ClubActionButton', () => ({
  ClubActionButtons: ({ onEnroll, onLeave, isEnrolled, loading }: any) => (
    <div>
      <button onClick={onEnroll} disabled={loading}>
        Элсэх
      </button>
      <button onClick={onLeave}>Клубээс гарах</button>
      {isEnrolled && <span>Бүртгүүлсэн</span>}
    </div>
  ),
}));

const mockClub = {
  id: 'club-1',
  name: 'Test Club',
  description: 'Test Description',
  type: 'Premium',
  teacherId: 'teacher-1',
  status: 'OPEN',
  isEnrolled: false,
} as ExtendedClub;

const mockTeacherData = {
  initial: 'T',
  name: 'Test Teacher',
};

describe('ClubDetailView', () => {
  const defaultProps = {
    club: mockClub,
    teacherData: mockTeacherData,
    banned: false,
    remainingTime: 0,
    loading: false,
    handleEnroll: jest.fn(),
    handleLeave: jest.fn(),
  };

  it('Клубын үндсэн мэдээллийг зөв харуулах ёстой', () => {
    render(<ClubDetailView {...defaultProps} />);

    expect(screen.getByText('Test Club')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('TEST TEACHER')).toBeInTheDocument();
    expect(screen.getByText('T')).toBeInTheDocument();
  });

  it('Клубын төрөл (type) байхгүй үед "Premium" гэж харуулах ёстой', () => {
    const clubWithoutType = { ...mockClub, type: undefined as any };
    render(<ClubDetailView {...defaultProps} club={clubWithoutType} />);

    expect(screen.getByText('Premium')).toBeInTheDocument();
  });

  it('Элсэх товчийг дарахад handleEnroll функц дуудагдах ёстой', () => {
    render(<ClubDetailView {...defaultProps} />);

    const enrollButton = screen.getByText('Элсэх');
    fireEvent.click(enrollButton);

    expect(defaultProps.handleEnroll).toHaveBeenCalledTimes(1);
  });

  it('Loading төлөвт байх үед товчлуур дээр ажиллах боломжгүйг шалгах', () => {
    render(<ClubDetailView {...defaultProps} loading={true} />);

    const enrollButton = screen.getByText('Элсэх');
    expect(enrollButton).toBeDisabled();
  });

  it('Бүртгүүлсэн төлөвийг зөв дамжуулж байгааг шалгах', () => {
    const enrolledClub = { ...mockClub, isEnrolled: true };
    render(<ClubDetailView {...defaultProps} club={enrolledClub} />);

    expect(screen.getByText('Бүртгүүлсэн')).toBeInTheDocument();
  });
});
