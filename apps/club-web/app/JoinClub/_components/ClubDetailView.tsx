'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { ExtendedClub } from '../../../lib/type';
import { ClubActionButtons } from './ClubActionButton';
import { ClubInfoGrid } from './ClubInfoGrid';
import { ScheduleDetails } from './ScheduleDetails';

interface TeacherData {
  initial: string;
  name: string;
}

interface ClubDetailViewProps {
  club: ExtendedClub;
  teacherData: TeacherData;
  banned: boolean;
  remainingTime: number;
  loading: boolean;
  handleEnroll: () => void;
  handleLeave: () => void;
}

const TeacherProfile = ({ initial, name }: TeacherData) => (
  <div className="flex items-center gap-4 px-3 py-2 rounded-2xl bg-white/[0.02] border border-white/5 mb-6">
    <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg uppercase">
      {initial}
    </div>
    <div>
      <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest">
        Хариуцсан багш
      </p>
      <h3 className="text-sm font-bold text-white uppercase">{name}</h3>
    </div>
  </div>
);

export const ClubDetailView = ({
  club,
  teacherData,
  banned,
  remainingTime,
  loading,
  handleEnroll,
  handleLeave,
}: ClubDetailViewProps) => {
  return (
    <div
      className={`flex-1 rounded-3xl p-6 lg:p-8 transition-colors ${
        banned
          ? 'bg-red-600/15 border border-red-500/50'
          : 'bg-blue-600/20 border border-white/5'
      }`}
    >
      <header className="mb-8 flex justify-between items-start">
        <div className="space-y-2">
       
          <h1 className="text-2xl lg:text-3xl font-black pt-2 text-white uppercase tracking-tight">
            {club.name}
          </h1>
        </div>
        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
          <ShieldCheck className="h-5 w-5 text-white/20" />
        </div>
      </header>

      <TeacherProfile {...teacherData} />

      <p className="text-white/50 text-sm leading-relaxed mb-8 px-2 ml-3 border-l border-white/10 italic">
        {club.description}
      </p>

      <ClubInfoGrid club={club} />
      <ScheduleDetails club={club} />

      <div className="mt-12 pt-8 border-t border-white/5">
        <ClubActionButtons
          isEnrolled={club.isEnrolled}
          isLocked={banned}
          status={club.status}
          remainingTime={remainingTime}
          onEnroll={handleEnroll}
          onLeave={handleLeave}
          loading={loading}
        />
      </div>
    </div>
  );
};
