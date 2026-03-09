'use client';

import React from 'react';
import { ExtendedClub } from '../../../lib/type';
import { ClubActionButtons } from './ClubActionButton';
import { ClubInfoGrid } from './ClubInfoGrid';
import { ScheduleDetails } from './ScheduleDetails';
import { cn } from 'lib/utils';
import { Clock } from 'lucide-react';

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
  isExpired: boolean;
}

const TeacherProfile = ({ initial, name }: TeacherData) => (
  <div className="flex items-center gap-4 px-3 py-2 rounded-2xl bg-white/[0.02] border border-white/5 mb-6">
    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
      {initial}
    </div>
    <div>
      <p className="text-[9px] font-medium text-white/40">Хариуцсан багш</p>
      <h3 className="text-xs font-medium text-white">{name}</h3>
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
  isExpired,
}: ClubDetailViewProps) => {
  return (
    <div
      className={cn(
        'flex-1 rounded-3xl p-6 lg:p-8 transition-all duration-300 border',
        banned
          ? 'bg-red-600/15 border-red-500/50'
          : 'bg-blue-600/20 border-white/5'
      )}
    >
      <header className="mb-6 flex justify-between items-start">
        <div className="space-y-2">
          <h1 className="text-xl lg:text-xl font-bold pt-2 uppercase transition-colors text-white">
            {club.name}
          </h1>
          {isExpired && (
            <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-wider">
              <Clock size={12} strokeWidth={3} />
              <span>Элсэх хугацаа дууссан</span>
            </div>
          )}
        </div>
      </header>

      <div className="transition-all">
        <TeacherProfile {...teacherData} />
        <p className="text-xs mb-4 px-2 ml-3 border-l text-white/50 border-white/10">
          {club.description}
        </p>
        <ClubInfoGrid club={club} />
        <ScheduleDetails club={club} />
      </div>

      <div className="mt-8 pt-6 border-t border-white/5">
        <ClubActionButtons
          isEnrolled={club.isEnrolled}
          isLocked={banned}
          status={club.status}
          remainingTime={remainingTime}
          onEnroll={handleEnroll}
          onLeave={handleLeave}
          loading={loading}
          isExpired={isExpired}
        />
      </div>
    </div>
  );
};
