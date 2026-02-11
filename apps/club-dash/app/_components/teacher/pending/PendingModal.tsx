import { X } from 'lucide-react';

import { PendingClubDetail } from './Pending';

export const PendingModal = ({
  pending,
  setOpenModal,
  onApprove,
  onReject,
}: any) => {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end">
      <button
        className="absolute inset-0 "
        onClick={() => setOpenModal(false)}
      />

      <div className="relative mt-10 mr-6 w-full sm:max-w-lg md:max-w-xl max-w-2xl max-h-[80vh] bg-card text-card-foreground rounded-3xl p-6 overflow-hidden shadow-2xl border border-border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-black uppercase">Хүсэлтүүд</h3>
          <button
            className="p-2 rounded-xl hover:bg-secondary"
            onClick={() => setOpenModal(false)}
          >
            <X />
          </button>
        </div>

        <div className="space-y-4 overflow-y-auto pr-2 max-h-[70vh]">
          {pending.map((club: any) => (
            <div
              key={club.id}
              className="bg-secondary/60 rounded-2xl p-4 border border-border"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-black uppercase">{club.name}</h4>
                  <p className="text-xs text-muted-foreground">{club.leader}</p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => onApprove?.(club)}
                    className="px-4 py-2 rounded-xl bg-foreground text-background font-black uppercase text-xs hover:bg-foreground/90"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => onReject?.(club)}
                    className="px-4 py-2 rounded-xl bg-secondary border border-border text-foreground/70 font-black uppercase text-xs hover:bg-secondary/80 hover:text-foreground"
                  >
                    Reject
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <PendingClubDetail club={club} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
