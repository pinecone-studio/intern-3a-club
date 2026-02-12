const storedMap = {
  dark: 'dark',
  light: 'light',
} as const;

const prefersMap = {
  true: 'dark',
  false: 'light',
} as const;

export const resolveThemeKey = (
  stored: string | null,
  prefersDark: boolean
): 'dark' | 'light' =>
  storedMap[stored as keyof typeof storedMap] ??
  prefersMap[String(prefersDark) as 'true' | 'false'];
