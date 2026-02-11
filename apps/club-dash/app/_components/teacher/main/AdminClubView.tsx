'use client';
import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { useEffect } from 'react';
import { requests } from '../../../../libs/mockdata';
import { ClubCard } from '../approved/ClubCard';
import { PendingModal } from '../pending/PendingModal';

export const AdminClubsView = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const [pending, setPending] = useState<any[]>(
    requests.filter((r) => r.status === 'pending')
  );

  const [approved, setApproved] = useState<any[]>(
    requests.filter((r) => r.status === 'approved')
  );

  const handleApprove = (club: any) => {
    setPending((prev) => prev.filter((p) => p.id !== club.id));

    setApproved((prev) => [...prev, { ...club, status: 'approved' }]);
  };
  const handleReject = (club: any) => {
    setPending((prev) => prev.filter((c) => c.id !== club.id));
  };
  const handleDelete = (club: any) => {
    setApproved((prev) => prev.filter((c) => c.id !== club.id));
  };
  useEffect(() => {
    if (pending.length === 0) {
      setOpenModal(false);
    }
  }, [pending]);

  return (
    <div className="p-10 text-foreground max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter italic flex items-center gap-3">
            <ShieldCheck className="h-10 w-10 text-foreground" /> Admin Clubs
          </h2>
          <p className="text-muted-foreground mt-2 font-medium">
            Шинээр үүсгэх хүсэлтүүдийг хянах хэсэг.
          </p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="relative bg-secondary border border-border px-6 py-3 rounded-2xl"
        >
          <span className="text-xs font-black uppercase text-foreground">
            Хүсэлт
          </span>

          {pending.length > 0 && (
            <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-foreground text-background text-[11px] font-black flex items-center justify-center">
              {pending.length}
            </span>
          )}
        </button>
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
              expandedId={expandedId}
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
