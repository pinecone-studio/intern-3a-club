import { Edit3, Check, X, ChevronDown } from 'lucide-react';
import { cn } from '../../../../../libs/utils';
import { Props } from '../../../../../libs/types';

export const ClubCardActions = ({
  req,
  isPrimary,
  isExpanded,
  setExpandedId,
}: Props) => {
  const handleToggle = () => {
    setExpandedId(isExpanded ? null : req.id);
  };

  const btnClass = getBtnClass(isExpanded);
  const text = getBtnText(isExpanded);
  const chevronClass = getChevronClass(isExpanded);

  return (
    <div className="flex items-center gap-6">
      {renderApproveButtons(isPrimary)}

      <button onClick={handleToggle} className={btnClass}>
        <Edit3 size={14} />
        {text}
      </button>

      <ChevronDown className={chevronClass} />
    </div>
  );
};
const renderApproveButtons = (isPrimary: boolean) => {
  if (isPrimary) return null;

  return (
    <>
      <button className="p-2.5 rounded-xl bg-secondary">
        <Check size={16} />
      </button>
      <button className="p-2.5 rounded-xl bg-secondary">
        <X size={16} />
      </button>
    </>
  );
};

const getBtnClass = (isExpanded: boolean) =>
  cn(
    'flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase',
    isExpanded
      ? 'bg-foreground text-background'
      : 'bg-secondary text-muted-foreground'
  );

const getBtnText = (isExpanded: boolean) =>
  isExpanded ? 'Close' : 'Edit Detail';

const getChevronClass = (isExpanded: boolean) =>
  cn('text-muted', isExpanded && 'rotate-180');
