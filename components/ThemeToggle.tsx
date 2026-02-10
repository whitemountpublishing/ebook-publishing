'use client';

import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className='btn'
      style={{
        padding: '0.5rem',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
        fontSize: '1.2rem',
        cursor: 'pointer',
      }}
      aria-label='Toggle Theme'
    >
      {resolvedTheme === 'light' ? '🌙' : resolvedTheme === 'dark' ? '☀️' : '🌓'}
    </button>
  );
}

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
