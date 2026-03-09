import { useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery } from '@apollo/client/react';
import {
  ApprovedClubData,
  ExtendedClub,
  TeacherData,
} from '../../../../lib/type';
import {
  GET_ALL_APPROVED_CLUBS,
  GET_ALL_TEACHERS,
} from '../../../../lib/club-query';
import { useClubRealtime } from '../../../_hooks/use-club-realtime';
import {
  applyEnroll,
  applyLeave,
  clearBan,
  compareByEnrollment,
  mapClub,
  resolveSelectedId,
} from './clubs-utils';

const BAN_MS = 120 * 1000;

const getBanUntil = (club: ExtendedClub): number =>
  Number(club.bannedUntil ?? 0);

const isBanExpired = (banUntil: number, nowTs: number): boolean =>
  banUntil > 0 && banUntil <= nowTs;

const resetBan = (club: ExtendedClub, nowTs: number): ExtendedClub => {
  const banUntil = getBanUntil(club);
  if (isBanExpired(banUntil, nowTs)) return { ...club, bannedUntil: 0 };
  return club;
};

const clearExpiredBans = (
  clubs: ExtendedClub[],
  nowTs: number
): ExtendedClub[] => clubs.map((club) => resetBan(club, nowTs));

export const useClubsLogic = (clerkUserId?: string) => {
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

  const allTeachers = useMemo(
    () => teacherData?.getAllTeachers || [],
    [teacherData]
  );

  const onEnroll = useCallback(() => {
    setAllClubs((p) => applyEnroll(p, selectedClubId));
  }, [selectedClubId]);

  const onLeave = useCallback(() => {
    const banUntil = Date.now() + BAN_MS;
    setAllClubs((p) => applyLeave(p, selectedClubId, banUntil));
    setTimeout(() => setAllClubs((p) => clearBan(p, selectedClubId)), BAN_MS);
  }, [selectedClubId]);

  const sortedClubs = useMemo(
    () => [...allClubs].sort(compareByEnrollment),
    [allClubs]
  );

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

  useClubRealtime({ clubIds, onEvent: handleRealtimeEvent });

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
    setAllClubs((prev) => clearExpiredBans(prev, nowTs));
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
