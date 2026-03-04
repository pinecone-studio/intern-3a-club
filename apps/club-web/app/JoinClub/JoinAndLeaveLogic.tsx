'use client';

import { useMutation, useQuery } from '@apollo/client/react';
import { GET_ALL_APPROVED_CLUBS } from 'apps/club-web/lib/club-query';
import { ApprovedClubData } from 'apps/club-web/lib/type';
import React, { useState } from 'react';
import { CustomButton } from './_components/ui/Button';
import gql from 'graphql-tag';
import { useUser } from '@clerk/nextjs';

const JOIN_CLUB = gql`
  mutation JoinClub($clubId: ID!) {
    joinClub(clubId: $clubId) {
      id
      studentId
      joinedAt
    }
  }
`;
const LEAVE_CLUB = gql`
  mutation LeaveClub($clubId: ID!) {
    leaveClub(clubId: $clubId)
  }
`;

export const JoinAndLeaveLogic = () => {
  const { user } = useUser();
  const userId = user?.id;
  const [busyClub, setBusyClub] = useState<string | null>(null);
  const [actionType, setActionType] = useState<'join' | 'leave' | null>(null);

  const {
    loading: queryLoading,
    error,
    data: clubData,
    refetch,
  } = useQuery<ApprovedClubData>(GET_ALL_APPROVED_CLUBS);

  const [joinMutation, { loading: joinLoading }] = useMutation(JOIN_CLUB, {
    onError: (err) => alert(err.message),
  });

  const [leaveMutation, { loading: leaveLoading }] = useMutation(LEAVE_CLUB, {
    onError: (err) => alert(err.message),
  });

  const handleJoin = async (clubId: string) => {
    if (!userId) {
      alert('Эхлээд нэвтэрнэ үү.');
      return;
    }

    setBusyClub(clubId);
    setActionType('join');
    try {
      await joinMutation({ variables: { clubId } });
      await refetch();
      alert('Клубт амжилттай нэгдлээ!');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Join алдаа гарлаа.';
      alert(message);
    } finally {
      setBusyClub(null);
      setActionType(null);
    }
  };

  const handleLeave = async (clubId: string) => {
    if (!userId) {
      alert('Эхлээд нэвтэрнэ үү.');
      return;
    }

    setBusyClub(clubId);
    setActionType('leave');
    try {
      await leaveMutation({ variables: { clubId } });
      await refetch();
      alert('Клубээс гарлаа.');
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Leave алдаа гарлаа.';
      alert(message);
    } finally {
      setBusyClub(null);
      setActionType(null);
    }
  };

  if (queryLoading) return <p>Loading clubs...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div>
        {clubData?.getAllApprovedClubs.map((club) => {
          const currentMembersCount = club.members?.length || 0;
          const isFull = currentMembersCount >= club.maxMember;

          return (
            <div key={club.id}>
              <div>{club.id}</div>
              <div>{club.name}</div>
              <div>
                {currentMembersCount}/{club.maxMember}
              </div>
              <div>
                <CustomButton
                  disabled={
                    !userId ||
                    isFull ||
                    joinLoading ||
                    (busyClub === club.id && actionType === 'join')
                  }
                  onClick={() => handleJoin(club.id)}
                >
                  {busyClub === club.id && actionType === 'join'
                    ? 'Joining...'
                    : isFull
                      ? 'Full'
                      : 'Join'}
                </CustomButton>
                <CustomButton
                  disabled={
                    !userId ||
                    leaveLoading ||
                    (busyClub === club.id && actionType === 'leave')
                  }
                  onClick={() => handleLeave(club.id)}
                >
                  {busyClub === club.id && actionType === 'leave'
                    ? 'Leaving...'
                    : 'Leave'}
                </CustomButton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
