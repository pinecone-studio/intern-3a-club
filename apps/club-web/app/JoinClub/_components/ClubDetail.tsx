'use client';

import React, { useMemo } from 'react';
import { ShieldCheck } from 'lucide-react';
import { ExtendedClub, GetAllTeacher } from '../../../lib/type';
import { ClubActionButtons } from './ClubActionButton';
import { useClubAction } from '../../_hooks/use-redis-hook';
import { ClubInfoGrid } from './ClubInfoGrid';

interface ClubDetailProps {
  selectedClub?: ExtendedClub;
  userId: string;
  allTeachers: GetAllTeacher[];
  onEnrollSuccess: () => void;
  onLeaveSuccess: () => void;
}

// TeacherData-ийн төрлийг тодорхой зааж өгснөөр TS алдаа арилна
interface TeacherData {
  initial: string;
  name: string;
}

const getTeacherInfo = (
  teachers: GetAllTeacher[] | undefined,
  teacherId?: string
): TeacherData => {
  // 1. Teachers массив байхгүй эсвэл ирээгүй үед (Test coverage хамгаалалт)
  if (!teachers || !Array.isArray(teachers)) {
    return {
      name: 'Багш тодорхойгүй',
      initial: 'T',
    };
  }

  const teacher = teachers.find((t) => t.id === teacherId);

  // 2. Буцаах объект нь заавал initial болон name гэсэн string талбартай байна
  return {
    name: teacher
      ? `${teacher.firstName} ${teacher.lastName}`
      : 'Багш тодорхойгүй',
    initial: teacher?.firstName
      ? teacher.firstName.charAt(0).toUpperCase()
      : 'T',
  };
};

const getClubId = (club: ExtendedClub | null): string => {
  if (!club) return '';
  return club.id;
};

const getTeacherId = (club: ExtendedClub | null): string | undefined => {
  if (!club) return undefined;
  return club.teacherId;
};

const getClubType = (type: string | undefined): string => {
  if (!type) return 'Premium';
  return type;
};

const getRemainingTime = (time: number | null | undefined): number => {
  if (!time) return 0;
  return time;
};

const TeacherProfile = ({
  initial,
  name,
}: {
  initial: string;
  name: string;
}) => (
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

const EmptyState = () => (
  <div className="flex-1 flex items-center justify-center min-h-[400px] text-white/20 border border-white/5 rounded-3xl bg-[#0a0f1d]">
    Клуб сонгоно уу
  </div>
);

interface ClubDetailViewProps {
  club: ExtendedClub;
  teacherData: TeacherData; // teacherData-ийн төрлийг энд мөн зааж өгсөн
  banned: boolean;
  remainingTime: number | null | undefined;
  loading: boolean;
  handleEnroll: () => void;
  handleLeave: () => void;
}

const ClubDetailView = ({
  club,
  teacherData,
  banned,
  remainingTime,
  loading,
  handleEnroll,
  handleLeave,
}: ClubDetailViewProps) => (
  <div className="flex-1 w-full bg-blue-600/20 border border-white/5 rounded-3xl p-6 lg:p-8">
    <header className="mb-8 flex justify-between items-start">
      <div className="space-y-2">
        <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest bg-blue-500/10 px-2 py-1 rounded-md border border-blue-500/20">
          {getClubType(club.type)}
        </span>
        <h1 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight">
          {club.name}
        </h1>
      </div>
      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
        <ShieldCheck className="h-5 w-5 text-white/20" />
      </div>
    </header>

    <TeacherProfile initial={teacherData.initial} name={teacherData.name} />
    <p className="text-white/50 text-sm leading-relaxed mb-8 px-2 border-l border-white/10 italic">
      {club.description}
    </p>
    <ClubInfoGrid club={club} />
    <div className="mt-12 pt-8 border-t border-white/5">
      <ClubActionButtons
        isEnrolled={club.isEnrolled}
        isLocked={banned}
        status={club.status}
        remainingTime={getRemainingTime(remainingTime)}
        onEnroll={handleEnroll}
        onLeave={handleLeave}
        loading={loading}
      />
    </div>
  </div>
);

export const ClubDetail = ({
  selectedClub,
  userId,
  allTeachers,
  onEnrollSuccess,
  onLeaveSuccess,
}: ClubDetailProps) => {
  const club = selectedClub ?? null;
  const clubId = getClubId(club);
  const teacherId = getTeacherId(club);

  const { remainingTime, banned, loading, handleEnroll, handleLeave } =
    useClubAction({
      userid: userId,
      clubid: clubId,
      onEnrollSuccess,
      onLeaveSuccess,
    });

  const teacherData = useMemo(
    () => getTeacherInfo(allTeachers, teacherId),
    [allTeachers, teacherId]
  );

  if (!club) return <EmptyState />;

  return (
    <ClubDetailView
      club={club}
      teacherData={teacherData}
      banned={banned}
      remainingTime={remainingTime}
      loading={loading}
      handleEnroll={handleEnroll}
      handleLeave={handleLeave}
    />
  );
};
