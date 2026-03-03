'use client';
import React from 'react';
import { Calendar, Users } from 'lucide-react';
import { ExtendedClub } from '../../../lib/type';

// 1. Props-уудыг тусдаа interface болгон зарлах
interface ScheduleInfoProps {
  frequency: string;
  club: ExtendedClub;
}

interface MemberProgressProps {
  current: number;
  max: number;
  percent: number;
}

// 2. Логикийг тооцоолдог туслах функц
const getMemberStats = (min: number = 0, max: number = 1) => {
  const safeMax = max || 1;
  const percent = Math.min(Math.round((min / safeMax) * 100), 100);
  return { current: min, max: safeMax, percent };
};

const FREQUENCY_LABELS: Record<string, string> = {
  ONCE: 'Нэг удаа',
  WEEKLY: 'Долоо хоног бүр',
};

// 3. Дэд компонентууд (Named interface ашиглав)
const ScheduleInfo = ({ frequency, club }: ScheduleInfoProps) => {
  const displayFrequency = FREQUENCY_LABELS[frequency] || frequency;

  const term = club.clubTerm;

  console.log({ term });
  return (
    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
      <div className="flex items-center gap-2 mb-4 text-white/20 uppercase text-[10px] font-bold tracking-widest">
        <Calendar size={14} /> Хуваарь
      </div>
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-white/40">Давтамж:</span>
          <span className="text-white font-bold">{displayFrequency}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-white/40">Эхлэх огноо:</span>
          <span className="text-white font-bold">
            {club.timetables[0]?.date}
          </span>
        </div>
        {Number(club.clubTerm) >= 1 && (
          <div className="flex justify-between text-sm">
            <span className="text-white/40">Үргэлжлэх хугацаа:</span>
            <span className="text-white font-bold">{club.clubTerm} сар</span>
          </div>
        )}
      </div>
    </div>
  );
};

const MemberProgress = ({ current, max, percent }: MemberProgressProps) => (
  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
    <div className="mb-4 flex items-center justify-between">
      <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/20">
        <Users size={14} /> Гишүүдийн тоо
      </h4>
      <span className="text-xs font-bold text-white">
        {current} / {max}
      </span>
    </div>
    <div className="space-y-4">
      <div className="relative pt-2">
        <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
          <div
            className="h-full rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-700"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="mt-3 flex justify-between text-right">
          <p className="text-xs text-white/40">Дүүргэлт :</p>
          <p className=" font-bold text-white">{percent}%</p>
        </div>
      </div>
    </div>
  </div>
);

export const ClubInfoGrid = ({ club }: { club: ExtendedClub }) => {
  const { current, max, percent } = getMemberStats(
    club.minMember,
    club.maxMember
  );

  const frequency = club.frequency || 'WEEKLY';

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <ScheduleInfo frequency={frequency} club={club} />
      <MemberProgress current={current} max={max} percent={percent} />
    </div>
  );
};
