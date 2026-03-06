import { format } from 'date-fns';
import { CalendarEvent } from '../hook/useCalendarEvents';

type Props = {
  day: Date;
  events: CalendarEvent[];
  onSelect: (_d: Date) => void;
};

export const CalendarDay = ({ day, events, onSelect }: Props) => {
  const handleSelect = () => {
    onSelect(day);
  };

  return (
    <button
      onClick={handleSelect}
      className="min-h-[140px] border-r p-2 text-left hover:bg-muted/40"
    >
      <div className="mb-2 flex justify-between">
        <span className="text-sm font-medium">{format(day, 'd')}</span>

        {events.length > 0 && (
          <span className="text-xs text-muted-foreground">{events.length}</span>
        )}
      </div>

      <div className="space-y-1">
        {events.slice(0, 3).map((event) => (
          <div
            key={event.timetableId}
            className="rounded border px-2 py-1 text-[11px] bg-primary/10 border-primary/30"
          >
            <p className="font-medium line-clamp-1">{event.clubName}</p>

            <p className="text-muted-foreground">{event.clubStartTime}</p>
          </div>
        ))}
      </div>
    </button>
  );
};
