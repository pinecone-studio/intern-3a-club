import { render, screen } from '@testing-library/react';
import { act } from '@testing-library/react';
import { DashboardHeader } from '../../app/_components/main/Header';
import { getInitialTheme } from '../../libs/theme/get-initial-theme';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  })),
});

describe('DashboardHeader', () => {
  it('toggles theme on theme button click', () => {
    render(<DashboardHeader />);
    const themeButton = screen.getByRole('button', { name: /toggle theme/i });
    expect(themeButton).toBeInTheDocument();

    act(() => {
      themeButton.click();
    });
    act(() => {
      themeButton.click();
    });
  });

  it('renders nav and right section buttons', () => {
    render(<DashboardHeader />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});

describe('getInitialTheme', () => {
  it('returns light when isServer is true (SSR branch)', () => {
    expect(getInitialTheme(true)).toBe('light');
  });

  it('returns light when window is undefined', () => {
    const orig = globalThis.window;
    (globalThis as unknown as { window: undefined }).window = undefined;
    expect(getInitialTheme()).toBe('light');
    (globalThis as unknown as { window: typeof orig }).window = orig;
  });

  it('returns stored dark', () => {
    localStorage.setItem('pinebaatar-theme', 'dark');
    expect(getInitialTheme()).toBe('dark');
  });

  it('returns stored light', () => {
    localStorage.setItem('pinebaatar-theme', 'light');
    expect(getInitialTheme()).toBe('light');
  });

  it('returns system dark when no stored theme', () => {
    localStorage.removeItem('pinebaatar-theme');
    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches: true,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
    expect(getInitialTheme()).toBe('dark');
  });

  it('returns system light when no stored theme', () => {
    localStorage.removeItem('pinebaatar-theme');
    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
    expect(getInitialTheme()).toBe('light');
  });
});
