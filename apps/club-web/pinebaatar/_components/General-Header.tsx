"use client"

import { Bell, Clock, User } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur-sm">
      {/* Left Navigation */}
      <nav className="flex items-center gap-6">
        <a href="/" className="text-sm font-medium text-foreground hover:text-primary">
          Home
        </a>
        <a href="/projects" className="text-sm font-medium text-muted-foreground hover:text-foreground">
          Projects
        </a>
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Fire/Streak */}
        <div className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5">
          <span className="text-orange-500">🔥</span>
          <span className="text-sm font-medium text-foreground">153</span>
        </div>

        {/* Coins */}
        <div className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs">+</span>
          <span className="text-sm font-medium text-foreground">466</span>
        </div>

        {/* XP Progress */}
        <div className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">8</span>
          <span className="text-sm font-medium text-foreground">
            5392<span className="text-muted-foreground">/5330XP</span>
          </span>
        </div>

        {/* History */}
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground">
          <Clock className="h-5 w-5" />
        </button>

        {/* Notifications */}
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            1
          </span>
        </button>

        {/* Profile */}
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground">
          <User className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
