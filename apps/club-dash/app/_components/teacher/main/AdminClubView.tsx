'use client';
import { useState, useEffect, type ReactNode } from 'react';
import { ShieldCheck } from 'lucide-react';

import { ClubCard } from '../approved/clubcard/ClubCard';
import { PendingModal } from '../pending/PendingModal';
import { Club } from '../../../../libs/types';
import {
  useAdminClubsData,
  removeClub,
  getIsLoading,
  getIsError,
  getErrorMessage,
} from './use-admin-clubs-data';
import CreateClub from '../../../createClub/page';

function renderLoading() {
  return <div className="p-10 text-foreground max-w-6xl mx-auto">...</div>;
}

function renderError(message: string) {
  return (
    <div className="p-10 text-foreground max-w-6xl mx-auto">
      Алдаа гарлаа: {message}
    </div>
  );
}

function getAdminContent(
  isLoading: boolean,
  isError: boolean,
  errorMessage: string,
  main: ReactNode
): ReactNode {
  if (isLoading) return renderLoading();
  if (isError) return renderError(errorMessage);
  return main;
}
interface AdminClubsMainContentProps {
  approved: Club[];
  pending: Club[];
  expandedId: string | null;
  setExpandedId: (_id: string | null) => void;
  openModal: boolean;
  setOpenModal: (_v: boolean) => void;
  onApprove: (_club: Club) => void;
  onReject: (_club: Club) => void;
  onDelete: (_club: Club) => void;
  onOpenModal: () => void;
}
const AdminClubsMainContent = ({
  approved,
  pending,
  expandedId,
  setExpandedId,
  openModal,
  setOpenModal,
  onApprove,
  onReject,
  onDelete,
  onOpenModal,
}: AdminClubsMainContentProps) => {
  const pendingCount = pending.length;
  const showBadge = pendingCount > 0;

  return (
    <div className="p-10 text-foreground max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-4xl font-black uppercase flex gap-3">
            <ShieldCheck className="h-10 w-10" /> Admin Clubs
          </h2>
          <p className="text-muted-foreground mt-2">
            Шинээр үүсгэх хүсэлтүүдийг хянах хэсэг.
          </p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <CreateClub />
          <button
            onClick={onOpenModal}
            className="relative bg-secondary border border-border px-6 py-3 rounded-2xl"
          >
            <span className="text-xs font-black uppercase">Хүсэлт</span>
            {showBadge && (
              <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-foreground text-background text-[11px] font-black flex items-center justify-center">
                {pendingCount}
              </span>
            )}
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {approved.map((req, index) => (
          <ClubCard
            key={req.id}
            req={req}
            isPrimary={index <= 2}
            isExpanded={expandedId === req.id}
            setExpandedId={setExpandedId}
            onDelete={onDelete}
          />
        ))}
      </div>
      {openModal && (
        <PendingModal
          pending={pending}
          setOpenModal={setOpenModal}
          onApprove={onApprove}
          onReject={onReject}
        />
      )}
    </div>
  );
};
export const AdminClubsView = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const data = useAdminClubsData();
  const isLoading = getIsLoading(data);
  const isError = getIsError(data);
  const errorMessage = getErrorMessage(data);
  const handleApprove = (club: Club) => {
    data.setPending((prev) => removeClub(prev, club.id));
    data.setApproved((prev) => [...prev, { ...club, status: 'approved' }]);
  };
  const handleReject = (club: Club) => {
    data.setPending((prev) => removeClub(prev, club.id));
  };
  const handleDelete = (club: Club) => {
    data.setApproved((prev) => removeClub(prev, club.id));
  };
  const openModalHandler = () => setOpenModal(true);

  useEffect(() => {
    if (data.pending.length === 0) setOpenModal(false);
  }, [data.pending.length]);

  return (
    <>
      {getAdminContent(
        isLoading,
        isError,
        errorMessage,
        <AdminClubsMainContent
          approved={data.approved}
          pending={data.pending}
          expandedId={expandedId}
          setExpandedId={setExpandedId}
          openModal={openModal}
          setOpenModal={setOpenModal}
          onApprove={handleApprove}
          onReject={handleReject}
          onDelete={handleDelete}
          onOpenModal={openModalHandler}
        />
      )}
    </>
  );
};
