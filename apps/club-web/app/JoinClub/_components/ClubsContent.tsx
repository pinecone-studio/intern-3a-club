'use client';
/* eslint-disable max-lines, complexity */

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery } from '@apollo/client/react';
import { useAuth } from '@clerk/nextjs';
import { ClubDetail } from './ClubDetail';
import { ClubList } from './ClubList';
import { ApprovedClubData, ExtendedClub, TeacherData } from '../../../lib/type';
import { GET_ALL_APPROVED_CLUBS, GET_ALL_TEACHERS } from '../../../lib/club-query';
import { useClubRealtime } from '../../_hooks/use-club-realtime';
import {
  applyEnroll,
  applyLeave,
  clearBan,
  compareByEnrollment,
  mapClub,
  resolveSelectedId,
} from './clubs-utils';

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

const BAN_MS = 120 * 1000;

const useClubsLogic = (clerkUserId?: string) => {
  const {
    loading,
    error,
    data: clubData,
    refetch: refetchClubs,
  } = useQuery<ApprovedClubData>(GET_ALL_APPROVED_CLUBS);
  const { data: teacherData } = useQuery<TeacherData>(GET_ALL_TEACHERS);

  const [allClubs, setAllClubs] = useState<ExtendedClub[]>([]);
  const [selectedClubId, setSelectedClubId] = useState('');
  const [isLiveSyncing, setIsLiveSyncing] = useState(false);
  const [nowTs, setNowTs] = useState(() => Date.now());

  useEffect(() => {
    const raw = clubData?.getAllApprovedClubs;
    if (raw && raw.length > 0) {
      setAllClubs(raw.map((c) => mapClub(c, clerkUserId)));
    } else {
      setAllClubs([]);
      setSelectedClubId('');
    }
  }, [clubData, clerkUserId]);

  const allTeachers = useMemo(() => teacherData?.getAllTeachers || [], [teacherData]);

  const onEnroll = useCallback(() => {
    setAllClubs((p) => applyEnroll(p, selectedClubId));
  }, [selectedClubId]);

  const onLeave = useCallback(() => {
    const banUntil = Date.now() + BAN_MS;
    setAllClubs((p) => applyLeave(p, selectedClubId, banUntil));
    setTimeout(() => setAllClubs((p) => clearBan(p, selectedClubId)), BAN_MS);
  }, [selectedClubId]);

  const sortedClubs = useMemo(() => [...allClubs].sort(compareByEnrollment), [allClubs]);
  const hasActiveBan = useMemo(
    () => allClubs.some((club) => Number(club.bannedUntil ?? 0) > nowTs),
    [allClubs, nowTs]
  );
  const clubIds = useMemo(
    () => sortedClubs.map((club) => club.id).filter(Boolean),
    [sortedClubs]
  );

  const handleRealtimeEvent = useCallback(() => {
    setIsLiveSyncing(true);
    void refetchClubs().finally(() => {
      window.setTimeout(() => setIsLiveSyncing(false), 700);
    });
  }, [refetchClubs]);

  useClubRealtime({
    clubIds,
    onEvent: handleRealtimeEvent,
  });

  useEffect(() => {
    if (sortedClubs.length === 0) return;
    setSelectedClubId((prev) => resolveSelectedId(prev, sortedClubs));
  }, [sortedClubs]);

  useEffect(() => {
    if (!hasActiveBan) return;
    const timer = window.setInterval(() => setNowTs(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [hasActiveBan]);

  useEffect(() => {
    if (!hasActiveBan) return;
    setAllClubs((prev) =>
      prev.map((club) => {
        const banUntil = Number(club.bannedUntil ?? 0);
        if (banUntil > 0 && banUntil <= nowTs) {
          return { ...club, bannedUntil: 0 };
        }
        return club;
      })
    );
  }, [hasActiveBan, nowTs]);

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
    isLiveSyncing,
    nowTs,
  };
};

type LogicType = ReturnType<typeof useClubsLogic>;

interface ClubsLayoutProps {
  userId: string;
  logic: LogicType;
}

const ClubsLayout = ({ userId, logic }: ClubsLayoutProps) => (
  <div className="max-w-[1400px] mx-auto min-h-screen p-4 lg:p-12">
    <div className="flex flex-col lg:flex-row gap-3 items-start h-full">
      <div className="w-full lg:w-[350px] sticky shrink-0 order-2 lg:order-1">
        <ClubList
          selectedClubId={logic.selectedClubId}
          onSelect={logic.setSelectedClubId}
          clubs={logic.sortedClubs}
          isLiveSyncing={logic.isLiveSyncing}
          nowTs={logic.nowTs}
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

const pickUserId = (prop: string | undefined, clerk: string | null | undefined): string => {
  if (prop) return prop;
  return clerk || '';
};

interface ClubsContentProps {
  userId?: string;
}

const useClubsContent = (userId?: string) => {
  const { userId: clerkUserId } = useAuth();
  const logic = useClubsLogic(clerkUserId ?? undefined);
  const resolvedId = pickUserId(userId, clerkUserId);
  return { logic, resolvedId };
};

const renderClubsView = (logic: LogicType, resolvedId: string): React.ReactElement => {
  if (logic.loading) return <LoadingState />;
  if (logic.error) return <ErrorState msg={logic.error.message} />;
  return <ClubsLayout userId={resolvedId} logic={logic} />;
};

export const ClubsContent = ({ userId }: ClubsContentProps) => {
  const { logic, resolvedId } = useClubsContent(userId);
  return renderClubsView(logic, resolvedId);
};
