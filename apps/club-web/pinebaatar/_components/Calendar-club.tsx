"use client"

import React, { useEffect, useCallback } from 'react'
import { CalendarDays, RotateCcw as ResetIcon } from 'lucide-react'
import { CalendarHeader } from './Calendar-Header';
import { SelectedDatesList } from './Selected-Dates-List';
import { LogisticsForm } from './Logistics-Form';

interface LogisticsSectionProps {
  formData: any;
  setFormData: (data: any) => void;
  selectedDates: Date[];
  setSelectedDates: (dates: Date[]) => void;
  currentMonth: Date;
  handleMonthChange: (offset: number) => void;
  renderCalendarDays: () => React.ReactNode;
}

export const LogisticsSection = (props: LogisticsSectionProps) => {
  const { formData, setFormData, selectedDates, setSelectedDates, currentMonth } = props;

  // Логик: Давтамж тооцоолох
  const calculateRecurrence = useCallback((baseDates: Date[], mode: string, monthDate: Date) => {
    if (mode === 'none') return baseDates;
    const year = monthDate.getFullYear(), month = monthDate.getMonth();
    const today = new Date(); today.setHours(0,0,0,0);

    const sourceDates = baseDates.length > 0 ? baseDates : [new Date(today)];
    const weekDays = Array.from(new Set(sourceDates.map(d => d.getDay())));
    const dayNumbers = Array.from(new Set(sourceDates.map(d => d.getDate())));
    const anchorDate = [...sourceDates].sort((a, b) => a.getTime() - b.getTime())[0];

    const newDates: Date[] = [];
    const tempDate = new Date(year, month, 1);

    while (tempDate.getMonth() === month) {
      if (tempDate >= today) {
        if (mode === 'weekly' && weekDays.includes(tempDate.getDay())) newDates.push(new Date(tempDate));
        else if (mode === 'biweekly' && weekDays.includes(tempDate.getDay())) {
          const diff = Math.ceil(Math.abs(tempDate.getTime() - anchorDate.getTime()) / 86400000);
          if (diff % 14 === 0) newDates.push(new Date(tempDate));
        }
        else if (mode === 'monthly' && dayNumbers.includes(tempDate.getDate())) newDates.push(new Date(tempDate));
      }
      tempDate.setDate(tempDate.getDate() + 1);
    }
    return newDates;
  }, []);

  useEffect(() => {
    if (formData.repeat !== 'none' && selectedDates.length === 0) {
      const updated = calculateRecurrence(selectedDates, formData.repeat, currentMonth);
      setSelectedDates(updated);
    }
  }, [formData.repeat, currentMonth, calculateRecurrence, setSelectedDates]);

  return (
    <div className="p-8 rounded-[2.5rem] bg-black/30 border border-white/5 space-y-8">
      <header className="flex items-center justify-between border-b border-white/5 pb-4">
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary flex items-center gap-2">
          <CalendarDays size={16} /> Хуваарь ба Логистик
        </h4>
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold text-emerald-400 italic uppercase">
            {selectedDates.length} өдөр сонгосон
          </span>
          <button onClick={() => {setSelectedDates([]); setFormData({...formData, repeat: 'none'})}} className="p-1.5 rounded-lg bg-white/5 text-white/40 hover:text-red-400 transition-all">
            <ResetIcon size={14} />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <CalendarHeader currentMonth={currentMonth} onMonthChange={props.handleMonthChange} />
          <div className="grid grid-cols-7 gap-1 text-center">
            {['Ня', 'Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя'].map(day => (
              <div key={day} className="text-[9px] font-black text-white/20 uppercase py-2">{day}</div>
            ))}
            {props.renderCalendarDays()}
          </div>
          <SelectedDatesList dates={selectedDates} onRemove={(d) => setSelectedDates(selectedDates.filter(x => x !== d))} />
        </div>

        <LogisticsForm 
          formData={formData} 
          setFormData={setFormData} 
          onRepeatChange={(val: string) => setSelectedDates(calculateRecurrence(selectedDates, val, currentMonth))}
        />
      </div>
    </div>
  )
}