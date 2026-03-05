'use client';
import React from 'react';
import { Calendar, Users } from 'lucide-react';
import { ExtendedClub } from '../../../lib/type';
import { JoinedMembersList } from './JoinedMembersList';

interface ScheduleInfoProps {
  frequency: string;
  club: ExtendedClub;
}

interface MemberProgressProps {
  current: number;
  max: number;
  percent: number;
  lastnames: string[];
}

const getMemberStats = (min: number = 0, max: number = 1) => {
  const safeMax = max || 1;
  const percent = Math.min(Math.round((min / safeMax) * 100), 100);
  return { current: min, max: safeMax, percent };
};

const FREQUENCY_LABELS: Record<string, string> = {
  ONCE: 'Нэг удаа',
  WEEKLY: 'Долоо хоног бүр',
};
const WEEKDAY_MN: Record<number, string> = {
  0: 'Ня',
  1: 'Да',
  2: 'Мя',
  3: 'Лх',
  4: 'Пү',
  5: 'Ба',
  6: 'Бя',
};

const getUniqueDayNames = (dates: string[]): string[] => {
  const days = dates.map((date) => WEEKDAY_MN[new Date(date).getDay()]);
  return [...new Set(days)];
};

const ScheduleInfo = ({ frequency, club }: ScheduleInfoProps) => {
  const displayFrequency = FREQUENCY_LABELS[frequency] || frequency;
  const dates = club.timetables.map((t) => t.date);
  const uniqueDays = getUniqueDayNames(dates);

  return (
    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
      <div className="flex items-center gap-2 mb-4 text-white/20  text-[10px] font-semibold ">
        <Calendar size={10} /> Хуваарь
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between ">
          <span className="text-xs text-white/40">Давтамж:</span>
          <span className="text-xs text-white/80 font-medium">
            {displayFrequency}
          </span>
        </div>
        <div className="flex items-center justify-between ">
          <span className="text-xs text-white/40">Орох өдрүүд:</span>
          <span className="text-xs text-white/80 font-medium">
            {uniqueDays.join(', ')}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-white/40">Эхлэх огноо:</span>
          <span className="text-xs text-white/80 font-medium">
            {club.timetables[0]?.date}
          </span>
        </div>
        {Number(club.clubTerm) >= 1 && (
          <div className="flex justify-between items-center">
            <span className="text-xs text-white/40">Үргэлжлэх хугацаа:</span>
            <span className="text-xs text-white/80 font-medium">
              {club.clubTerm} сар
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const MemberProgress = ({ current, max, percent }: MemberProgressProps) => (
  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
    <div className="mb-4 flex items-center justify-between">
      <h4 className="flex items-center gap-2 text-[10px] font-semibold text-white/20">
        <Users size={10} /> Гишүүдийн тоо
      </h4>
      <span className="text-xs font-medium text-white/80">
        {current} / {max}
      </span>
    </div>
    <div className="space-y-3">
      <div className="relative pt-2">
        <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
          <div
            className="h-full rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-700"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="mt-3 flex justify-between text-right">
          <p className="text-xs text-white/40">Дүүргэлт :</p>
          <p className="text-xs font-medium text-white/80">{percent}%</p>
        </div>
      </div>
    </div>
  </div>
);

const getMemberNames = (club: ExtendedClub): string[] =>
  (club.members || [])
    .map((member) => member.student?.firstName)
    .filter((name): name is string => Boolean(name));

const getMemberCount = (club: ExtendedClub): number =>
  club.members?.length ?? 0;

const getFrequency = (club: ExtendedClub): string => club.frequency || 'WEEKLY';

export const ClubInfoGrid = ({ club }: { club: ExtendedClub }) => {
  const { current, max, percent } = getMemberStats(
    getMemberCount(club),
    club.maxMember
  );
  const members = getMemberNames(club);
  const frequency = getFrequency(club);


  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2">
        <ScheduleInfo frequency={frequency} club={club} />
        <MemberProgress
          current={current}
          max={max}
          percent={percent}
          lastnames={members}
        />
      </div>

      <JoinedMembersList lastnames={members} />
    </div>
  );
};
