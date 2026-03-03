'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery } from '@apollo/client/react';
import { ClubDetail } from './ClubDetail';
import { ClubList } from './ClubList';
import { ApprovedClubData, ExtendedClub, TeacherData } from '../../../lib/type';
import {
  GET_ALL_APPROVED_CLUBS,
  GET_ALL_TEACHERS,
} from '../../../lib/club-query';

const DEFAULT_USER_ID = 'USER123';


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


const compareByEnrollment = (a: ExtendedClub, b: ExtendedClub): number => {
  if (a.isEnrolled === b.isEnrolled) return 0;
  return a.isEnrolled ? -1 : 1;
};


const useClubsLogic = () => {
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
        isEnrolled: false,
        bannedUntil: 0,
      }));
      setAllClubs(mapped);
      setSelectedClubId((prev) => prev || mapped[0].id);
    }
  }, [clubData]);

  const allTeachers = useMemo(
    () => teacherData?.getAllTeachers || [],
    [teacherData]
  );

  const onEnroll = useCallback(() => {
    setAllClubs((p) =>
      p.map((c) => (c.id === selectedClubId ? { ...c, isEnrolled: true } : c))
    );
  }, [selectedClubId]);

  const onLeave = useCallback(() => {
    setAllClubs((p) =>
      p.map((c) => (c.id === selectedClubId ? { ...c, isEnrolled: false } : c))
    );
  }, [selectedClubId]);

  const sortedClubs = useMemo(
    () => [...allClubs].sort(compareByEnrollment),
    [allClubs]
  );

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
  userId?: string;
  logic: ReturnType<typeof useClubsLogic>;
}

const ClubsLayout = ({ userId = DEFAULT_USER_ID, logic }: ClubsLayoutProps) => (
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
  const logic = useClubsLogic();

  if (logic.loading) return <LoadingState />;
  if (logic.error) return <ErrorState msg={logic.error.message} />;

  return <ClubsLayout userId={userId} logic={logic} />;
};
