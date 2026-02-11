import { Calendar, DoorOpen, Users2, Clock } from 'lucide-react';
import { DetailTile } from '../main/DetailTile';

export const PendingClubDetail = ({ club, onApprove, onReject }: any) => {
  return (
    <div>
      <div className="flex gap-3">
        {/* <button
          onClick={() => onApprove?.(club)}
          className="flex-1 py-2 rounded-2xl bg-foreground text-background font-black uppercase text-xs hover:bg-foreground/90"
        >
          Approve
        </button>

        <button
          onClick={() => onReject?.(club)}
          className="flex-1 py-2 rounded-2xl bg-secondary border border-border text-foreground/70 font-black uppercase text-xs hover:bg-secondary/80 hover:text-foreground"
        >
          Reject
        </button> */}
      </div>
      <p className="text-sm text-muted-foreground italic pb-2.5">{club.goal}</p>

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
