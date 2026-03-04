'use client';
import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client/react';
import { GET_ALL_APPROVED_CLUBS } from '../../lib/club-query';
import { ApprovedClubData } from '../../lib/type';
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

const validateUser = (userId: string | undefined | null) => {
  if (!userId) {
    alert('Эхлээд нэвтэрнэ үү.');
    return false;
  }
  return true;
};

const getJoinLabel = (busyClubId: string | null, clubId: string, actionType: string | null, isFull: boolean) => {
  if (busyClubId === clubId && actionType === 'join') return 'Joining...';
  if (isFull) return 'Full';
  return 'Join';
};

const getLeaveLabel = (busyClubId: string | null, clubId: string, actionType: string | null) => {
  if (busyClubId === clubId && actionType === 'leave') return 'Leaving...';
  return 'Leave';
};

export const JoinAndLeaveLogic = () => {
  const { user } = useUser();
  const userId = user?.id;
  const [busyClub, setBusyClub] = useState<string | null>(null);
  const [actionType, setActionType] = useState<'join' | 'leave' | null>(null);

  const { loading: queryLoading, error, data: clubData, refetch } = useQuery<ApprovedClubData>(GET_ALL_APPROVED_CLUBS);

  const [joinMutation, { loading: joinLoading }] = useMutation(JOIN_CLUB, {
    onError: (err) => alert(err.message),
  });

  const [leaveMutation, { loading: leaveLoading }] = useMutation(LEAVE_CLUB, {
    onError: (err) => alert(err.message),
  });

  const handleJoin = async (clubId: string) => {
    if (!validateUser(userId)) return;
    setBusyClub(clubId);
    setActionType('join');
    try {
      await joinMutation({ variables: { clubId } });
      await refetch();
      alert('Клубт амжилттай нэгдлээ!');
    } finally {
      setBusyClub(null);
      setActionType(null);
    }
  };

  const handleLeave = async (clubId: string) => {
    if (!validateUser(userId)) return;
    setBusyClub(clubId);
    setActionType('leave');
    try {
      await leaveMutation({ variables: { clubId } });
      await refetch();
      alert('Клубээс гарлаа.');
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

          const handleJoinClick = () => handleJoin(club.id);
          const handleLeaveClick = () => handleLeave(club.id);

          return (
            <div key={club.id}>
              <div>{club.id}</div>
              <div>{club.name}</div>
              <div>{currentMembersCount}/{club.maxMember}</div>
              <div>
                <CustomButton
                  disabled={!userId || isFull || joinLoading || (busyClub === club.id && actionType === 'join')}
                  onClick={handleJoinClick}
                >
                  {getJoinLabel(busyClub, club.id, actionType, isFull)}
                </CustomButton>
                <CustomButton
                  disabled={!userId || leaveLoading || (busyClub === club.id && actionType === 'leave')}
                  onClick={handleLeaveClick}
                >
                  {getLeaveLabel(busyClub, club.id, actionType)}
                </CustomButton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};