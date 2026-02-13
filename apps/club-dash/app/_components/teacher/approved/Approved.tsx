import { Calendar, DoorOpen, Users2, Clock } from 'lucide-react';
import { DetailTile } from '../main/DetailTile';
import { ApprovedClubDetailProps } from '../../../../libs/types';

export const ApprovedClubDetail = ({
  club,
  onEdit,
  onDelete,
}: ApprovedClubDetailProps) => {
  const handleEdit = () => {
    onEdit?.(club);
  };

  const handleDelete = () => {
    onDelete?.(club);
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">{club?.goal}</p>

        <div className="grid grid-cols-2 gap-3">
          <DetailTile
            icon={<Clock size={14} />}
            label="Schedule"
            value={club?.time}
          />
          <DetailTile
            icon={<DoorOpen size={14} />}
            label="Room"
            value={club?.room}
          />
          <DetailTile
            icon={<Users2 size={14} />}
            label="Students"
            value={club?.students}
          />
          <DetailTile
            icon={<Calendar size={14} />}
            label="Recurrence"
            value={club?.repeat}
          />
        </div>
      </div>

      <div className="flex items-end gap-3">
        <button
          onClick={handleEdit}
          className="flex-1 py-2 rounded-2xl bg-foreground text-background font-bold uppercase text-xs hover:bg-foreground/90"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="flex-1 py-2 rounded-2xl bg-secondary border border-border text-foreground/70 font-black uppercase text-xs hover:bg-secondary/80 hover:text-foreground"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
