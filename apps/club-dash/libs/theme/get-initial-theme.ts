import { resolveThemeKey } from './theme-map';

export const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';

  const stored = localStorage.getItem('pinebaatar-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return resolveThemeKey(stored, prefersDark);
};
