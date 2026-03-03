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
  <div className="text-white/20 ">
    Клуб сонгоно уу
  </div>
);

// eslint-disable-next-line complexity
export const ClubDetail = (props: ClubDetailProps) => {
  const { selectedClub, userId, allTeachers, onEnrollSuccess, onLeaveSuccess } =
    props;

  const clubId = selectedClub?.id ?? '';
  const teacherId = selectedClub?.teacherId;

  const actions = useClubAction({
    userid: userId,
    clubid: clubId,
    onEnrollSuccess,
    onLeaveSuccess,
  });

  const teacherData = useMemo(
    () => getTeacherInfo(allTeachers, teacherId),
    [allTeachers, teacherId]
  );

  if (!selectedClub) {
    return <EmptyState />;
  }

  const { banned, loading, handleEnroll, handleLeave, remainingTime } = actions;

  return (
    <ClubDetailView
      club={selectedClub}
      teacherData={teacherData}
      banned={banned}
      remainingTime={remainingTime ?? 0}
      loading={loading}
      handleEnroll={handleEnroll}
      handleLeave={handleLeave}
    />
  );
};
