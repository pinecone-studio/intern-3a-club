import { X } from 'lucide-react';

export const SelectedDatesList = ({
  dates,
  onRemove,
}: {
  dates: Date[];
  onRemove: (d: Date) => void;
}) => (
  <div className="flex flex-wrap gap-2 max-h-[140px] overflow-y-auto pr-2 scrollbar-hide">
    {dates
      .sort((a, b) => a.getTime() - b.getTime())
      .map((date) => (
        <span
          key={date.getTime()}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/10 border border-primary/20 text-[10px] text-white"
        >
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
            onClick={() => onRemove(date)}
          />
        </span>
      ))}

    {dates.length === 0 && (
      <p className="text-[10px] text-white/10 italic">Өдөр сонгогдоогүй...</p>
    )}
  </div>
);
