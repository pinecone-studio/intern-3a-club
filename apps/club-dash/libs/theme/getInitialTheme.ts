export const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';

  const stored = localStorage.getItem('pinebaatar-theme');
  if (stored === 'dark' || stored === 'light') return stored;

  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDark) return 'dark';

  return 'light';
};
