"use client"

import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CalendarHeaderProps {
  currentMonth: Date;
  onMonthChange: (offset: number) => void;
}

export const CalendarHeader = ({ currentMonth, onMonthChange }: CalendarHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-2">
      <button 
        type="button" 
        onClick={() => onMonthChange(-1)} 
        className="p-2 rounded-lg bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all"
      >
        <ChevronLeft size={20} />
      </button>
      
      <span className="text-[11px] font-black text-white uppercase tracking-[0.2em] font-mono italic">
        {currentMonth.toLocaleString('mn-MN', { month: 'long', year: 'numeric' })}
      </span>
      
      <button 
        type="button" 
        onClick={() => onMonthChange(1)} 
        className="p-2 rounded-lg bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}