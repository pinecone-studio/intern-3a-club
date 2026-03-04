'use client';

import Link from 'next/link';
import { Flame, Star, Bell, RotateCcw, User } from 'lucide-react';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  useClerk,
} from '@clerk/nextjs';

export const Header = () => {
  const { signOut } = useClerk();

  const handleSafeSignOut = async () => {
    const unstableWindow = window as Window & {
      __unstable__onBeforeSetActive?: unknown;
      __unstable__onAfterSetActive?: unknown;
    };

    unstableWindow.__unstable__onBeforeSetActive = undefined;
    unstableWindow.__unstable__onAfterSetActive = undefined;

    await signOut({ redirectUrl: '/' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050816]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-10">
          <div className="h-8 w-8  flex items-center justify-center">
            <div className="flex items-center lg:gap-6">
              <svg
                width="32"
                height="28"
                viewBox="0 0 32 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-auto hover:opacity-80 transition-opacity"
              >
                <g id="Logo">
                  <g id="Vector">
                    {/* Зүүн талын хаалт */}
                    <path
                      d="M5.11038 2.76848L0.806264 10.8246C0.269142 11.8328 0 12.9394 0 14.0474C0 15.1556 0.269142 16.2619 0.806264 17.2702L5.11038 25.3265C5.9037 26.8145 7.45516 27.7439 9.14352 27.7439H13.7153V25.4617H13.7138C12.8704 25.4617 12.0946 24.9977 11.6979 24.2538L7.39543 16.196C7.03585 15.5243 6.85665 14.7867 6.85665 14.0474C6.85665 13.3081 7.03585 12.5705 7.39543 11.899L11.6979 3.84121C12.0946 3.09711 12.8704 2.63325 13.7138 2.63325H13.7153V0.350922H9.14352C7.45516 0.350922 5.9037 1.28046 5.11038 2.76848Z"
                      fill="currentColor"
                    />
                    {/* Баруун талын хаалт */}
                    <path
                      d="M31.1937 10.8247L26.8898 2.76854C26.0963 1.28036 24.545 0.350981 22.8567 0.350981H18.2847V2.63315H18.2864C19.1298 2.63315 19.9055 3.09717 20.3021 3.8411L24.6046 11.8989C24.9643 12.5705 25.1432 13.3082 25.1432 14.0475C25.1432 14.7867 24.9643 15.5244 24.6046 16.1961L20.3021 24.2537C19.9055 24.9977 19.1298 25.4616 18.2864 25.4616H18.2847V27.7439H22.8567C24.545 27.7439 26.0963 26.8146 26.8898 25.3264L31.1937 17.2703C31.7307 16.262 32 15.1555 32 14.0475C32 12.9394 31.7307 11.8329 31.1937 10.8247Z"
                      fill="currentColor"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>

          <nav className="flex items-center gap-8 text-ls font-medium text-white">
            <Link href="/" className="transition">
              Home
            </Link>
            <Link href="/projects" className="transition">
              Projects
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 text-white text-xl">
            <Flame size={28} className="text-pink-500 fill-pink-500" />
            100
          </div>

          <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 text-white text-xl">
            <Star size={28} className="text-yellow-400 fill-yellow-400" />
            882
          </div>

          <div className="flex items-center gap-3 px-4 py-3 rounded-full bg-white/5 text-white text-xl">
            <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">
              7
            </div>
            4344<span className="text-white/40">/4580XP</span>
          </div>

          <button className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition">
            <RotateCcw size={18} className="text-white/60" />
          </button>

          <button className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition">
            <Bell size={18} className="text-white/60" />
          </button>

          <button className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition">
            <User size={18} className="text-white/60" />
          </button>
          <SignedOut>
            <SignInButton />
            <SignUpButton>
              <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <button
              onClick={handleSafeSignOut}
              className="bg-white/10 hover:bg-white/20 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer transition"
            >
              Sign out
            </button>
          </SignedIn>
        </div>
      </div>
    </header>
  );
};
