import { Calendar, Input, Label } from '@intern-3a-club/shadcn';
import React from 'react';
import { format } from 'date-fns';
import { History } from 'lucide-react';
import {
  Frequency,
  ClassRoom,
  Duration,
  StartTime,
  ScheduleCard,
} from '../_components';
import {
  CreateClubHandlers,
  CreateClubSetters,
  CreateClubState,
} from '../../../../club-dash/libs/types';

export const compareByTime = (a: Date, b: Date): number => {
  const aTime = a.getTime();
  const bTime = b.getTime();
  if (aTime > bTime) return 1;
  if (aTime < bTime) return -1;
  return 0;
};

type TimetableProps = {
  state: CreateClubState;
  setters: CreateClubSetters;
  handlers: CreateClubHandlers;
};

export const CreatedTimetable = ({
  state,
  setters,
  handlers,
}: TimetableProps) => {
  const datesArray = state.clubStartDate || [];
  const chosen = [...datesArray].sort(compareByTime);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2 mt-10">
          <Label className="text-sm font-semibold">Клубын хуваарь</Label>
          <Calendar
            mode="multiple"
            className="rounded-lg border"
            selected={state.clubStartDate}
            onSelect={setters.setClubStartDate}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-end">
            <div
              className="px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 flex gap-2 justify-center items-center hover:cursor-pointer"
              onClick={handlers.handleEmptyFields}
            >
              <History size={20} />
              <p className="text-sm font-semibold">Хоослох</p>
            </div>
          </div>
          <Frequency
            selectedFreqId={state.selectedFreqId}
            setSelectedFreqId={setters.setSelectedFreqId}
            clubTerm={state.clubTerm}
            setClubTerm={setters.setClubTerm}
            setClubFrequency={setters.setClubFrequency}
          />
          <div className="flex items-end justify-between gap-5">
            <ClassRoom
              clubClassRoom={state.clubClassRoom}
              setClubClassRoom={setters.setClubClassRoom}
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
          <div className="flex gap-5 justify-between items-end">
            <Duration
              clubDuration={state.clubDuration}
              setClubDuration={setters.setClubDuration}
            />
            <StartTime
              clubStartTime={state.clubStartTime}
              setClubStartTime={setters.setClubStartTime}
            />
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <Label className="text-sm font-semibold text-gray-700">
          Сонгогдсон хуваарь ({datesArray.length})
        </Label>
        <div className="border rounded-xl p-3 bg-gray-50/50 max-h-[300px] overflow-y-auto space-y-2">
          {chosen.length === 0 ? (
            <div className="py-12 text-center text-gray-400 text-sm">
              Календар дээр өдрүүдээ сонгоно уу...
            </div>
          ) : (
            chosen.map((selectedDays, i) => (
              <ScheduleCard
                key={`${selectedDays.getTime()}-${i}`}
                selectedDays={selectedDays}
                i={i}
                changeSchedule={
                  state.scheduleChange?.[format(selectedDays, 'yyyy-MM-dd')]
                }
                defaultRoom={state.clubClassRoom}
                defaultStartTime={state.clubStartTime}
                defaultDuration={state.clubDuration}
                onUpdateChange={handlers.handleUpdateChange}
                onDelete={handlers.handleDeleteDate}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
