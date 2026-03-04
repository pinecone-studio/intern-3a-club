import { Club } from '../../../../../libs/types';

function getDescription(req: Club) {
  return req.description ?? '';
}
function getScheduleTime(primary: Club['timetables'][0]) {
  return primary?.clubStartTime ?? '-';
}
function getScheduleRoom(primary: Club['timetables'][0]) {
  return primary?.room ?? '-';
}
function getScheduleStartdate(primary: Club['timetables'][0]) {
  return primary?.date ?? '-';
}
function getHeaderDisplay(req: Club) {
  const primary = req.timetables[0];
  return {
    description: getDescription(req),
    startTime: getScheduleTime(primary),
    room: getScheduleRoom(primary),
    date: getScheduleStartdate(primary),
  };
}

export const ClubCardHeader = ({ req }: { req: Club }) => {
  const display = getHeaderDisplay(req);

  return (
    <div className="flex items-center justify-between pl-5 w-full min-w-0">
      <div className="min-w-0">
        <h3
          className="text-xl font-semibold
         truncate"
        >
          {req.name}
        </h3>
        <p className="text-xs text-muted-foreground w-60 truncate mt-0.5">
          {display.description}
        </p>
        <p className="text-[10px] text-muted-foreground mt-0.5 truncate">
          Members: {req.minMember}–{req.maxMember}
        </p>
      </div>

      <div className="flex items-center gap-6 text-xs font-semibold">
        <span>{display.date}</span>
        <span className="opacity-50">|</span>
        <span>{display.startTime}</span>
        <span className="opacity-50">|</span>
        <span>{display.room}</span>
      </div>
    </div>
  );
};
