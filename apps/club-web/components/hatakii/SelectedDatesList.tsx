'use client';

import React from 'react';
import { X } from 'lucide-react';

// 1. Inline type-ийг болиулж тусад нь interface зарлав
interface SelectedDateItemProps {
  date: Date;
  onRemove: (_date: Date) => void;
}

// 2. Map доторх элементийг тусад нь компонент болгов
// Ингэснээр onClick handler-ийг цэвэрхэн шийдэж болно
const SelectedDateItem = ({ date, onRemove }: SelectedDateItemProps) => {
  const handleRemove = () => onRemove(date);

  return (
    <span className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/10 border border-primary/20 text-[10px] text-white">
      <span className="text-primary font-black">
        {date.toLocaleDateString('mn-MN', {
          month: 'short',
          day: 'numeric',
        })}
      </span>
      <span className="opacity-40 border-l border-white/10 pl-2">
        {date.toLocaleDateString('mn-MN', { weekday: 'short' })}
      </span>
      <X
        size={12}
        className="cursor-pointer hover:text-red-400"
        onClick={handleRemove}
      />
    </span>
  );
};

interface SelectedDatesListProps {
  dates: Date[];
  onRemove: (_date: Date) => void; // d-г _date болгож өөрчлөв
}

export const SelectedDatesList = ({
  dates,
  onRemove,
}: SelectedDatesListProps) => {
  // Sort хийх логикийг JSX дотор биш тусад нь гаргах нь зөв
  const sortedDates = [...dates].sort((a, b) => a.getTime() - b.getTime());

  return (
    <div className="flex flex-wrap gap-2 max-h-[140px] overflow-y-auto pr-2 scrollbar-hide">
      {sortedDates.map((date) => (
        <SelectedDateItem
          key={date.getTime()}
          date={date}
          onRemove={onRemove}
        />
      ))}

      {dates.length === 0 && (
        <p className="text-[10px] text-white/10 italic">Өдөр сонгогдоогүй...</p>
      )}
    </div>
  );
};
