import { render, screen, fireEvent } from '@testing-library/react';
import { ClubDetail } from '../app/JoinClub/_components/ClubDetail';
import React from 'react';
import { ExtendedClub } from '../lib/type';

// 1. Mock компонентуудын төрлийг (Props) тодорхойлох
interface MockActionProps {
  onEnroll: (_id: string) => void;
  onLeave: (_id: string) => void;
  isEnrolled: boolean;
  isLocked: boolean;
  status: string;
  remainingTime: number;
}

// ClubActionButtons-ийг mock хийх (Мөр 116-125 орчимд дуудагдаж буй логик)
jest.mock('./ClubActionButton', () => ({
  ClubActionButtons: ({ onEnroll, onLeave, isEnrolled }: MockActionProps) => (
    <div>
      {!isEnrolled ? (
        <button
          onClick={() => onEnroll('830b09d2-1fa9-4ecc-b2e8-024dea389584')}
        >
          Одоо нэгдэх
        </button>
      ) : (
        <button onClick={() => onLeave('830b09d2-1fa9-4ecc-b2e8-024dea389584')}>
          Клубээс гарах
        </button>
      )}
    </div>
  ),
}));

// ClubInfoGrid-ийг mock хийх (Мөр 98-103 орчимд дуудагдаж буй логик)
jest.mock('./ClubInfoGrid', () => ({
  ClubInfoGrid: ({ club }: { club: ExtendedClub }) => (
    <div data-testid="info-grid">Room: {club.timetables?.[0]?.room}</div>
  ),
}));

// Framer Motion-ийг төрөлтэйгээр mock хийх (Анимацын алдаанаас сэргийлнэ)
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, key }: { children: React.ReactNode; key?: string }) => (
      <div key={key}>{children}</div>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

describe('ClubDetail 100% Coverage (Lines 26-117)', () => {
  const mockClubData: ExtendedClub = {
    id: '830b09d2-1fa9-4ecc-b2e8-024dea389584',
    name: 'shine shine',
    description: 'Тест зорилго',
    status: 'approved',
    teacherId: 'Багш А',
    type: 'mentor',
    minMember: 5,
    maxMember: 20,
    isEnrolled: false,
    bannedUntil: 0,
    timetables: [
      {
        id: '921a28f8-f299-41a5-9b83-aacbf5f0868d',
        clubId: '830b09d2-1fa9-4ecc-b2e8-024dea389584',
        date: '2026-03-05',
        room: '301',
        clubStartTime: '13:00',
        duration: 90,
      },
    ],
  };

  const mockOnEnroll = jest.fn();
  const mockOnLeave = jest.fn();

  it('Клуб сонгоогүй үеийн fallback төлөвийг шалгах (Мөр 26-31)', () => {
    render(
      <ClubDetail
        selectedClub={undefined}
        onEnroll={mockOnEnroll}
        onLeave={mockOnLeave}
        isLocked={false}
        remainingTime={0}
      />
    );
    expect(screen.getByText(/Клуб сонгоно уу/i)).toBeInTheDocument();
  });

  it('Клубын дэлгэрэнгүй мэдээллийг зөв харуулж байна (Мөр 58-112)', () => {
    render(
      <ClubDetail
        selectedClub={mockClubData}
        onEnroll={mockOnEnroll}
        onLeave={mockOnLeave}
        isLocked={false}
        remainingTime={0}
      />
    );

    // Нэр, зорилго, багш харагдаж буйг шалгах
    expect(screen.getByText(/shine shine/i)).toBeInTheDocument();
    expect(screen.getByText(/Тест зорилго/i)).toBeInTheDocument();
    expect(screen.getByText(/Багш А/i)).toBeInTheDocument();

    // Сурагчийн ID-нууд рендерлэгдэж буйг шалгах (Мөр 108-112)
    expect(screen.getByText('25LP9878')).toBeInTheDocument();
  });

  it('handleEnroll болон handleLeave үйлдлүүдийг шалгах (Мөр 33-41)', () => {
    const { rerender } = render(
      <ClubDetail
        selectedClub={mockClubData}
        onEnroll={mockOnEnroll}
        onLeave={mockOnLeave}
        isLocked={false}
        remainingTime={0}
      />
    );

    // Нэгдэх үйлдэл (handleEnroll)
    const enrollBtn = screen.getByText(/Одоо нэгдэх/i);
    fireEvent.click(enrollBtn);
    expect(mockOnEnroll).toHaveBeenCalledWith(mockClubData.id);

    // Төлөв солигдох үед (isEnrolled: true)
    const enrolledClub = { ...mockClubData, isEnrolled: true };
    rerender(
      <ClubDetail
        selectedClub={enrolledClub}
        onEnroll={mockOnEnroll}
        onLeave={mockOnLeave}
        isLocked={false}
        remainingTime={0}
      />
    );

    // Гарах үйлдэл (handleLeave)
    const leaveBtn = screen.getByText(/Клубээс гарах/i);
    fireEvent.click(leaveBtn);
    expect(mockOnLeave).toHaveBeenCalledWith(mockClubData.id);
  });
});
