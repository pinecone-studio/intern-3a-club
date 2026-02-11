'use client';
import { Settings, LogOut } from 'lucide-react';

import { SidebarGroup } from './SidebarGroup';

import { cn } from '@/libs/utils';
import { useSidebar } from './UseSidebar';
import { navItems } from './Item';
import { SidebarProps } from '@/libs/types';

export const DashboardSidebar = ({
  onViewChange,
  currentActive,
}: SidebarProps) => {
  const { expandedItems, handleToggle } = useSidebar();

  const handleChildClick = (label: string) => {
    onViewChange(label);
  };

  const handleItemClick = (label: string) => {
    onViewChange(label);
  };

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-360 w-64 flex-col bg-sidebar border-r border-sidebar-border">
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <ul className="space-y-1.5">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <SidebarGroup
                  item={item}
                  expandedItems={expandedItems}
                  onToggle={handleToggle}
                  onChildClick={handleChildClick}
                  currentActive={currentActive}
                />
              ) : (
                <button
                  onClick={handleItemClick.bind(null, item.label)}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold',
                    currentActive === item.label
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
                  )}
                >
                  {item.icon}
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto border-t border-border p-4">
        <button className="flex w-full gap-2 px-4 py-2 text-xs">
          <Settings className="h-4 w-4" />
          Settings
        </button>
        <button className="flex w-full gap-2 px-4 py-2 text-xs">
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
};
