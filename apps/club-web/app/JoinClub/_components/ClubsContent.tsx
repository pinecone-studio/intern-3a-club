'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery } from '@apollo/client/react';
import { useAuth } from '@clerk/nextjs';
import { ClubDetail } from './ClubDetail';
import { ClubList } from './ClubList';
import {
  ApprovedClubData,
  ExtendedClub,
  GetAllApprovedClub,
  TeacherData,
} from '../../../lib/type';
import {
  GET_ALL_APPROVED_CLUBS,
  GET_ALL_TEACHERS,
} from '../../../lib/club-query';

const LoadingState = () => (
  <div className="p-12 text-center text-white/50 animate-pulse uppercase text-[10px] font-bold tracking-widest">
    Уншиж байна...
  </div>
);

const ErrorState = ({ msg }: { msg: string }) => (
  <div className="text-red-500 p-12 text-center font-bold italic text-sm">
    Алдаа: {msg}
  </div>
);

const toStartTimestamp = (date?: string, time?: string): number | null => {
  if (!date || !time) return null;
  const value = new Date(`${date}T${time}:00`).getTime();
  return Number.isNaN(value) ? null : value;
};

const getNearestUpcomingStart = (club: ExtendedClub): number | null => {
  const now = Date.now();
  const futureStarts = (club.timetables || [])
    .map((t) => toStartTimestamp(t.date, t.clubStartTime))
    .filter((t): t is number => t !== null && t >= now)
    .sort((a, b) => a - b);
  return futureStarts[0] ?? null;
};

const compareByEnrollment = (a: ExtendedClub, b: ExtendedClub): number => {
  const now = Date.now();
  const aBanned = (a.bannedUntil ?? 0) > now;
  const bBanned = (b.bannedUntil ?? 0) > now;

  if (aBanned !== bBanned) return aBanned ? 1 : -1;
  if (a.isEnrolled !== b.isEnrolled) return a.isEnrolled ? -1 : 1;

  const aNearest = getNearestUpcomingStart(a);
  const bNearest = getNearestUpcomingStart(b);

  if (aNearest === null && bNearest === null) return a.name.localeCompare(b.name);
  if (aNearest === null) return 1;
  if (bNearest === null) return -1;
  return aNearest - bNearest;
};

const computeIsEnrolled = (
  club: Pick<GetAllApprovedClub, 'members'>,
  clerkUserId?: string
): boolean => {
  if (!clerkUserId) return false;
  return (club.members || []).some(
    (member) =>
      member.student?.authUserId === clerkUserId || member.studentId === clerkUserId
  );
};

const useClubsLogic = (clerkUserId?: string) => {
  const {
    loading,
    error,
    data: clubData,
  } = useQuery<ApprovedClubData>(GET_ALL_APPROVED_CLUBS);
  const { data: teacherData } = useQuery<TeacherData>(GET_ALL_TEACHERS);

  const [allClubs, setAllClubs] = useState<ExtendedClub[]>([]);
  const [selectedClubId, setSelectedClubId] = useState<string>('');
  useEffect(() => {
    const raw = clubData?.getAllApprovedClubs;
    if (raw && raw.length > 0) {
      const mapped = raw.map((c) => ({
        ...c,
        isEnrolled: computeIsEnrolled(c, clerkUserId),
        bannedUntil: 0,
      }));
      setAllClubs(mapped);
      return;
    }
    setAllClubs([]);
    setSelectedClubId('');
  }, [clubData, clerkUserId]);

  const allTeachers = useMemo(
    () => teacherData?.getAllTeachers || [],
    [teacherData]
  );

  const onEnroll = useCallback(() => {
    setAllClubs((p) =>
      p.map((c) =>
        c.id === selectedClubId ? { ...c, isEnrolled: true, bannedUntil: 0 } : c
      )
    );
  }, [selectedClubId]);

  const onLeave = useCallback(() => {
    const banUntil = Date.now() + 120 * 1000;

    setAllClubs((p) =>
      p.map((c) =>
        c.id === selectedClubId
          ? { ...c, isEnrolled: false, bannedUntil: banUntil }
          : c
      )
    );

    setTimeout(() => {
      setAllClubs((prev) =>
        prev.map((c) =>
          c.id === selectedClubId ? { ...c, bannedUntil: 0 } : c
        )
      );
    }, 120 * 1000);
  }, [selectedClubId]);

  const sortedClubs = useMemo(
    () => [...allClubs].sort(compareByEnrollment),
    [allClubs]
  );

  useEffect(() => {
    if (sortedClubs.length === 0) return;
    setSelectedClubId((prev) => {
      if (prev && sortedClubs.some((club) => club.id === prev)) return prev;
      return sortedClubs[0].id;
    });
  }, [sortedClubs]);

  const selectedClub = useMemo(
    () => sortedClubs.find((c) => c.id === selectedClubId),
    [sortedClubs, selectedClubId]
  );

  return {
    loading,
    error,
    selectedClubId,
    setSelectedClubId,
    allTeachers,
    onEnroll,
    onLeave,
    sortedClubs,
    selectedClub,
  };
};

interface ClubsLayoutProps {
  userId: string;
  logic: ReturnType<typeof useClubsLogic>;
}

const ClubsLayout = ({ userId, logic }: ClubsLayoutProps) => (
  <div className="max-w-[1400px] mx-auto min-h-screen p-4 lg:p-12">
    <div className="flex flex-col lg:flex-row gap-3 items-start h-full">
      <div className="w-full lg:w-[350px] sticky shrink-0 order-2 lg:order-1">
        <ClubList
          selectedClubId={logic.selectedClubId}
          onSelect={logic.setSelectedClubId}
          clubs={logic.sortedClubs}
        />
      </div>
      <div className="w-full order-1 lg:order-2">
        <ClubDetail
          selectedClub={logic.selectedClub}
          userId={userId}
          allTeachers={logic.allTeachers}
          onEnrollSuccess={logic.onEnroll}
          onLeaveSuccess={logic.onLeave}
        />
      </div>
    </div>
  </div>
);

interface ClubsContentProps {
  userId?: string;
}

export const ClubsContent = ({ userId }: ClubsContentProps) => {
  const { userId: clerkUserId } = useAuth();
  const logic = useClubsLogic(clerkUserId ?? undefined);
  const effectiveUserId = userId ?? clerkUserId ?? '';

  if (logic.loading) return <LoadingState />;
  if (logic.error) return <ErrorState msg={logic.error.message} />;

  return <ClubsLayout userId={effectiveUserId} logic={logic} />;
};
