'use client';

import React from 'react';
import { ExtendedClub, GetAllTeacher } from '../../../lib/type';
import { useClubAction } from '../../_hooks/use-redis-hook';
import { ClubDetailView } from './ClubDetailView';
import { getEnrollmentStatus } from './utils/clubs-utils';

interface ClubDetailProps {
  selectedClub?: ExtendedClub;
  userId: string;
  allTeachers: GetAllTeacher[];
  onEnrollSuccess: () => void;
  onLeaveSuccess: () => void;
}

interface TeacherInfo {
  name: string;
  initial: string;
}

const DEFAULT_TEACHER: TeacherInfo = { name: 'Багш тодорхойгүй', initial: 'T' };

function getInitial(firstName: string): string {
  const initial = firstName.charAt(0).toUpperCase();
  return initial || 'T';
}

const formatTeacherInfo = (teacher: GetAllTeacher): TeacherInfo => ({
  name: `${teacher.firstName} ${teacher.lastName}`,
  initial: getInitial(teacher.firstName),
});

function findTeacher(teachers: GetAllTeacher[], id?: string) {
  return teachers.find((t) => t.id === id);
}

function getTeacherInfo(
  teachers: GetAllTeacher[] = [],
  id?: string
): TeacherInfo {
  const teacher = findTeacher(teachers, id);
  if (!teacher) return DEFAULT_TEACHER;
  return formatTeacherInfo(teacher);
}

const getClubId = (club?: ExtendedClub) => (club ? club.id : '');
const getTeacherId = (club?: ExtendedClub) =>
  club ? club.teacherId : undefined;
const getCreatedAt = (club?: ExtendedClub) =>
  club ? club.createdAt : undefined;
const getStartDate = (club?: ExtendedClub) =>
  club ? club.startDate : undefined;

const EmptyState = () => <div className="text-white/20">Клуб сонгоно уу</div>;

export const ClubDetail = (props: ClubDetailProps) => {
  const { selectedClub, userId, allTeachers, onEnrollSuccess, onLeaveSuccess } =
    props;

  const actions = useClubAction({
    userid: userId,
    clubid: getClubId(selectedClub),
    onEnrollSuccess,
    onLeaveSuccess,
  });

  const teacherData = getTeacherInfo(allTeachers, getTeacherId(selectedClub));
  const isExpired =
    getEnrollmentStatus(
      getCreatedAt(selectedClub),
      getStartDate(selectedClub)
    ) === 'expired';

  if (!selectedClub) return <EmptyState />;

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
      isExpired={isExpired}
    />
  );
};
