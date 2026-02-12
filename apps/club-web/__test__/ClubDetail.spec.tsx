import { render, screen } from '@testing-library/react';
import { clubs } from '../lib/mockdata';
import { ClubDetail } from '../app/JoinClub/_components/ClubDetail';

describe('ClubDetail Snapshot & Content', () => {
  const mockClub = clubs[0];

  it('Бүх props-ыг зөв дамжуулж render хийх ёстой', () => {
    render(
      <ClubDetail
        selectedClub={mockClub}
        onEnroll={jest.fn()}
        onLeave={jest.fn()}
        // Алдааг засах нэмэлт props:
        isLocked={false}
        remainingTime={0}
      />
    );

    // Клубын нэр харагдаж байгааг шалгах
    expect(screen.getByText(mockClub.name)).toBeInTheDocument();
  });

  it('Snapshot тест ажиллуулах', () => {
    const { asFragment } = render(
      <ClubDetail
        selectedClub={mockClub}
        onEnroll={jest.fn()}
        onLeave={jest.fn()}
        isLocked={false}
        remainingTime={0}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
