import { render, screen } from '@testing-library/react';
import { ClubCard } from '../app/JoinClub/_components/ClubCard';
import { Club } from '../lib/type';

const mockClub: Club = {
  id: 1,
  name: 'React',
  description: 'Энэ бол React клубын тайлбар', // Алдаа засах нэмэлт талбар
  status: 'Open', // Алдаа засах нэмэлт талбар
  instructors: [
    // Алдаа засах нэмэлт талбар
    { name: 'Багш', role: 'Mentor', image: '' },
  ],
  currentMembers: 13,
  maxMembers: 20,
  schedule: 'Даваа, Лхагва',
  time: '18:00-20:00',
  class: '401-р өрөө',
  isEnrolled: true,
  enrolledStudents: ['STU013'],
};

describe('ClubCard', () => {
  it('Хэрэглэгч бүртгүүлсэн үед "ИДЭВХТЭЙ" статус харагдах ёстой', () => {
    // Props-оор дамжуулахдаа одоо алдаа заахгүй
    render(<ClubCard club={mockClub} isSelected={false} onClick={() => {}} />);

    const badge = screen.getByText(/ИДЭВХТЭЙ/i);
    expect(badge).toBeInTheDocument();
  });
});

// npx nx test club-web --codeCoverage
