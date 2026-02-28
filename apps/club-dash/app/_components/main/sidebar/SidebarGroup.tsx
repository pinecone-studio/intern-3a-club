'use client';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../../../libs/utils';
import { SidebarGroupProps } from 'apps/club-dash/libs/types';


export const SidebarGroup = ({
  item,
  expandedItems,
  onToggle,
  onChildClick,
  currentActive,
}: SidebarGroupProps) => {
  const expanded = isExpanded(expandedItems, item.label);

  const buttonClass = getButtonClass(expanded);
  const childClass = getChildClass(currentActive);

  return (
    <div className="space-y-1">
      <button onClick={onToggle.bind(null, item.label)} className={buttonClass}>
        <span className="flex items-center gap-3">
          {item.icon}
          {item.label}
        </span>

        <ChevronDown
          className={cn('h-4 w-4 transition', expanded && 'rotate-180')}
        />
      </button>

      {expanded && (
        <ul className="ml-4 space-y-1 border-l border-border">
          {item.children?.map((child) => (
            <li key={child.label}>
              <button
                onClick={onChildClick.bind(null, child.label)}
                className={childClass(child.label)}
              >
                {child.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const isExpanded = (arr: string[], label: string) => {
  return arr.includes(label);
};

const getButtonClass = (expanded: boolean) => {
  return cn(
    'flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold',
    expanded
      ? 'bg-secondary text-foreground'
      : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
  );
};

const getChildClass = (currentActive: string) => {
  return (label: string) =>
    cn(
      'w-full px-6 py-2 text-left text-xs font-bold',
      currentActive === label
        ? 'text-primary'
        : 'text-muted-foreground hover:text-foreground'
    );
};
