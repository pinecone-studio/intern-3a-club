'use client';

import React, { useMemo } from 'react';
import { ExtendedClub, GetAllTeacher } from '../../../lib/type';
import { useClubAction } from '../../_hooks/use-redis-hook';
import { ClubDetailView } from './ClubDetailView';

interface ClubDetailProps {
  selectedClub?: ExtendedClub;
  userId: string;
  allTeachers: GetAllTeacher[];
  onEnrollSuccess: () => void;
  onLeaveSuccess: () => void;
}

// Complexity-г багасгахын тулд логикийг маш энгийн болгов
const getTeacherInfo = (teachers: GetAllTeacher[] = [], id?: string) => {
  const t = teachers.find((i) => i.id === id);
  return {
    name: t ? `${t.firstName} ${t.lastName}` : 'Багш тодорхойгүй',
    initial: t?.firstName?.[0] || 'T',
  };
};

const EmptyState = () => (
  <div className="flex-1 flex items-center justify-center min-h-[400px] text-white/20 border border-white/5 rounded-3xl bg-[#0a0f1d]">
    Клуб сонгоно уу
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
  const { remainingTime, banned, loading, handleEnroll, handleLeave } =
    useClubAction({
      userid: userId,
      clubid: club?.id || '',
      onEnrollSuccess,
      onLeaveSuccess,
    });

  const teacherData = useMemo(
    () => getTeacherInfo(allTeachers, club?.teacherId),
    [allTeachers, club?.teacherId]
  );

  if (!club) return <EmptyState />;

  return (
    <ClubDetailView
      club={club}
      teacherData={teacherData}
      banned={banned}
      remainingTime={remainingTime || 0}
      loading={loading}
      handleEnroll={handleEnroll}
      handleLeave={handleLeave}
    />
  );
};
