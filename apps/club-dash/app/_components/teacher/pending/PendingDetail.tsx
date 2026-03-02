import { Calendar, DoorOpen, Users2, Clock } from 'lucide-react';
import { DetailTile } from '../main/DetailTile';
import { Club } from '../../../../libs/types';

const getPrimaryTimetable = (club: Club) => club.timetables?.[0];
const getMembersLabel = (club: Club) => `${club.minMember} - ${club.maxMember}`;

// eslint-disable-next-line complexity,react/function-component-definition
export const PendingClubDetail = ({ club }: { club: Club }) => {
  const primary = getPrimaryTimetable(club);
  const membersLabel = getMembersLabel(club);

  return (
    <div>
      <p className="text-sm pb-2.5">{club.description ?? ''}</p>
      <div className="grid grid-cols-2 gap-3">
        <DetailTile
          icon={<Clock size={14} />}
          label="Schedule"
          value={primary?.clubStartTime ?? '-'}
        />
        <DetailTile
          icon={<DoorOpen size={14} />}
          label="Room"
          value={primary?.room ?? '-'}
        />
        <DetailTile
          icon={<Users2 size={14} />}
          label="Members"
          value={membersLabel}
        />
        <DetailTile
          icon={<Calendar size={14} />}
          label="Status"
          value={club.status}
        />
      </div>
    </div>
  );
};
