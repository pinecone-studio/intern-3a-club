'use client';

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import { getInitialTheme } from '../../../libs/theme/get-initial-theme';
import { Bell, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export const DashboardHeader = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const next = getInitialTheme();
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    (window as any).__unstable__onBeforeSetActive = undefined;
    (window as any).__unstable__onAfterSetActive = undefined;
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
        {/* <button className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground">
          <User className="h-5 w-5" />
        </button> */}
        <SignedOut>
          <SignInButton mode="modal" />
          <SignUpButton>
            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/?signed_out=1" />
        </SignedIn>
      </div>
    </header>
  );
};
