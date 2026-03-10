import { Trash2 } from 'lucide-react';
import { Button, Checkbox } from '@intern-3a-club/shadcn';

export type ScheduleItemType = {
  date: string;
  room: string;
  clubStartTime: string;
  duration: number;
};

export const ScheduleItem = ({ schedule }: { schedule: ScheduleItemType }) => (
  <div className="p-3 w-6xl rounded-xl bg-white/[0.02] border border-black/5 flex justify-between items-center hover:bg-gray-100 transition-colors">
    <Checkbox />
    <div className="flex gap-10">
      <div className="flex gap-4 text-xs">
        <span className="text-xs">Date:</span>
        <span className="text-xs font-semibold">{schedule.date}</span>
      </div>
      <div className="flex gap-4 text-xs">
        <span className="text-xs">Room:</span>
        <span className="text-xs font-semibold">{schedule.room}</span>
      </div>
      <div className="flex gap-4 text-xs">
        <span className="text-xs">Time:</span>
        <span className="font-semibold">{schedule.clubStartTime}</span>
      </div>
      <div className="flex gap-4 text-xs">
        <span className="text-xs">Duration:</span>
        <span className="text-xs font-semibold">{schedule.duration} min</span>
      </div>
    </div>
    <div className="flex gap-6">
      <Button variant="outline" size="sm">
        Edit
      </Button>
      <Button variant="destructive" size="sm">
        <Trash2 size={12} />
      </Button>
    </div>
  </div>
);
