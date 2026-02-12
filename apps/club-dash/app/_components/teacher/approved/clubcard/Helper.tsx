import { cn } from '../../../../../libs/utils';

export const getContainerClass = (isExpanded: boolean, isPrimary: boolean) => {
  const bgClass = getBgClass(isExpanded);
  const primaryClass = getPrimaryClass(isPrimary, isExpanded);

  return cn(
    'group relative overflow-hidden rounded-3xl border',
    bgClass,
    primaryClass
  );
};

//
// helpers → complexity энд шилжинэ
//
const getBgClass = (isExpanded: boolean) => {
  if (isExpanded) return 'bg-card border-border';
  return 'bg-secondary/40 border-border';
};

const getPrimaryClass = (isPrimary: boolean, isExpanded: boolean) => {
  if (isPrimary && !isExpanded) {
    return 'border-foreground/20 bg-secondary/60';
  }
  return '';
};
