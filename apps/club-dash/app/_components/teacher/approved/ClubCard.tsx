import { ChevronDown, Edit3, Check, X } from 'lucide-react';
import { cn } from 'lib/utils';

import { ApprovedClubDetail } from './Approved';

export const ClubCard = ({
  req,
  isPrimary,
  isExpanded,
  setExpandedId,
  onDelete,
}: any) => {
  return (
    <div
      key={req.id}
      className={cn(
        'group relative overflow-hidden rounded-3xl border ',
        isExpanded
          ? 'bg-card border-border shadow-2xl'
          : 'bg-secondary/40 border-border hover:border-foreground/20',
        isPrimary && !isExpanded && 'border-foreground/20 bg-secondary/60'
      )}
    >
      <div
        className={cn(
          'absolute left-0 top-0 bottom-0 w-1.5 transition-colors shadow-[4px_0_15px_rgba(0,0,0,0.3)]',
          isPrimary
            ? 'bg-amber-400 shadow-[4px_0_15px_rgba(251,191,36,0.4)]'
            : 'bg-primary shadow-[4px_0_15px_rgba(var(--primary),0.4)]'
        )}
      />

      <div className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-8 px-5 py-4">
        <div className="min-w-0 pl-5">
          <h3 className="text-xl font-black italic uppercase tracking-tight truncate">
            {req.name}
          </h3>
          <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest truncate">
            {req.leader}
          </p>
        </div>
        <div className="flex items-center gap-50 pr-50">
          <span className="text-lg font-bold text-foreground uppercase tracking-widest">
            {req.time}
          </span>
          <span className="text-lg font-bold">{req.room}</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            {!isPrimary && (
              <>
                <button className="p-2.5 rounded-xl bg-secondary text-foreground hover:bg-foreground hover:text-background">
                  <Check size={16} />
                </button>
                <button className="p-2.5 rounded-xl bg-secondary text-foreground/70 hover:bg-foreground hover:text-background">
                  <X size={16} />
                </button>
              </>
            )}

            <button
              onClick={() => setExpandedId(isExpanded ? null : req.id)}
              className={cn(
                'flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest',
                isExpanded
                  ? 'bg-foreground text-background'
                  : 'bg-secondary text-muted-foreground hover:bg-foreground hover:text-background'
              )}
            >
              <Edit3 size={14} />
              {isExpanded ? 'Close' : 'Edit Detail'}
            </button>
          </div>

          <ChevronDown
            className={cn(
              'text-muted-foreground/70',
              isExpanded && 'rotate-180 text-foreground'
            )}
          />
        </div>
      </div>

      {isExpanded && (
        <div className="px-8 pb-8 pt-2 border-t border-border mx-8">
          {/* <ClubDetailSection
            club={req}
            showActions={isPrimary}
            actionLayout="horizontal"
            gridClassName="gap-6"
            goalClassName="text-sm text-muted-foreground leading-relaxed italic"
            onApprove={() => onApprove?.(req)}
            variant={isPrimary ? "approved" : "pending"}
          /> */}
          <ApprovedClubDetail club={req} onDelete={onDelete} />
        </div>
      )}
    </div>
  );
};
