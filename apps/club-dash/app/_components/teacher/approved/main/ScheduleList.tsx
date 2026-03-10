import { ScheduleItem, ScheduleItemType } from './ScheduleItem';

export const ScheduleList = ({
  open,
  timetables,
}: {
  open: boolean;
  timetables: ScheduleItemType[];
}) => (
  <>
    {open && (
      <div className="flex flex-col gap-4 w-[872px]">
        <div className="flex justify-end">
          <p className="text-red-600 hover:cursor-pointer text-xs hover:text-red-800">
            Delete Only Selected
          </p>
        </div>
        {timetables.map((schedule, index) => (
          <ScheduleItem key={index} schedule={schedule} />
        ))}
      </div>
    )}
  </>
);
