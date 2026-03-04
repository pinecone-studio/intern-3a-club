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
  if (a.isEnrolled === b.isEnrolled) return 0;
  return a.isEnrolled ? -1 : 1;
};

const computeIsEnrolled = (
  members: ExtendedClub['members'] | undefined,
  studentId: string
) => {
  if (!studentId) return false;
  return (members || []).some((member) => member.studentId === studentId);
};


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

  const [selectedClubId, setSelectedClubId] = useState<string>('');
  const [currentStudentId, setCurrentStudentId] = useState<string>('');
  const sortedClubs = useMemo(() => {
    const raw = clubData?.getAllApprovedClubs || [];
    return raw
      .map((club) => ({
        ...club,
        isEnrolled: computeIsEnrolled(club.members, currentStudentId),
        bannedUntil: 0,
      }))
      .sort(compareByEnrollment);
  }, [clubData, currentStudentId]);
  const handleRealtimeEvent = useCallback(() => {
    void refetch();
  }, [refetch]);

  useClubRealtime({
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
    if (sortedClubs.length === 0) {
      setSelectedClubId('');
      return;
    }
    setSelectedClubId((prev) =>
      prev && sortedClubs.some((club) => club.id === prev)
        ? prev
        : sortedClubs[0].id
    );
  }, [sortedClubs]);

  const allTeachers = useMemo(
    () => teacherData?.getAllTeachers || [],
    [teacherData]
  );

  const onEnroll = useCallback(() => {
    void refetch();
  }, [refetch]);

  const onLeave = useCallback(() => {
    void refetch();
  }, [refetch]);

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
