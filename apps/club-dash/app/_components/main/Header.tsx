'use client';

import { Bell, Moon, Sun, User } from 'lucide-react';
import { useEffect, useState } from 'react';

export function DashboardHeader() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored =
      typeof window !== 'undefined'
        ? window.localStorage.getItem('pinebaatar-theme')
        : null;
    const preferredDark =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const nextTheme =
      stored === 'dark' || stored === 'light'
        ? stored
        : preferredDark
        ? 'dark'
        : 'light';

    setTheme(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    window.localStorage.setItem('pinebaatar-theme', nextTheme);
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur-sm">
      {/* Left Navigation */}
      <nav className="flex items-center gap-6">
        <a
          href="/"
          className="text-sm font-medium text-foreground hover:text-primary"
        >
          Home
        </a>
        <a
          href="/projects"
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Projects
        </a>
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* <div className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5">
          <span className="text-orange-500">🔥</span>
          <span className="text-sm font-medium text-foreground">0</span>
        </div>

        <div className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs">
            +
          </span>
          <span className="text-sm font-medium text-foreground">466</span>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
            8
          </span>
          <span className="text-sm font-medium text-foreground">
            5392<span className="text-muted-foreground">/5330XP</span>
          </span>
        </div>

        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground">
          <Clock className="h-5 w-5" />
        </button> */}

        <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-[10px] font-bold text-background">
            1
          </span>
        </button>
        <button
          onClick={toggleTheme}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>
        {/* Profile */}
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground">
          <User className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
