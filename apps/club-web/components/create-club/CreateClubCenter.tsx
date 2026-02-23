'use client';

import { useState, useCallback, useMemo } from 'react';
import { cn } from 'lib/utils';
import { ClubForm } from './ClubForm';
import { HeaderSection } from './HeaderSection';
import { FormDataType, CalendarDayProps } from './types';
import { MyClubsList } from '../club-add/PersonalClubs';
import { RequestHistory } from '../club-add/RequestHistory';
import { SystemTip } from '../club-add/SystemTip';
const CalendarDay = ({
  day,
  date,
  isPast,
  isSelected,
  isToday,
  onToggle,
}: CalendarDayProps) => {
  const handleClick = useCallback(() => onToggle(date), [date, onToggle]);

  return (
    <button
      type="button"
      disabled={isPast}
      onClick={handleClick}
      className={cn(
        'h-10 w-10 rounded-xl text-xs font-bold transition-all relative flex items-center justify-center bg-white/5',
        {
          'opacity-10 cursor-not-allowed': isPast,
          'hover:bg-primary/20 text-white/80': !isPast,
          'bg-primary text-white shadow-[0_0_15px_rgba(var(--primary),0.5)]':
            isSelected,
          'border border-primary text-primary': isToday && !isSelected,
        }
      )}
    >
      {day}
      {isSelected && (
        <div className="absolute -top-1 -right-1 h-2 w-2 bg-emerald-500 rounded-full border-2 border-[#0b2b5c]" />
      )}
    </button>
  );
};

export const CreateClubCenter = () => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    goal: '',
    teacher: '',
    time: '13:00',
    duration: '1:30',
    studentEmail: '',
    room: '301',
    maxStudents: '',
    repeat: 'none',
  });

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const handleMonthChange = useCallback((offset: number) => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + offset, 1)
    );
  }, []);

  const toggleDate = useCallback((date: Date) => {
    const dateStr = date.toDateString();
    setSelectedDates((prev) => {
      const exists = prev.find((d) => d.toDateString() === dateStr);
      if (exists) {
        return prev.filter((d) => d.toDateString() !== dateStr);
      }
      return [...prev, date].sort((a, b) => a.getTime() - b.getTime());
    });
  }, []);

  const renderCalendarDays = useCallback(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonthCount = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10" />);
    }

    const todayStr = today.toDateString();

    for (let d = 1; d <= daysInMonthCount; d++) {
      const date = new Date(year, month, d);
      const isSelected = selectedDates.some(
        (sd) => sd.toDateString() === date.toDateString()
      );

      days.push(
        <CalendarDay
          key={d}
          day={d}
          date={date}
          isPast={date < today}
          isSelected={isSelected}
          isToday={todayStr === date.toDateString()}
          onToggle={toggleDate}
        />
      );
    }
    return days;
  }, [currentMonth, selectedDates, today, toggleDate]);

  const onFormSubmit = () => {
    alert(JSON.stringify(formData));
  };

  return (
    <div className="max-w-[1400px] mx-auto p-6 lg:p-10 relative z-10 h-full">
      <HeaderSection
        title="Клуб Нээх"
        subtitle="Шинэ клуб нээх хүсэлт болон хуваарь илгээх."
      />
     <div className='flex gap-20'>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <ClubForm
          formData={formData}
          setFormData={setFormData}
          selectedDates={selectedDates}
          setSelectedDates={setSelectedDates}
          currentMonth={currentMonth}
          handleMonthChange={handleMonthChange}
          renderCalendarDays={renderCalendarDays}
          handleSubmit={onFormSubmit}
          />
      </div>
      <div className="lg:col-span-5 space-y-8">
         <MyClubsList />
         <RequestHistory />
         <SystemTip />
      </div>
    </div>
    </div>
  );
};
