'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // Sync with localStorage and system preference on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      let isDark = false;
      if (saved === 'dark') isDark = true;
      else if (saved === 'light') isDark = false;
      else isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDark(isDark);
      document.documentElement.classList.toggle('dark', isDark);
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="ml-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 transition"
    >
      {dark ? (
        <span title="Switch to light mode" role="img" aria-label="Light mode">
          🌞
        </span>
      ) : (
        <span title="Switch to dark mode" role="img" aria-label="Dark mode">
          🌙
        </span>
      )}
    </button>
  );
}
