import { cn } from '../../../../../libs/utils';
import { ClubCardHeader } from './ClubCardHeader';
import { ClubCardActions } from './ClubCardActions';
import { ApprovedClubDetail } from '../main/Approved';
import { getContainerClass } from './Helper';
import { ClubCardProps } from '../../../../../libs/types';

export const ClubCard = ({
  req,
  isPrimary,
  isExpanded,
  setExpandedId,
  onDelete,
}: ClubCardProps) => {
  const containerClass = getContainerClass(isExpanded, isPrimary);
  const barClass = getBarClass(isPrimary);

  return (
    <div className={containerClass}>
      <div className={barClass} />

      <div className="grid grid-cols-[1fr_auto] items-center gap-8 px-3.5 py-2.5">
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

const getBarClass = (isPrimary: boolean) =>
  cn(
    'absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl',
    isPrimary ? 'bg-amber-400' : 'bg-primary'
  );
