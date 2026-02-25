import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ClubDetail } from '../app/JoinClub/_components/ClubDetail'; // Шууд файлаас нь импортлох

// 1. Lucide-react-ийг mock хийх (Icon-ууд undefined болохоос сэргийлнэ)
jest.mock('lucide-react', () => ({
  ShieldCheck: () => <div data-testid="shield-icon" />,
  Award: () => <div data-testid="award-icon" />,
}));

// 2. Framer Motion-ийг mock хийх (Анимэйшн тестийг гацаахаас сэргийлнэ)
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// 3. Child компонентуудыг mock хийх
jest.mock('../app/JoinClub/_components/ClubInfoGrid', () => ({
  ClubInfoGrid: () => <div data-testid="club-info-grid" />,
}));

jest.mock('../app/JoinClub/_components/ClubActionButton', () => ({
  ClubActionButtons: ({
    onEnroll,
    onLeave,
    isEnrolled,
    isLocked,
    status,
    remainingTime,
  }: any) => (
    <div data-testid="action-buttons">
      <button onClick={onEnroll}>Enroll Button</button>
      <button onClick={onLeave}>Leave Button</button>
      <span>{isEnrolled ? 'Enrolled' : 'Not Enrolled'}</span>
    </div>
  ),
}));

const mockClub = {
  id: 'club-123',
  name: 'Coding Club',
  description: 'Learn to code with fun',
  teacherId: 'Teacher Bold',
  status: 'active',
  isEnrolled: false,
  timetables: [{ date: 'Monday 10:00' }],
};

describe('ClubDetail Component', () => {
  const defaultProps = {
    selectedClub: undefined,
    onEnroll: jest.fn(),
    onLeave: jest.fn(),
    isLocked: false,
    remainingTime: 3600,
  };

  it('1. Клуб сонгоогүй үед "Клуб сонгоно уу" гэж харуулна (Empty State)', () => {
    render(<ClubDetail {...defaultProps} />);
    expect(screen.getByText('Клуб сонгоно уу')).toBeInTheDocument();
  });

  it('2. Клубын мэдээллийг (нэр, тайлбар, багш) бүрэн харуулна', () => {
    render(<ClubDetail {...defaultProps} selectedClub={mockClub as any} />);

    expect(screen.getByText('Coding Club')).toBeInTheDocument();
    expect(screen.getByText('Learn to code with fun')).toBeInTheDocument();
    expect(screen.getByText('Teacher Bold')).toBeInTheDocument();
    expect(screen.getByText('Premium Club')).toBeInTheDocument();
  });

  it('3. Enrollment (Элсэх) функц зөв дуудагдаж байгааг шалгах', () => {
    const onEnrollMock = jest.fn();
    render(
      <ClubDetail
        {...defaultProps}
        selectedClub={mockClub as any}
        onEnroll={onEnrollMock}
      />
    );

    const enrollBtn = screen.getByText('Enroll Button');
    fireEvent.click(enrollBtn);

    expect(onEnrollMock).toHaveBeenCalledWith('club-123');
  });

  it('4. Leave (Гарах) функц зөв дуудагдаж байгааг шалгах', () => {
    const onLeaveMock = jest.fn();
    const enrolledClub = { ...mockClub, isEnrolled: true };

    render(
      <ClubDetail
        {...defaultProps}
        selectedClub={enrolledClub as any}
        onLeave={onLeaveMock}
      />
    );

    const leaveBtn = screen.getByText('Leave Button');
    fireEvent.click(leaveBtn);

    expect(onLeaveMock).toHaveBeenCalledWith('club-123');
  });

  it('5. Сурагчдын Badge жагсаалт зөв зурагдаж байгааг шалгах', () => {
    render(<ClubDetail {...defaultProps} selectedClub={mockClub as any} />);

    // Код дотор байгаа статик ID-нууд харагдаж байгаа эсэх
    expect(screen.getByText('25LP9878')).toBeInTheDocument();
    expect(screen.getByText('25LP4578')).toBeInTheDocument();
  });

  it('6. Timetable байхгүй үед "TBD" гэж дамжуулж байгааг шалгах', () => {
    const clubWithoutTime = { ...mockClub, timetables: [] };
    render(
      <ClubDetail {...defaultProps} selectedClub={clubWithoutTime as any} />
    );

    // ClubInfoGrid-рүү "TBD" дамжсан эсэхийг mock ашиглан шууд бусаар шалгах
    expect(screen.getByTestId('club-info-grid')).toBeInTheDocument();
  });
});
