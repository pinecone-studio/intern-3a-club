import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ClubDetail } from '../app/JoinClub/_components/ClubDetail';
import { ExtendedClub } from '../lib/type';

// 1. Lucide-react Mock
jest.mock('lucide-react', () => ({
  ShieldCheck: () => <div data-testid="shield-icon" />,
  Award: () => <div data-testid="award-icon" />,
}));

// 2. Framer Motion Mock
interface MotionProps {
  children: React.ReactNode;
  [key: string]: unknown;
}

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: MotionProps) => (
      <div {...(props as React.HTMLAttributes<HTMLDivElement>)}>{children}</div>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

// 3. Child Components Mock
jest.mock('../app/JoinClub/_components/ClubInfoGrid', () => ({
  ClubInfoGrid: () => <div data-testid="club-info-grid" />,
}));

// ESLint-ийн no-unused-vars-аас сэргийлж ашиглахгүй props-ийг _rest болгож авав
interface ActionButtonProps {
  onEnroll: (_id: string) => void;
  onLeave: (_id: string) => void;
  isEnrolled: boolean;
  isLocked: boolean;
  status: string;
  remainingTime: number;
}

jest.mock('../app/JoinClub/_components/ClubActionButton', () => ({
  ClubActionButtons: ({
    onEnroll,
    onLeave,
    isEnrolled,
    ..._rest // Бусад props-ийг linter-т зориулж цуглуулав
  }: ActionButtonProps) => (
    <div data-testid="action-buttons">
      <button onClick={() => onEnroll('club-123')}>Enroll Button</button>
      <button onClick={() => onLeave('club-123')}>Leave Button</button>
      <span>{isEnrolled ? 'Enrolled' : 'Not Enrolled'}</span>
      {_rest.isLocked && <span>Locked</span>}
    </div>
  ),
}));

// ExtendedClub-ийн бүх Required талбаруудыг дүүргэсэн Mock Data
const mockClub: ExtendedClub = {
  id: 'club-123',
  name: 'Coding Club',
  description: 'Learn to code with fun',
  teacherId: 'Teacher Bold',
  status: 'active',
  isEnrolled: false,
  bannedUntil: 0,
  type: 'Premium', // Нэмэгдсэн
  minMember: 5, // Нэмэгдсэн
  maxMember: 20, // Нэмэгдсэн
  timetables: [
    {
      id: 't1',
      clubId: 'club-123',
      room: '101',
      clubStartTime: '10:00',
      duration: 60,
      date: 'Monday 10:00',
    },
  ],
};

describe('ClubDetail Component', () => {
  const defaultProps = {
    selectedClub: undefined as unknown as ExtendedClub,
    onEnroll: jest.fn(),
    onLeave: jest.fn(),
    isLocked: false,
    remainingTime: 3600,
  };

  it('1. Клуб сонгоогүй үед "Клуб сонгоно уу" гэж харуулна', () => {
    render(<ClubDetail {...defaultProps} />);
    expect(screen.getByText('Клуб сонгоно уу')).toBeInTheDocument();
  });

  it('2. Клубын мэдээллийг (нэр, тайлбар, багш) бүрэн харуулна', () => {
    render(<ClubDetail {...defaultProps} selectedClub={mockClub} />);

    expect(screen.getByText('Coding Club')).toBeInTheDocument();
    expect(screen.getByText('Learn to code with fun')).toBeInTheDocument();
    expect(screen.getByText('Teacher Bold')).toBeInTheDocument();
  });

  it('3. Enrollment (Элсэх) функц зөв дуудагдаж байгааг шалгах', () => {
    const onEnrollMock = jest.fn();
    render(
      <ClubDetail
        {...defaultProps}
        selectedClub={mockClub}
        onEnroll={onEnrollMock}
      />
    );

    fireEvent.click(screen.getByText('Enroll Button'));
    expect(onEnrollMock).toHaveBeenCalledWith('club-123');
  });

  it('4. Leave (Гарах) функц зөв дуудагдаж байгааг шалгах', () => {
    const onLeaveMock = jest.fn();
    const enrolledClub = { ...mockClub, isEnrolled: true };

    render(
      <ClubDetail
        {...defaultProps}
        selectedClub={enrolledClub}
        onLeave={onLeaveMock}
      />
    );

    fireEvent.click(screen.getByText('Leave Button'));
    expect(onLeaveMock).toHaveBeenCalledWith('club-123');
  });

  it('5. Сурагчдын Badge жагсаалт зөв зурагдаж байгааг шалгах', () => {
    render(<ClubDetail {...defaultProps} selectedClub={mockClub} />);
    expect(screen.getByText('25LP9878')).toBeInTheDocument();
    expect(screen.getByText('25LP4578')).toBeInTheDocument();
  });

  it('6. Timetable байхгүй үед ажиллах төлөв', () => {
    const clubWithoutTime = { ...mockClub, timetables: [] };
    render(<ClubDetail {...defaultProps} selectedClub={clubWithoutTime} />);
    expect(screen.getByTestId('club-info-grid')).toBeInTheDocument();
  });

  it('7. Клуб түгжигдсэн үеийн logic coverage', () => {
    render(
      <ClubDetail {...defaultProps} selectedClub={mockClub} isLocked={true} />
    );
    expect(screen.getByTestId('action-buttons')).toBeInTheDocument();
  });
});
