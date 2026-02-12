import { render, screen, fireEvent } from '@testing-library/react';
import JoinClubPage from '../app/JoinClub/page';
import React from 'react';
import * as mockDataModule from '../lib/mockdata';

jest.mock('../lib/mockdata', () => ({
  __esModule: true,
  clubs: [
    {
      id: 1,
      name: 'Test Club',
      status: 'Open',
      currentMembers: 10,
      description: 'D1',
      schedule: 'Mon',
      location: 'L1',
      image: '/t1.jpg',
      tags: ['T1'],
      members: [],
    },
    {
      id: 2,
      name: 'Second Club',
      status: 'Closed',
      currentMembers: 5,
      description: 'D2',
      schedule: 'Tue',
      location: 'L2',
      image: '/t2.jpg',
      tags: ['T2'],
      members: [],
    },
  ],
}));

jest.mock('../app/JoinClub/_components/ClubCard', () => ({
  ClubCard: ({ onClick, club }: { onClick: (_id: number) => void; club: { id: number; name: string } }) => (
    <div>
      <div onClick={() => onClick(club.id)} role="button">
        {club.name}
      </div>
      <button onClick={() => onClick(-9999)} data-testid="force-invalid-selection">
        Force Invalid
      </button>
    </div>
  ),
}));

describe('JoinClubPage Full Coverage', () => {
  it('should cover line 11 (initial state) and club selection', () => {
    render(<JoinClubPage />);

    // Эхний клуб автоматаар сонгогдсон байх ёстой (Line 11 coverage)
    const firstClubTitle = screen.getAllByText(/Test Club/i);
    expect(firstClubTitle.length).toBeGreaterThan(0);

    // Клуб солих
    const clubCards = screen.getAllByRole('button');
    fireEvent.click(clubCards[1]);

    // Multiple elements error засах: Хэд хэдэн "Second Club" байгаа тул getAll ашиглах
    const selectedTitles = screen.getAllByText(/Second Club/i);
    expect(selectedTitles[0]).toBeInTheDocument();
  });

  it('should cover enroll and leave logic', async () => {
    render(<JoinClubPage />);

    // Бүртгүүлэх
    const enrollBtn = screen.getByRole('button', { name: /Одоо нэгдэх/i });
    fireEvent.click(enrollBtn);

    // Гарах
    const leaveBtn = await screen.findByRole('button', {
      name: /Клубээс гарах/i,
    });
    fireEvent.click(leaveBtn);

    expect(screen.getByText(/Одоо нэгдэх/i)).toBeInTheDocument();
  });

  it('should cover line 82 (EmptyState fallback)', () => {
    // mockData-г түр хугацаанд хоосон болгох
    const originalClubs = mockDataModule.clubs;
    Object.defineProperty(mockDataModule, 'clubs', {
      value: [],
      configurable: true,
    });

    render(<JoinClubPage />);
    // Line 82: selectedClub байхгүй үед EmptyState харагдах ёстой
    expect(screen.getByText(/Клуб сонгоно уу/i)).toBeInTheDocument();

    Object.defineProperty(mockDataModule, 'clubs', { value: originalClubs });
  });

  it('should cover line 82 (EmptyState fallback inside the main layout) properly', () => {
    // 1. Render page with valid data (mocked above)
    render(<JoinClubPage />);

    // 2. Click the special "Force Invalid" button injected by our ClubCard mock
    // This calls onClick(-9999), setting selectedId to -9999.
    const forceBtns = screen.getAllByTestId('force-invalid-selection');
    fireEvent.click(forceBtns[0]);

    // 3. Verify EmptyState is rendered
    expect(screen.getByText(/Клуб сонгоно уу/i)).toBeInTheDocument();
  });
});
