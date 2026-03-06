import { CalendarEvent } from '../hook/useCalendarEvents';

type Props = {
  event: CalendarEvent;
};

export const EventItem = ({ event }: Props) => {
  return (
    <div className="rounded border px-2 py-1 text-[11px] border-primary/40 bg-primary/10">
      <p className="font-medium leading-tight line-clamp-1">{event.clubName}</p>
      <p className="text-muted-foreground leading-tight">
        {event.clubStartTime}
      </p>
    </div>
  );
};
