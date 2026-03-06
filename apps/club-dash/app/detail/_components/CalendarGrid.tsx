import { CalendarWeek } from './CalendarWeek';
import { CalendarEvent } from '../hook/useCalendarEvents';

type Props = {
  weeks: Date[][];
  eventsByDate: Map<string, CalendarEvent[]>;
  onSelect: (_d: Date) => void;
};

export const CalendarGrid = ({ weeks, eventsByDate, onSelect }: Props) => {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section className="rounded-xl border bg-card overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-7 border-b bg-muted/30">
        {dayNames.map((d) => (
          <div key={d} className="px-3 py-2 text-sm font-medium">
            {d}
          </div>
        ))}
      </div>

      {/* Weeks */}
      {weeks.map((week, i) => (
        <CalendarWeek
          key={i}
          week={week}
          eventsByDate={eventsByDate}
          onSelect={onSelect}
        />
      ))}
    </section>
  );
};
