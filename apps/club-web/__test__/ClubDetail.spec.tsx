import React from 'react';
import { render, screen } from '@testing-library/react';
import { useClubAction } from '../app/_hooks/use-redis-hook';
import { ClubDetail } from '../app/JoinClub/_components/ClubDetail';
import { ExtendedClub } from '../lib/type';

// 1. External dependencies-ийг Mock хийх
jest.mock('../app/_hooks/use-redis-hook');
jest.mock('../app/JoinClub/_components/ClubActionButton', () => ({
  ClubActionButtons: jest.fn(({ remainingTime }) => (
    <div data-testid="club-action-buttons" data-time={remainingTime} />
  )),
}));
jest.mock('../app/JoinClub/_components/ClubInfoGrid', () => ({
  ClubInfoGrid: () => <div data-testid="club-info-grid" />,
}));
jest.mock('lucide-react', () => ({
  ShieldCheck: () => <div data-testid="shield-check" />,
}));

const mockUseClubAction = jest.mocked(useClubAction);

// 2. Mock Data бэлдэх
const mockClub = {
  id: 'club-1',
  name: 'Test Club',
  description: 'Test description',
  type: 'Premium',
  status: 'ACTIVE',
  teacherId: 'teacher-1',
  isEnrolled: false,
} as ExtendedClub;

const mockTeachers = [
  {
    id: 'teacher-1',
    firstName: 'Болд',
    lastName: 'Баатар',
    profilePicture: '',
  },
];

const defaultProps = {
  userId: 'user-1',
  allTeachers: mockTeachers,
  onEnrollSuccess: jest.fn(),
  onLeaveSuccess: jest.fn(),
};

const defaultHookReturn = {
  remainingTime: 100,
  banned: false,
  loading: false,
  handleEnroll: jest.fn(),
  handleLeave: jest.fn(),
};

describe('ClubDetail Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseClubAction.mockReturnValue(defaultHookReturn);
  });

  // --- 39 болон 45-р мөрийн coverage-ийг хангах логик ---
  describe('Edge Case Logic (Coverage for Line 39 & 45)', () => {
    it('remainingTime нь null байх үед 0-ийг буцаана (Line 45)', () => {
      mockUseClubAction.mockReturnValue({
        ...defaultHookReturn,
        remainingTime: null,
      });
      render(<ClubDetail {...defaultProps} selectedClub={mockClub} />);
      const actionButtons = screen.getByTestId('club-action-buttons');
      expect(actionButtons.getAttribute('data-time')).toBe('0');
    });

    it('багш олдохгүй үед fallback утга ажиллана (Line 39)', () => {
      // Клубын teacherId-тай таарах багш байхгүй үе
      render(
        <ClubDetail
          {...defaultProps}
          selectedClub={{ ...mockClub, teacherId: 'wrong-id' }}
        />
      );
      expect(screen.getByText('Багш тодорхойгүй')).toBeInTheDocument();
      expect(screen.getByText('T')).toBeInTheDocument(); // Fallback avatar
    });

    it('allTeachers prop ирээгүй үед (undefined) Line 39-ийн branch-ийг шалгана', () => {
      render(
        <ClubDetail
          {...defaultProps}
          allTeachers={undefined as any}
          selectedClub={mockClub}
        />
      );
      expect(screen.getByText('Багш тодорхойгүй')).toBeInTheDocument();
    });
  });

  // --- Бусад функциональ тестүүд ---
  describe('Rendering Logic', () => {
    it('клуб сонгоогүй үед заавар текст харуулна', () => {
      render(<ClubDetail {...defaultProps} selectedClub={undefined} />);
      expect(screen.getByText('Клуб сонгоно уу')).toBeInTheDocument();
    });

    it('багшийн нэр болон нэрийн эхний үсгийг зөв харуулна', () => {
      render(<ClubDetail {...defaultProps} selectedClub={mockClub} />);
      expect(screen.getByText('Болд Баатар')).toBeInTheDocument();
      expect(screen.getByText('Б')).toBeInTheDocument();
    });

    it('багшийн firstName хоосон үед "T" харуулна', () => {
      const emptyTeacher = [
        { id: 'teacher-1', firstName: '', lastName: '', profilePicture: '' },
      ];
      render(
        <ClubDetail
          {...defaultProps}
          allTeachers={emptyTeacher}
          selectedClub={mockClub}
        />
      );
      expect(screen.getByText('T')).toBeInTheDocument();
    });

    it('selectedClub.type байхгүй үед Premium гэж харуулна', () => {
      render(
        <ClubDetail
          {...defaultProps}
          selectedClub={{ ...mockClub, type: undefined as any }}
        />
      );
      expect(screen.getByText('Premium')).toBeInTheDocument();
    });
  });

  describe('Hook Integration', () => {
    it('useClubAction-ийг зөв параметртэй дуудна', () => {
      render(<ClubDetail {...defaultProps} selectedClub={mockClub} />);
      expect(mockUseClubAction).toHaveBeenCalledWith(
        expect.objectContaining({
          clubid: 'club-1',
          userid: 'user-1',
        })
      );
    });
  });
});
