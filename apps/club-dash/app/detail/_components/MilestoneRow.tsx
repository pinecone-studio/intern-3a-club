import { MilestoneBar } from './MilestoneBar';
import { monthIndex } from '../utils/milestone.utils';
import { addHours } from 'date-fns';

export const MilestoneRow = ({ club }: any) => {
  const timetable = club.timetables?.[0];

  if (!timetable) return null;

  const startDate = new Date(timetable.date);

  const endDate = addHours(startDate, timetable.duration);

  const startMonth = monthIndex(startDate);
  const endMonth = monthIndex(endDate) + 1;

  return (
    <div className="grid grid-cols-[220px_repeat(12,1fr)] items-center border-b">
      <div className="p-3 font-medium">{club.name}</div>

      <div className="col-span-12 grid grid-cols-12 p-2">
        <MilestoneBar start={startMonth} end={endMonth} />
      </div>
    </div>
  );
};
