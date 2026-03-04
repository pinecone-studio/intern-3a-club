'use client';

import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client/react';

import {
  GET_ALL_PENDING_CLUBS,
  UPDATE_CLUB,
} from '../../../../libs/club-queries';

import { PendingClubsData, Club } from '../../../../libs/types';
import { mapGetAllClubsToClubs } from '../../../../libs/club-mappers';
import { PendingModal } from './PendingModal';

export const Pending = () => {
  const [open, setOpen] = useState(false);

  const { data } = useQuery<PendingClubsData>(GET_ALL_PENDING_CLUBS);

  const pendingClubs = mapGetAllClubsToClubs(data?.getAllPendingClubs ?? []);

  const [updateClub] = useMutation(UPDATE_CLUB);

  const handleApprove = async (club: Club) => {
    console.log('APPROVE CLICKED', club);
    await updateClub({
      variables: {
        input: {
          id: club.id,
          status: 'approved',
        },
      },
    });
  };

  const handleReject = async (club: Club) => {
    await updateClub({
      variables: {
        input: {
          id: club.id,
          status: 'declined',
        },
      },
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <button onClick={handleOpen}>Pending ({pendingClubs.length})</button>

      {open && (
        <PendingModal
          pending={pendingClubs}
          setOpenModal={setOpen}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      )}
    </>
  );
};
