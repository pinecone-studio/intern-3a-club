import { cn } from 'lib/utils';
import { ApprovedClubDetail } from './Approved';
import { ClubCardProps } from './types';
import { ClubCardHeader } from './ClubCardHeader';
import { ClubCardActions } from './ClubCardActions';

export const ClubCard = ({
  req,
  isPrimary,
  isExpanded,
  setExpandedId,
  onDelete,
}: ClubCardProps) => {
  const containerClass = getContainerClass(isExpanded, isPrimary);

  return (
    <div className={containerClass}>
      <div className="grid grid-cols-[1fr_auto] items-center gap-8 px-5 py-4">
        <ClubCardHeader req={req} />

        <ClubCardActions
          req={req}
          isPrimary={isPrimary}
          isExpanded={isExpanded}
          setExpandedId={setExpandedId}
        />
      </div>

      {isExpanded && (
        <div className="px-8 pb-8 pt-2 border-t border-border mx-8">
          <ApprovedClubDetail club={req} onDelete={onDelete} />
        </div>
      )}
    </div>
  );
};

//
// helper (complexity энд)
//
const getContainerClass = (isExpanded: boolean, isPrimary: boolean) =>
  cn(
    'group rounded-3xl border',
    isExpanded ? 'bg-card border-border' : 'bg-secondary/40 border-border',
    isPrimary && !isExpanded && 'border-foreground/20 bg-secondary/60'
  );
