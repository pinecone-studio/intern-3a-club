'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client/react';
import { useAuth } from '@clerk/nextjs';
import gql from 'graphql-tag';
import { ClubDetail } from './ClubDetail';
import { ClubList } from './ClubList';
import { useClubRealtime } from '../../_hooks/use-club-realtime';
import { ApprovedClubData, ExtendedClub, TeacherData } from '../../../lib/type';
import {
  GET_ALL_APPROVED_CLUBS,
  GET_ALL_TEACHERS,
} from '../../../lib/club-query';

const compareByEnrollment = (a: ExtendedClub, b: ExtendedClub): number => {
  const now = Date.now();
  const aBanned = (a.bannedUntil ?? 0) > now;
  const bBanned = (b.bannedUntil ?? 0) > now;

  if (aBanned !== bBanned) return aBanned ? 1 : -1;
  if (a.isEnrolled === b.isEnrolled) return 0;
  return a.isEnrolled ? -1 : 1;
};
const BAN_SECONDS = 20;


const useClubsLogic = () => {
  const { isLoaded, userId, getToken } = useAuth();
  const {
    loading,
    error,
    data: clubData,
    refetch,
  } = useQuery<ApprovedClubData>(GET_ALL_APPROVED_CLUBS);
  const { data: teacherData } = useQuery<TeacherData>(GET_ALL_TEACHERS);
  const [syncUser] = useMutation<SyncUserResponse>(SYNC_USER_MUTATION);

  const [allClubs, setAllClubs] = useState<ExtendedClub[]>([]);
  const [selectedClubId, setSelectedClubId] = useState<string>('');
  const [currentStudentId, setCurrentStudentId] = useState<string>('');
  const handleRealtimeEvent = useCallback(() => {
    void refetch();
  }, [refetch]);

  useClubRealtime({
    clubId: selectedClubId || undefined,
    onEvent: handleRealtimeEvent,
  });

  useEffect(() => {
    const syncCurrentUser = async () => {
      try {
        if (!isLoaded || !userId) return;
        const token = await getToken();
        if (!token) return;

        const { data } = await syncUser({
          context: {
            headers: {
              authorization: `Bearer ${token}`,
            },
          },
        });

        const resolved = data?.syncUser;
        if (resolved?.__typename === 'Student') {
          setCurrentStudentId(resolved.id);
        } else {
          setCurrentStudentId('');
        }
      } catch {
        setCurrentStudentId('');
      }
    };

    void syncCurrentUser();
  }, [getToken, isLoaded, syncUser, userId]);

  useEffect(() => {
    const raw = clubData?.getAllApprovedClubs;
    if (raw && raw.length > 0) {
      setAllClubs((prev) => {
        if (prev.length === 0) {
          return raw.map((c) => ({
            ...c,
            isEnrolled: !!currentStudentId
              ? (c.members || []).some((m) => m.studentId === currentStudentId)
              : false,
            bannedUntil: 0,
          }));
        }

        const nextById = new Map(raw.map((club) => [club.id, club]));
        const merged = prev.map((club) => {
          const fresh = nextById.get(club.id);
          if (!fresh) return club;

          // Keep UI state stable; update only backend-driven member data.
          return {
            ...club,
            members: fresh.members,
          };
        });

        const knownIds = new Set(merged.map((club) => club.id));
        const appended = raw
          .filter((club) => !knownIds.has(club.id))
          .map((club) => ({
            ...club,
            isEnrolled: !!currentStudentId
              ? (club.members || []).some((m) => m.studentId === currentStudentId)
              : false,
            bannedUntil: 0,
          }));

        return [...merged, ...appended];
      });
      setSelectedClubId((prev) => prev || raw[0].id);
    }
  }, [clubData, currentStudentId]);

  const allTeachers = useMemo(
    () => teacherData?.getAllTeachers || [],
    [teacherData]
  );

  const onEnroll = useCallback(() => {
    setAllClubs((p) =>
      p.map((c) =>
        c.id === selectedClubId
          ? {
              ...c,
              isEnrolled: true,
              bannedUntil: 0,
              members: [
                ...(c.members || []),
                {
                  __typename: 'ClubMember',
                  id: `local-${Date.now()}`,
                  studentId: `local-${Date.now()}`,
                  student: { firstName: '', lastName: '', classId: '' },
                },
              ],
            }
          : c
      )
    );
  }, [selectedClubId]);

  const onLeave = useCallback(() => {
    const banUntil = Date.now() + BAN_SECONDS * 1000;

    setAllClubs((p) =>
      p.map((c) =>
        c.id === selectedClubId
          ? {
              ...c,
              isEnrolled: false,
              bannedUntil: banUntil,
              members: (() => {
                const currentMembers = c.members || [];
                return currentMembers.slice(
                  0,
                  Math.max(currentMembers.length - 1, 0)
                );
              })(),
            }
          : c
      )
    );

    setTimeout(() => {
      setAllClubs((prev) =>
        prev.map((c) =>
          c.id === selectedClubId ? { ...c, bannedUntil: 0 } : c
        )
      );
    }, BAN_SECONDS * 1000);
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
  const logic = useClubsLogic();
  const effectiveUserId = userId ?? clerkUserId ?? '';
  const hasClubs = logic.sortedClubs.length > 0;



  return <ClubsLayout userId={effectiveUserId} logic={logic} />;
};
