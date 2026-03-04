import { render } from '@testing-library/react';
import { ClubDetailSkeleton } from '../../app/JoinClub/_components/ClubDetailSkeleton';

describe('ClubDetailSkeleton', () => {
  it('renders without crashing', () => {
    const { container } = render(<ClubDetailSkeleton />);
    expect(container.firstChild).toBeTruthy();
  });

  it('has animate-pulse on the root element', () => {
    const { container } = render(<ClubDetailSkeleton />);
    const root = container.firstChild as HTMLElement;
    expect(root.className).toMatch(/animate-pulse/);
  });

  it('renders the header title placeholder', () => {
    const { container } = render(<ClubDetailSkeleton />);
    const header = container.querySelector('header');
    expect(header).toBeTruthy();
    const titleBar = header!.querySelector('[class*="h-7"]');
    expect(titleBar).toBeTruthy();
  });

it('renders the owner/profile row with avatar and text lines', () => {
  const { container } = render(<ClubDetailSkeleton />);
  const avatar = container.querySelector(
    '[class*="rounded-full"][class*="h-8"]'
  );
  expect(avatar).toBeTruthy();

  const ownerRow = avatar!.closest('[class*="rounded-2xl"]');
  expect(ownerRow).toBeTruthy();
  const textLines = ownerRow!.querySelectorAll('[class*="space-y-2"] > div');
  expect(textLines.length).toBe(2);
});

  it('renders the description block with 3 lines', () => {
    const { container } = render(<ClubDetailSkeleton />);
    const descBlock = container.querySelector('[class*="border-l"]');
    expect(descBlock).toBeTruthy();
    const lines = descBlock!.querySelectorAll('[class*="h-3"]');
    expect(lines.length).toBe(3);
  });

  it('renders a 2-column stats grid', () => {
    const { container } = render(<ClubDetailSkeleton />);
    const grid = container.querySelector('[class*="grid-cols-2"]');
    expect(grid).toBeTruthy();
    const cells = grid!.children;
    expect(cells.length).toBe(2);
  });

  it('renders a wide banner placeholder below the grid', () => {
    const { container } = render(<ClubDetailSkeleton />);
    const banner = container.querySelector('[class*="h-24"]');
    expect(banner).toBeTruthy();
  });

  it('renders a CTA button placeholder at the bottom', () => {
    const { container } = render(<ClubDetailSkeleton />);
    const cta = container.querySelector('[class*="h-12"]');
    expect(cta).toBeTruthy();
  });

  it('applies rounded-3xl and bg-white/5 to the root', () => {
    const { container } = render(<ClubDetailSkeleton />);
    const root = container.firstChild as HTMLElement;
    expect(root.className).toMatch(/rounded-3xl/);
  });
});
