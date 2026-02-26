import React from 'react';
import { format } from 'date-fns';
import { ClassRoom, Duration, StartTime } from '../_components';
import { ScheduleChange } from '../../../../club-dash/libs/types';
import { Trash } from 'lucide-react';

type ScheduleCardProps = {
  selectedDays: Date;
  i: number;
  changeSchedule: ScheduleChange | undefined;
  defaultRoom: string;
  defaultStartTime: string;
  defaultDuration: string;
  onUpdateChange: (
    _key: string,
    _field: keyof ScheduleChange,
    _value: string
  ) => void;
  onDelete: (_d: Date) => void;
};

type SetterValue = string | ((_prev: string) => string);

export function resolveValue(v: SetterValue, current: string): string {
  if (typeof v === 'function') return v(current);
  return v;
}

export const getRoom = (c: ScheduleChange | undefined, d: string) =>
  c?.room ?? d;
export const getStartTime = (c: ScheduleChange | undefined, d: string) =>
  c?.startTime ?? d;
export const getDuration = (c: ScheduleChange | undefined, d: string) =>
  c?.duration ?? d;

export const ScheduleCard = ({
  selectedDays,
  i,
  changeSchedule,
  defaultRoom,
  defaultStartTime,
  defaultDuration,
  onUpdateChange,
  onDelete,
}: ScheduleCardProps) => {
  const key = format(selectedDays, 'yyyy-MM-dd');

  const room = getRoom(changeSchedule, defaultRoom);
  const startTime = getStartTime(changeSchedule, defaultStartTime);
  const duration = getDuration(changeSchedule, defaultDuration);

  const handleSetRoom = (v: string) => onUpdateChange(key, 'room', v);

  const handleSetStartTime = (v: SetterValue) =>
    onUpdateChange(key, 'startTime', resolveValue(v, startTime));

  const handleSetDuration = (v: SetterValue) =>
    onUpdateChange(key, 'duration', resolveValue(v, duration));

  const handleDelete = () => onDelete(selectedDays);

  return (
    <div
      key={`${selectedDays.getTime()}-${i}`}
      data-testid="schedule-card"
      className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm"
    >
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex flex-col gap-0.5 min-w-[90px]">
          <span className="text-[11px] font-bold text-gray-800">{key}</span>
          <span className="text-[10px] text-gray-400 uppercase tracking-tighter">
            {format(selectedDays, 'EEEE')}
          </span>
        </div>
        <div className="flex items-end gap-3 flex-wrap flex-1">
          <ClassRoom clubClassRoom={room} setClubClassRoom={handleSetRoom} />
          <StartTime
            clubStartTime={startTime}
            setClubStartTime={handleSetStartTime}
          />
          <Duration
            clubDuration={duration}
            setClubDuration={handleSetDuration}
          />
        </div>
        <button
          type="button"
          onClick={handleDelete}
          className="p-1 rounded-md hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
};
