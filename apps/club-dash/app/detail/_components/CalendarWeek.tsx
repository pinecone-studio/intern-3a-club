import { CalendarDay } from './CalendarDay';
import { format } from 'date-fns';
import { CalendarEvent } from '../hook/useCalendarEvents';

type Props = {
  week: Date[];
  eventsByDate: Map<string, CalendarEvent[]>;
  onSelect: (_d: Date) => void;
};

export const CalendarWeek = ({ week, eventsByDate, onSelect }: Props) => {
  return (
    <div className="grid grid-cols-7 border-b last:border-b-0">
      {week.map((day) => {
        const key = format(day, 'yyyy-MM-dd');
        const events = eventsByDate.get(key) ?? [];

        return (
          <CalendarDay
            key={day.toISOString()}
            day={day}
            events={events}
            onSelect={onSelect}
          />
        );
      })}
    </div>
  );
};
