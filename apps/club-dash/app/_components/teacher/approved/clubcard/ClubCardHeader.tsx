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
function getHeaderDisplay(req: Club) {
  const primary = req.timetables[0];
  return {
    description: getDescription(req),
    startTime: getScheduleTime(primary),
    room: getScheduleRoom(primary),
  };
}

export const ClubCardHeader = ({ req }: { req: Club }) => {
  const display = getHeaderDisplay(req);

  return (
    <div className="flex items-center justify-between pl-5 w-full min-w-0">
      <div className="min-w-0">
        <h3 className="text-xl font-black uppercase truncate">{req.name}</h3>
        <p className="text-xs text-muted-foreground uppercase truncate">
          {display.description}
        </p>
        <p className="text-[10px] text-muted-foreground mt-1 truncate">
          Members: {req.minMember}–{req.maxMember} • Status: {req.status}
        </p>
      </div>

      <div className="flex items-center gap-6 text-sm font-bold">
        <span>{display.startTime}</span>
        <span className="opacity-50">|</span>
        <span>{display.room}</span>
      </div>
    </div>
  );
};
