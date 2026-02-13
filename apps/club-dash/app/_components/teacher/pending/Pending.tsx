import { Calendar, DoorOpen, Users2, Clock } from 'lucide-react';
import { DetailTile } from '../main/DetailTile';
import { Club } from '@/libs/types';

interface PendingClubDetailProps {
  club: Club;
}

export const PendingClubDetail = ({ club }: PendingClubDetailProps) => {
  return (
    <div>
      <p className="text-sm text-muted-foreground pb-2.5">{club.goal}</p>

      <div className="grid grid-cols-2 gap-3">
        <DetailTile
          icon={<Clock size={14} />}
          label="Schedule"
          value={club.time}
        />
        <DetailTile
          icon={<DoorOpen size={14} />}
          label="Room"
          value={club.room}
        />
        <DetailTile
          icon={<Users2 size={14} />}
          label="Students"
          value={club.students}
        />
        <DetailTile
          icon={<Calendar size={14} />}
          label="Recurrence"
          value={club.repeat}
        />
      </div>
    </div>
  );
};
