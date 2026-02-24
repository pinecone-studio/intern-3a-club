import { Calendar, DoorOpen, Users2, Clock } from 'lucide-react';
import { DetailTile } from '../main/DetailTile';
import { Club } from '../../../../libs/types';

interface PendingClubDetailProps {
  club: Club;
}

function getDescription(club: Club) {
  return club.description ?? '';
}
function getStartTime(primary: Club['timetables'][0]) {
  return primary?.clubStartTime ?? '-';
}
function getRoom(primary: Club['timetables'][0]) {
  return primary?.room ?? '-';
}
function getMembers(club: Club) {
  return `${club.minMember ?? 0} - ${club.maxMember ?? 0}`;
}
function getPendingDetailDisplay(club: Club) {
  const primary = club.timetables[0];
  return {
    description: getDescription(club),
    startTime: getStartTime(primary),
    room: getRoom(primary),
    members: getMembers(club),
    status: club.status,
  };
}

export const PendingClubDetail = ({ club }: PendingClubDetailProps) => {
  const display = getPendingDetailDisplay(club);

  return (
    <div>
      <p className="text-sm text-muted-foreground pb-2.5">
        {display.description}
      </p>

      <div className="grid grid-cols-2 gap-3">
        <DetailTile
          icon={<Clock size={14} />}
          label="Schedule"
          value={display.startTime}
        />
        <DetailTile
          icon={<DoorOpen size={14} />}
          label="Room"
          value={display.room}
        />
        <DetailTile
          icon={<Users2 size={14} />}
          label="Members"
          value={display.members}
        />
        <DetailTile
          icon={<Calendar size={14} />}
          label="Status"
          value={display.status}
        />
      </div>
    </div>
  );
};
