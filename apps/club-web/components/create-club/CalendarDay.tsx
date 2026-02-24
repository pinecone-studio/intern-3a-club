import { useCallback } from 'react';
import { CalendarDayProps } from './types';
import { cn } from 'lib/utils';

export const CalendarDay = ({
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
