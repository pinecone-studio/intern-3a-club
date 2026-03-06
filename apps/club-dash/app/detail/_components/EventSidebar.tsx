import { format } from 'date-fns';
import { CalendarEvent } from '../hook/useCalendarEvents';

type Props = {
  selectedDate: Date;
  selectedEvent: CalendarEvent | null;
  selectedEvents: CalendarEvent[];
};

// eslint-disable-next-line complexity
export const EventSidebar = ({
  selectedDate,
  selectedEvent,
  selectedEvents,
}: Props) => {
  return (
    <aside className="rounded-xl border bg-card p-4 h-fit">
      <h3 className="text-sm font-semibold mb-3">
        {format(selectedDate, 'yyyy-MM-dd')}
      </h3>

      {selectedEvents.length === 0 && (
        <p className="text-xs text-muted-foreground">
          Энэ өдөр клубын хуваарь алга.
        </p>
      )}

      {selectedEvents.length > 0 && (
        <div className="space-y-2">
          {selectedEvents.map((event) => (
            <div key={event.timetableId} className="rounded border p-2 text-xs">
              <p className="font-medium">{event.clubName}</p>

              <p className="text-muted-foreground">
                {event.clubStartTime} • {event.room}
              </p>
            </div>
          ))}
        </div>
      )}

      {selectedEvent && (
        <div className="border-t pt-3 mt-3">
          <p className="text-xs text-muted-foreground">Selected Club</p>

          <p className="font-semibold text-sm">{selectedEvent.clubName}</p>
        </div>
      )}
    </aside>
  );
};
