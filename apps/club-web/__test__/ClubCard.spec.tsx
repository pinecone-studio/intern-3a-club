import { render, screen } from '@testing-library/react';
import { ClubCard } from '../app/JoinClub/_components/ClubCard';
import { ExtendedClub } from '../lib/type';
import React from 'react';

const mockClub: ExtendedClub = {
  id: 1,
  name: 'React',
  description: 'Энэ бол React клубын тайлбар',
  status: 'Open',
  instructors: [{ name: 'Багш', role: 'Mentor', image: '/teacher.png' }],
  currentMembers: 13,
  maxMembers: 20,
  schedule: 'Даваа, Лхагва',
  time: '18:00-20:00',
  class: '401-р өрөө',
  image: '/react-club.jpg',
  isEnrolled: true,
  enrolledStudents: ['STU013'],
  bannedUntil: 0,
};

describe('ClubCard', () => {
  it('Хэрэглэгч бүртгүүлсэн үед "ИДЭВХТЭЙ" статус харагдах ёстой', () => {
    render(<ClubCard club={mockClub} isSelected={false} onClick={jest.fn()} />);

    const badge = screen.getByText(/ИДЭВХТЭЙ/i);
    expect(badge).toBeInTheDocument();
  });
});
