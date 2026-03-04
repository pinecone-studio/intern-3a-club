import { render } from '@testing-library/react';
import { ClubListSkeleton } from '../../app/JoinClub/_components/ClubListSkeleton';

describe('ClubListSkeleton', () => {
  it('renders without crashing', () => {
    const { container } = render(<ClubListSkeleton />);
    expect(container.firstChild).toBeTruthy();
  });

  it('renders exactly 4 skeleton card items', () => {
    const { container } = render(<ClubListSkeleton />);
    const pulseCards = container.querySelectorAll('[class*="animate-pulse"]');
    expect(pulseCards.length).toBe(4);
  });

  it('each skeleton card has a title placeholder and a badge placeholder', () => {
    const { container } = render(<ClubListSkeleton />);
    const cards = container.querySelectorAll(
      '[class*="rounded-xl"][class*="border"]'
    );
    expect(cards.length).toBe(4);

    cards.forEach((card) => {
      const titleBar = card.querySelector('[class*="w-3/4"]');
      expect(titleBar).toBeTruthy();

      const badgeBar = card.querySelector('[class*="w-12"]');
      expect(badgeBar).toBeTruthy();
    });
  });

  it('each skeleton card has two icon+text row placeholders', () => {
    const { container } = render(<ClubListSkeleton />);
    const cards = container.querySelectorAll(
      '[class*="rounded-xl"][class*="border"]'
    );

    cards.forEach((card) => {
      const iconDots = card.querySelectorAll('[class*="rounded-full"]');
      expect(iconDots.length).toBe(2);
    });
  });

  it('applies the correct outer container classes', () => {
    const { container } = render(<ClubListSkeleton />);
    const outer = container.firstChild as HTMLElement;
    expect(outer.className).toMatch(/w-full/);
    expect(outer.className).toMatch(/flex-col/);
  });
});
