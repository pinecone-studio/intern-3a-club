'use client';

import React from 'react';
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
    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm ">
      {initial}
    </div>
    <div>
      <p className="text-[9px] font-medium text-white/40 ">
        Хариуцсан багш
      </p>
      <h3 className="text-xs font-medium text-white ">{name}</h3>
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
      <header className="mb-6 flex justify-between items-start">
        <div className="space-y-2">
      
          <h1 className="text-xl lg:text-xl font-bold pt-2 text-white uppercase">
            {club.name}
          </h1>
        </div>
      
      </header>

      <TeacherProfile {...teacherData} />

      <p className="text-white/50 text-xs mb-8 px-2 ml-3 border-l border-white/10 ">
        {club.description}
      </p>

      <ClubInfoGrid club={club} />
      <ScheduleDetails club={club} />

      <div className="mt-10 pt-6 border-t border-white/5">
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
