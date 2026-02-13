'use client';
import { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

import { requests } from '../../../../libs/mockdata';
import { ClubCard } from '../approved/clubcard/ClubCard';
import { PendingModal } from '../pending/PendingModal';
import { Club } from '../../../../libs/types';
import CreateClub from '../../../createClub/page';

export const AdminClubsView = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const [pending, setPending] = useState<Club[]>(
    requests.filter((r) => r.status === 'pending')
  );

  const [approved, setApproved] = useState<Club[]>(
    requests.filter((r) => r.status === 'approved')
  );

  const handleApprove = (club: Club) => {
    setPending((prev) => removeClub(prev, club.id));
    setApproved((prev) => [...prev, { ...club, status: 'approved' }]);
  };

  const handleReject = (club: Club) => {
    setPending((prev) => removeClub(prev, club.id));
  };

  const handleDelete = (club: Club) => {
    setApproved((prev) => removeClub(prev, club.id));
  };

  const openModalHandler = () => setOpenModal(true);

  useEffect(() => {
    if (pending.length === 0) setOpenModal(false);
  }, [pending]);

  return (
    <div className="p-10 text-foreground max-w-6xl mx-auto">
      {/* HEADER */}
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
            onClick={openModalHandler}
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
        {approved.map((req) => {
          const isPrimary = req.id <= 3;
          const isExpanded = expandedId === req.id;

          return (
            <ClubCard
              key={req.id}
              req={req}
              isPrimary={isPrimary}
              isExpanded={isExpanded}
              setExpandedId={setExpandedId}
              onDelete={handleDelete}
            />
          );
        })}
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

const removeClub = (arr: Club[], id: number) => arr.filter((c) => c.id !== id);
