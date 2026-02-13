'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users } from 'lucide-react';

interface InfoGridProps {
  schedule: string;
  className: string;
  current: number;
  max: number;
}

export const ClubInfoGrid = ({
  schedule,
  className,
  current,
  max,
}: InfoGridProps) => {
  const percent = Math.round((current / max) * 100);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
        <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase text-white">
          <Calendar className="h-4 w-4 text-blue-400" /> Хуваарь
        </h4>
        <div className="space-y-2 text-sm text-white/60">
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span>Долоо хоногт</span>
            <span className="font-bold text-white">{schedule}</span>
          </div>
          <div className="flex justify-between pt-1">
            <span>Анги</span>
            <span className="font-bold text-white">{className}</span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
        <div className="mb-2 flex items-center justify-between">
          <h4 className="flex items-center gap-2 text-sm font-bold uppercase text-white">
            <Users className="h-4 w-4 text-blue-400" /> Гишүүд
          </h4>
          <span className="text-xs font-black text-blue-400">{percent}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          />
        </div>
      </div>
    </div>
  );
};
