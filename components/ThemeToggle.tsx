'use client';

import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  if (!resolvedTheme) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className='rounded-full focus:outline-none transition-colors aspect-square border-2 border-(--border) bg-(--bg-secondary) text-(--text-main) hover:bg-(--bg-secondary-hover) focus:ring-2 focus:ring-(--primary) focus:ring-offset-2 w-10 h-10'
      aria-label='Toggle Theme'
    >
      {resolvedTheme === 'light' ? '🌙' : resolvedTheme === 'dark' ? '☀️' : '🌓'}
    </button>
  );
}

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
