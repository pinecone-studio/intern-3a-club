import { Edit3, Check, X, ChevronDown } from 'lucide-react';
import { cn } from 'lib/utils';
import { Club } from './types';

interface Props {
  req: Club;
  isPrimary: boolean;
  isExpanded: boolean;
  setExpandedId: (id: string | null) => void;
}

export const ClubCardActions = ({
  req,
  isPrimary,
  isExpanded,
  setExpandedId,
}: Props) => {
  const handleToggle = () => {
    setExpandedId(isExpanded ? null : req.id);
  };

  return (
    <div className="flex items-center gap-6">
      {!isPrimary && (
        <>
          <button className="p-2.5 rounded-xl bg-secondary">
            <Check size={16} />
          </button>
          <button className="p-2.5 rounded-xl bg-secondary">
            <X size={16} />
          </button>
        </>
      )}

      <button
        onClick={handleToggle}
        className={cn(
          'flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase',
          isExpanded
            ? 'bg-foreground text-background'
            : 'bg-secondary text-muted-foreground'
        )}
      >
        <Edit3 size={14} />
        {isExpanded ? 'Close' : 'Edit Detail'}
      </button>

      <ChevronDown className={cn('text-muted', isExpanded && 'rotate-180')} />
    </div>
  );
};
