'use client';
<<<<<<< HEAD

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery } from '@apollo/client/react';
import { ClubDetail } from './ClubDetail';
import { ClubList } from './ClubList';
import { ApprovedClubData, ExtendedClub, TeacherData } from '../../../lib/type';
import {
  GET_ALL_APPROVED_CLUBS,
  GET_ALL_TEACHERS,
} from '../_components/club-query';

const DEFAULT_USER_ID = 'USER123';

// 1. UI Components
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

// 2. Sort helper
const compareByEnrollment = (a: ExtendedClub, b: ExtendedClub): number => {
  if (a.isEnrolled === b.isEnrolled) return 0;
  return a.isEnrolled ? -1 : 1;
};

// 3. Custom Hook
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
=======
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ClubDetail } from './ClubDetail';
import { ClubList } from './ClubList';
// import { initialClubs } from '../../../lib/mockdata';
import {
  Data,
  ExtendedClub,
  GET_ALL_CLUBS,
  GetAllClub,
} from '../../../lib/type';
import { useQuery } from '@apollo/client/react';

const sortClubs = (getAllClubs: ExtendedClub[]) => {
  return [...getAllClubs].sort((a, b) =>
    a.isEnrolled === b.isEnrolled ? 0 : a.isEnrolled ? -1 : 1
  );
};

const mapClubsData = (clubs: GetAllClub[]): ExtendedClub[] => {
  return clubs.map((club) => ({
    ...club,
    isEnrolled: false,
    bannedUntil: club.bannedUntil ?? 0,
  }));
};

export const ClubsContent = () => {
  const [allClubs, setAllClubs] = useState<ExtendedClub[]>([]);
  const [selectedClubId, setSelectedClubId] = useState<string>('');
  const [now, setNow] = useState<number>(Date.now());

  const { loading, error, data } = useQuery<Data>(GET_ALL_CLUBS);

  useEffect(() => {
    const rawClubs = data?.getAllClubs;

    if (!rawClubs || rawClubs.length === 0) return;

    const mapped = mapClubsData(rawClubs);
    setAllClubs(mapped);

    setSelectedClubId((prevId) => prevId || mapped[0].id);
  }, [data]);

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleEnroll = useCallback((id: string) => {
    setAllClubs((prev) =>
      prev.map((c) => (c.id === id ? { ...c, isEnrolled: true } : c))
    );
  }, []);

  const handleLeave = useCallback((id: string) => {
    setAllClubs((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, isEnrolled: false, bannedUntil: Date.now() + 60000 }
          : c
      )
    );
  }, []);

  const handleSelect = useCallback((id: string) => {
    setSelectedClubId(id);
  }, []);

  const sortedClubs = useMemo(() => sortClubs(allClubs), [allClubs]);
>>>>>>> 3d53066597e269ef7810c36bafed915c6e698d79

  const selectedClub = useMemo(
    () => sortedClubs.find((c) => c.id === selectedClubId),
    [sortedClubs, selectedClubId]
  );

<<<<<<< HEAD
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

// 4. Layout компонент
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

// 5. Үндсэн компонент
interface ClubsContentProps {
  userId?: string;
}

export const ClubsContent = ({ userId }: ClubsContentProps) => {
  const logic = useClubsLogic();

  if (logic.loading) return <LoadingState />;
  if (logic.error) return <ErrorState msg={logic.error.message} />;

  return <ClubsLayout userId={userId} logic={logic} />;
=======
  const isLocked = useMemo(() => {
    if (!selectedClub) return false;
    return /* istanbul ignore next */ (selectedClub.bannedUntil ?? 0) > now;
  }, [selectedClub, now]);

  const remainingTime = useMemo(() => {
    if (!selectedClub) return 0;
    const diff = Math.ceil((selectedClub.bannedUntil - now) / 1000);
    return diff > 0 ? diff : 0;
  }, [selectedClub, now]);

  // const openClubsCount = useMemo(
  //   () => allClubs.filter((c) => c.status === 'Open').length,
  //   [allClubs]
  // );
  if (loading) return null;
  if (error) return <div className="text-red-500 p-4">{error.message}</div>;
  return (
    <div className="mx-auto h-screen space-y-6 p-12 bg-gradient-to-br from-[#050c1f] to-[#0b2b5c]">
      {/* <ClubsHeader openClubsCount={openClubsCount} /> */}
      <div className="flex flex-col my-4 gap-2 lg:flex-row">
        <ClubList
          selectedClubId={selectedClubId}
          onSelect={handleSelect}
          clubs={sortedClubs}
        />

        <ClubDetail
          selectedClub={selectedClub}
          onEnroll={handleEnroll}
          onLeave={handleLeave}
          isLocked={isLocked}
          remainingTime={remainingTime}
        />
      </div>
    </div>
  );
>>>>>>> 3d53066597e269ef7810c36bafed915c6e698d79
};
