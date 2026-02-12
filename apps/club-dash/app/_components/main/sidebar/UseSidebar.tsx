'use client';
import { useState } from 'react';
import { ToggleItem } from './ToggleItem';

export const useSidebar = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([
    'Admin Section',
  ]);

  const handleToggle = (label: string) => {
    setExpandedItems((prev) => ToggleItem(prev, label));
  };

  return { expandedItems, handleToggle };
};
