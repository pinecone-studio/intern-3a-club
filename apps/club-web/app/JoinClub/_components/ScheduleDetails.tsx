'use client';
import { ExtendedClub } from '../../../lib/type';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import React, { useState } from 'react';

export const ScheduleDetails = ({ club }: { club: ExtendedClub }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleSchdeuleOpen = () => {
    setOpen(!open);
  };
  const handleCloseSchedule = () => {
    setOpen(false);
  };
  return (
    <div className="mt-6 text-xs">
      <div
        onClick={handleSchdeuleOpen}
        className="flex gap-2 items-center text-white/50"
      >
        <p className="hover:cursor-pointer">Дэлгэрэнгүй хуваарь харах</p>
        {!open ? <ChevronDown size={14} /> : <ChevronUp size={18} />}
      </div>
      <div className="mt-4">
        {open && (
          <div className="flex flex-col gap-4">
            {club.timetables.map((schedule) => (
              <div
                className="p-3 rounded-xl bg-white/[0.02] border border-white/5"
                key={schedule.id}
              >
                <div className="flex gap-3 justify-evenly">
                  <div className="flex flex-col text-xs">
                    <span className="text-xs text-white/50">Огноо:</span>
                    <span className="texst-xs text-white/90 font-medium">
                      {schedule.date}
                    </span>
                  </div>
                  <div className="flex flex-col text-xs">
                    <span className="text-xs text-white/50">Анги:</span>
                    <span className="text-white text-xs font-medium">
                      {schedule.room}
                    </span>
                  </div>
                  <div className="flex flex-col text-xs">
                    <span className="text-xs text-white/50">Цаг:</span>
                    <span className="text-white font-medium">
                      {schedule.clubStartTime}
                    </span>
                  </div>
                  <div className="flex flex-col text-xs">
                    <span className="text-xs text-white/50">
                      Үргэлжлэх хугацаа:
                    </span>
                    <span className="text-white text-xs font-medium">
                      {schedule.duration} мин
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div
              className="hover:cursor-pointer text-sm text-white/50 flex gap-0.5 justify-end items-center"
              onClick={handleCloseSchedule}
            >
              <p>Хаах</p>
              <X size={10} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
