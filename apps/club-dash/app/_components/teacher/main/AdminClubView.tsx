'use client';
/* eslint-disable max-lines */

import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client/react';
import { ShieldCheck } from 'lucide-react';

import { GET_ALL_PENDING_CLUBS, GET_ALL_APPROVED_CLUBS, UPDATE_CLUB } from '../../../../libs/club-queries';

import { mapGetAllClubsToClubs } from '../../../../libs/club-mappers';
import { Club, PendingClubsData, ApprovedClubsData } from '../../../../libs/types';

import { ClubCard } from '../approved/clubcard/ClubCard';
import { PendingModal } from '../pending/PendingModal';
import CreateClub from '../../../createClub/page';

type AdminClubsViewModel = {
  pending: Club[];
  approved: Club[];
  openModal: boolean;
  setOpenModal: (_v: boolean) => void;
  expandedId: string | null;
  setExpandedId: (_id: string | null) => void;
  handleApprove: (_club: Club, _teacherId: string) => Promise<void>;
  handleReject: (_club: Club) => Promise<void>;
  isLoading: boolean;
};

// eslint-disable-next-line complexity
function useAdminClubsViewModel(): AdminClubsViewModel {
  const [openModal, setOpenModal] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const { data: pendingData, loading: pendingLoading } =
    useQuery<PendingClubsData>(GET_ALL_PENDING_CLUBS);

  const { data: approvedData, loading: approvedLoading } =
    useQuery<ApprovedClubsData>(GET_ALL_APPROVED_CLUBS);

  const pending: Club[] = mapGetAllClubsToClubs(
    pendingData?.getAllPendingClubs ?? []
  );

  const approved: Club[] = mapGetAllClubsToClubs(
    approvedData?.getAllApprovedClubs ?? []
  );

  const [updateClub] = useMutation(UPDATE_CLUB, {
    refetchQueries: [GET_ALL_PENDING_CLUBS, GET_ALL_APPROVED_CLUBS],
  });

  const handleApprove = async (club: Club, teacherId: string) => {
    await updateClub({
      variables: {
        input: {
          id: club.id,
          teacherId,
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

  const isLoading = pendingLoading || approvedLoading;

  return {
    pending,
    approved,
    openModal,
    setOpenModal,
    expandedId,
    setExpandedId,
    handleApprove,
    handleReject,
    isLoading,
  };
}

// eslint-disable-next-line react/function-component-definition,complexity
const AdminClubsViewContent = ({
  pending,
  approved,
  openModal,
  setOpenModal,
  expandedId,
  setExpandedId,
  handleApprove,
  handleReject,
}: AdminClubsViewModel) => {
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <div className="flex justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold uppercase flex gap-3">
            <ShieldCheck className="h-10 w-10" /> Admin Clubs
          </h2>
          <p className="text-muted-foreground mt-2">
            Шинээр үүсгэх хүсэлтүүдийг хянах хэсэг.
          </p>
        </div>

        <div className="flex justify-between items-center gap-4">
          <CreateClub />

          <button
            onClick={handleOpenModal}
            className="relative bg-secondary border border-border px-6 py-3 rounded-2xl"
          >
            <span className="text-xs font-black uppercase">Хүсэлт</span>

            {pending.length > 0 && (
              <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-foreground text-background text-[11px] font-black flex items-center justify-center">
                {pending.length}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {approved.map((club, index) => (
          <ClubCard
            key={club.id}
            req={club}
            isPrimary={index <= 2}
            isExpanded={expandedId === club.id}
            setExpandedId={setExpandedId}
          />
        ))}
      </div>

      {openModal && (
        <PendingModal
          pending={pending}
          setOpenModal={setOpenModal}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      )}
    </div>
  );
};

export const AdminClubsView = () => {
  const viewModel = useAdminClubsViewModel();

  if (viewModel.isLoading) {
    return <div>Loading...</div>;
  }

  return <AdminClubsViewContent {...viewModel} />;
};
