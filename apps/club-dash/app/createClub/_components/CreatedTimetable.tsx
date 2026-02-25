import { Calendar, Input, Label } from '@intern-3a-club/shadcn';
import React from 'react';
import { format } from 'date-fns';
import { Pin, Timer } from 'lucide-react';
import { Frequency, ClassRoom, Duration, StartTime } from '../_components';
import {
  CreateClubHandlers,
  CreateClubSetters,
  CreateClubState,
} from '../../../../club-dash/libs/types';

type TimetableProps = {
  state: CreateClubState;
  setters: CreateClubSetters;
  handlers: CreateClubHandlers;
};

export const compareByTime = (a: Date, b: Date): number => {
  const aTime = a.getTime();
  const bTime = b.getTime();
  if (aTime > bTime) return 1;
  if (aTime < bTime) return -1;
  return 0;
};

export const CreatedTimetable = ({
  state,
  setters,
  handlers,
}: TimetableProps) => {
  const datesArray = state.clubStartDate || [];
  const sorted = [...datesArray].sort(compareByTime);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-semibold">Клубын хуваарь</Label>
          <Calendar
            mode="multiple"
            className="rounded-lg border"
            selected={state.clubStartDate}
            onSelect={setters.setClubStartDate}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Frequency
            selectedFreqId={state.selectedFreqId}
            setSelectedFreqId={setters.setSelectedFreqId}
            clubTerm={state.clubTerm}
            setClubTerm={setters.setClubTerm}
            setClubFrequency={setters.setClubFrequency}
          />
          <div className="flex justify-between gap-5">
            <ClassRoom
              clubClassRoom={state.clubClassRoom}
              setClubClassRoom={setters.setClubClassRoom}
            />
            <StartTime
              clubStartTime={state.clubStartTime}
              setClubStartTime={setters.setClubStartTime}
            />
          </div>
          <div className="flex gap-5 justify-between items-center">
            <Duration
              clubDuration={state.clubDuration}
              setClubDuration={setters.setClubDuration}
            />
            <div className="space-y-2">
              <Label className="text-sm font-semibold">Сурагчдын тоо</Label>
              <Input
                type="number"
                placeholder="Max"
                value={state.clubMaxStudent}
                onChange={handlers.handleMax}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Label className="text-sm font-semibold text-gray-700">
          Сонгогдсон хуваарь ({datesArray.length})
        </Label>
        <div className="border rounded-xl p-3 bg-gray-50/50 max-h-[300px] overflow-y-auto space-y-2">
          {sorted.length === 0 ? (
            <div className="py-12 text-center text-gray-400 text-sm">
              Календар дээр өдрүүдээ сонгоно уу...
            </div>
          ) : (
            sorted.map((d, i) => (
              <div
                key={`${d.getTime()}-${i}`}
                data-testid="schedule-card"
                className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-100 shadow-sm"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] font-bold text-gray-800">
                    {format(d, 'yyyy-MM-dd')}
                  </span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-tighter">
                    {format(d, 'EEEE')}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-[11px] text-gray-500">
                  <div className="flex items-center gap-1">
                    <Pin size={14} />
                    <span>{state.clubClassRoom}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Timer size={14} />
                    <span>{state.clubStartTime}</span>
                  </div>
                  <div className="flex items-center gap-1 font-medium text-gray-400">
                    <span>{state.clubDuration}ц</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
