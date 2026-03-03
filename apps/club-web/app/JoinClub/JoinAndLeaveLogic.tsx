import { useQuery } from '@apollo/client/react';
import { GET_ALL_APPROVED_CLUBS } from 'apps/club-web/lib/club-query';
import { ApprovedClubData } from 'apps/club-web/lib/type';
import React from 'react';

export const JoinAndLeaveLogic = () => {
  const {
    loading,
    error,
    data: clubData,
  } = useQuery<ApprovedClubData>(GET_ALL_APPROVED_CLUBS);
  return (
    <div>
      <div>
        {clubData?.getAllApprovedClubs.map((club) => (
          <div>
            <div>{club.id}</div>
            <div>{club.name}</div>
            <div></div>
          </div>
        ))}
      </div>
      JoinAndLeaveLogic
    </div>
  );
};
