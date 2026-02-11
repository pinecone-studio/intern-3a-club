'use client';
import { useState } from 'react';
import { toggleItem } from './ToggleItem';

export const useSidebar = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([
    'Admin Section',
  ]);

  const handleToggle = (label: string) => {
    setExpandedItems((prev) => toggleItem(prev, label));
  };

  return { expandedItems, handleToggle };
};
