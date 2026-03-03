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
    <div className="mt-8 text-sm">
      <div
        onClick={handleSchdeuleOpen}
        className="flex gap-3 items-center text-white/50"
      >
        <p className="hover:cursor-pointer">Дэлгэрэнгүй хуваарь харах</p>
        {!open ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
      </div>
      <div className="mt-4">
        {open && (
          <div className="flex flex-col gap-4">
            {club.timetables.map((schedule) => (
              <div
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5"
                key={schedule.id}
              >
                <div className="flex gap-3 justify-evenly">
                  <div className="flex flex-col text-sm">
                    <span className="text-white/40">Огноо:</span>
                    <span className="text-white font-bold">
                      {schedule.date}
                    </span>
                  </div>
                  <div className="flex flex-col text-sm">
                    <span className="text-white/40">Анги:</span>
                    <span className="text-white font-bold">
                      {schedule.room}
                    </span>
                  </div>
                  <div className="flex flex-col text-sm">
                    <span className="text-white/40">Цаг:</span>
                    <span className="text-white font-bold">
                      {schedule.clubStartTime}
                    </span>
                  </div>
                  <div className="flex flex-col text-sm">
                    <span className="text-white/40">Үргэлжлэх хугацаа:</span>
                    <span className="text-white font-bold">
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
