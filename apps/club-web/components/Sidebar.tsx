'use client';

import Link from 'next/link';
import { ChevronDown, CalendarClock, Settings, LogOut } from 'lucide-react';

export const Sidebar = () => {
  return (
    <aside
      className="
      sticky top-[85px] 
      h-[calc(100vh-85px)] 
      w-[280px] flex-shrink-0
      rounded-2xl
      bg-gradient-to-b from-[#051937] via-[#07254a] to-[#1e3c57]
      text-white flex flex-col px-8 py-10
      z-30
    "
    >
      <div className="flex flex-col gap-8 text-[20px] font-medium">
        <div className="cursor-pointer hover:text-white transition">Home</div>

        <div className="flex items-center justify-between cursor-pointer">
          <span>Academic</span>
          <ChevronDown size={18} className="text-white/70" />
        </div>

        <div className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-4">
            <span>Challenge</span>
            <div className="h-8 w-8 rounded-full bg-[#0d2f5c] flex items-center justify-center text-sm">
              7
            </div>
          </div>
          <ChevronDown size={18} className="text-white/70" />
        </div>

        <div className="flex items-center justify-between cursor-pointer">
          <span>Internship</span>
          <ChevronDown size={18} className="text-white/70" />
        </div>

        <div className="flex items-center justify-between cursor-pointer">
          <span>Career Development</span>
          <ChevronDown size={18} className="text-white/70" />
        </div>

        <div className="flex items-center justify-between cursor-pointer">
          <span>Personal space</span>
          <ChevronDown size={18} className="text-white/70" />
        </div>

        <div className="flex items-center justify-between cursor-pointer">
          <span>Team</span>
          <ChevronDown size={18} className="text-white/70" />
        </div>
        <Link
          href="/JoinClub"
          className="flex items-center justify-between cursor-pointer hover:text-white transition"
        >
          <span>Join club</span>
        </Link>
        <Link
          href="/"
          className="flex items-center justify-between cursor-pointer hover:text-white transition"
        >
          <span>Create club</span>
        </Link>
      </div>

      <div className="mt-auto flex flex-col gap-8 text-[20px] font-medium">
        <div className="flex items-center gap-4 cursor-pointer hover:text-white transition">
          <CalendarClock size={22} />
          Request absence
        </div>

        <div className="flex items-center gap-4 cursor-pointer hover:text-white transition">
          <Settings size={22} />
          Settings
        </div>

        <div className="flex items-center gap-4 cursor-pointer hover:text-white transition">
          <LogOut size={22} />
          Sign Out
        </div>
      </div>
    </aside>
  );
};
