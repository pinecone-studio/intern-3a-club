'use client';

import { X } from 'lucide-react';
import { PendingClubDetail } from './Pending';
import { Club } from '../../../../libs/types';

interface PendingModalProps {
  pending: Club[];
  setOpenModal: (_v: boolean) => void;
  onApprove: (_club: Club) => void;
  onReject: (_club: Club) => void;
}

export const PendingModal = ({
  pending,
  setOpenModal,
  onApprove,
  onReject,
}: PendingModalProps) => {
  const handleClose = () => setOpenModal(false);

  const handleApprove = (club: Club) => {
    onApprove(club);
  };

  const handleReject = (club: Club) => {
    onReject(club);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end">
      <button className="absolute inset-0" onClick={handleClose} />

      <div className="relative mt-10 mr-6 w-full sm:max-w-lg md:max-w-xl max-w-2xl max-h-[80vh] bg-card rounded-3xl p-6 overflow-hidden shadow-2xl border border-border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-black uppercase">Хүсэлтүүд</h3>
          <button
            className="p-2 rounded-xl hover:bg-secondary"
            onClick={handleClose}
          >
            <X />
          </button>
        </div>

        <div className="space-y-4 overflow-y-auto pr-2 max-h-[70vh]">
          {pending.map((club) => (
            <PendingItem
              key={club.id}
              club={club}
              onApprove={handleApprove}
              onReject={handleReject}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface PendingItemProps {
  club: Club;
  onApprove: (_club: Club) => void;
  onReject: (_club: Club) => void;
}

const PendingItem = ({ club, onApprove, onReject }: PendingItemProps) => {
  const handleApproveClick = () => onApprove(club);
  const handleRejectClick = () => onReject(club);

  return (
    <div className="bg-secondary/60 rounded-2xl p-4 border border-border">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-black uppercase">{club.name}</h4>
          <p className="text-xs text-muted-foreground">
            {club.description ?? ''}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleApproveClick}
            className="px-4 py-2 rounded-xl bg-foreground text-background font-black uppercase text-xs"
          >
            Approve
          </button>

          <button
            onClick={handleRejectClick}
            className="px-4 py-2 rounded-xl bg-secondary border border-border text-foreground/70 font-black uppercase text-xs"
          >
            Reject
          </button>
        </div>
      </div>

      <div className="mt-4">
        <PendingClubDetail club={club} />
      </div>
    </div>
  );
};
