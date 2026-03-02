import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { ExtendedClub } from '../../../lib/type';
import { ClubActionButtons } from './ClubActionButton';
import { ClubInfoGrid } from './ClubInfoGrid';

interface TeacherData {
  initial: string;
  name: string;
}

const TeacherProfile = ({ initial, name }: TeacherData) => (
  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 mb-6">
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
}: {
  club: ExtendedClub;
  teacherData: TeacherData;
  banned: boolean;
  remainingTime: number;
  loading: boolean;
  handleEnroll: () => void;
  handleLeave: () => void;
}) => (
  <div className="flex-1 w-full bg-blue-600/20 border border-white/5 rounded-3xl p-6 lg:p-8">
    <header className="mb-8 flex justify-between items-start">
      <div className="space-y-2">
        <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest bg-blue-500/10 px-2 py-1 rounded-md border border-blue-500/20">
          {club.type || 'Premium'}
        </span>
        <h1 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight">
          {club.name}
        </h1>
      </div>
      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
        <ShieldCheck className="h-5 w-5 text-white/20" />
      </div>
    </header>
    <TeacherProfile {...teacherData} />
    <p className="text-white/50 text-sm leading-relaxed mb-8 px-2 border-l border-white/10 italic">
      {club.description}
    </p>
    <ClubInfoGrid club={club} />
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
