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

const getTeacherInfo = (teachers: GetAllTeacher[] = [], id?: string) => {
  const teacher = teachers.find((t) => t.id === id);

  if (!teacher) {
    return { name: 'Багш тодорхойгүй', initial: 'T' };
  }

  const { firstName, lastName } = teacher;
  return {
    name: `${firstName} ${lastName}`,
    initial: firstName.charAt(0).toUpperCase() || 'T',
  };
};

const EmptyState = () => (
  <div className="flex-1 flex items-center justify-center min-h-[400px] text-white/20 border border-white/5 rounded-3xl bg-[#0a0f1d]">
    Клуб сонгоно уу
  </div>
);

export const ClubDetail = (props: ClubDetailProps) => {
  const { selectedClub, userId, allTeachers, onEnrollSuccess, onLeaveSuccess } =
    props;

  // Complexity бууруулахын тулд props-оос ID-нуудыг салгаж авах
  const clubId = selectedClub?.id;
  const teacherId = selectedClub?.teacherId;

  const actions = useClubAction({
    userid: userId,
    clubid: clubId || '',
    onEnrollSuccess,
    onLeaveSuccess,
  });

  const teacherData = useMemo(
    () => getTeacherInfo(allTeachers, teacherId),
    [allTeachers, teacherId]
  );

  // 'if' нөхцөлийг хамгийн сүүлд ганцхан удаа ашиглах
  if (!selectedClub) {
    return <EmptyState />;
  }

  return (
    <ClubDetailView
      club={selectedClub}
      teacherData={teacherData}
      banned={actions.banned}
      remainingTime={actions.remainingTime || 0}
      loading={actions.loading}
      handleEnroll={actions.handleEnroll}
      handleLeave={actions.handleLeave}
    />
  );
};
