'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users } from 'lucide-react';

import { ExtendedClub } from '../../../lib/type';

interface InfoGridProps {
  schedule: string;
  club: ExtendedClub;
}

export const ClubInfoGrid = ({ schedule, club }: InfoGridProps) => {
  const maxMember = club.maxMember;
  const minMember = club.minMember;
  const percent = (Math.round((minMember / maxMember) * 100), 100);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-white/5 bg-[#11161D]/40 p-5">
        <h4 className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/30">
          <Calendar className="h-3.5 w-3.5" /> Хуваарь
        </h4>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-white/40">Долоо хоногт</span>
            <span className="font-semibold text-white">{schedule}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Анги</span>
            <span className="font-semibold text-white">
              {' '}
              {club.timetables?.[0]?.room ?? 'uruu todorhoigui'}
            </span>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-white/5 bg-[#11161D]/40 p-5">
        <div className="mb-4 flex items-center justify-between">
          <h4 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/30">
            <Users className="h-3.5 w-3.5" /> Гишүүд
          </h4>
          <span className="text-xs font-bold text-white/60">
            {minMember}/{club.maxMember}
          </span>
        </div>
        <div className="space-y-2">
          <div className="h-1.5 w-full rounded-full bg-white overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percent}%` }}
              className="h-full rounded-full bg-blue-600 transition-all duration-700"
            />
          </div>
          <div className="flex justify-end">
            <span className="text-[10px] font-bold text-blue-400">
              {percent}% дүүрсэн
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
