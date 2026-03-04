import { useMutation, useQuery } from '@apollo/client/react';
import { GET_ALL_APPROVED_CLUBS } from 'apps/club-web/lib/club-query';
import { ApprovedClubData } from 'apps/club-web/lib/type';
import React from 'react';
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
  const {
    loading: queryLoading,
    error,
    data: clubData,
  } = useQuery<ApprovedClubData>(GET_ALL_APPROVED_CLUBS);

  const [joinMutation, { loading: joinLoading }] = useMutation(JOIN_CLUB, {
    refetchQueries: [{ query: GET_ALL_APPROVED_CLUBS }], // Нэрээ анхаараарай
    onCompleted: () => alert('Клубт амжилттай нэгдлээ!'),
    onError: (err) => alert(err.message),
  });

  const [leaveMutation, { loading: leaveLoading }] = useMutation(LEAVE_CLUB, {
    refetchQueries: [{ query: GET_ALL_APPROVED_CLUBS }],
    onCompleted: () => alert('Клубээс гарлаа.'),
    onError: (err) => alert(err.message),
  });

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
                  disabled={joinLoading || isFull}
                  onClick={() =>
                    joinMutation({ variables: { clubId: club.id } })
                  }
                >
                  {joinLoading ? 'Joining...' : isFull ? 'Full' : 'Join'}
                </CustomButton>
                <CustomButton
                  disabled={leaveLoading}
                  onClick={() =>
                    leaveMutation({ variables: { clubId: club.id } })
                  }
                >
                  {leaveLoading ? 'Leaving...' : 'Leave'}
                </CustomButton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
