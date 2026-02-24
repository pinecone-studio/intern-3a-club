'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import { cn } from 'lib/utils';
import { ClubCardProps } from '../../../lib/type';

const CARD_THEMES = {
  enrolled: {
    container: 'border-[#00ff9d]/40 bg-[#00ff9d]/5 ring-1 ring-[#00ff9d]/20',
    text: 'text-[#00ff9d]',
    badge: 'bg-blue-600 text-white',
    bar: 'bg-[#00ff9d] rounded-full',
    label: 'ИДЭВХТЭЙ',
  },
  full: {
    container: 'border-white/5 bg-[#0a162e]/80 opacity-60',
    text: 'text-blue-200/50',
    badge: 'bg-gray-700 text-gray-300',
    bar: 'bg-gray-600 rounded-full',
    label: 'ДҮҮРСЭН',
  },
  selected: {
    container:
      'border-blue-500 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.15)]',
    text: 'text-blue-400',
    badge: 'bg-blue-600 text-white',
    bar: 'bg-blue-600 rounded-full',
    label: 'НЭЭЛТТЭЙ',
  },
  default: {
    container: 'rounded-[24px] bg-[#0a192f]/60',
    text: 'text-blue-200/80',
    badge: 'bg-blue-600 text-white',
    bar: 'bg-blue-600 rounded-full',
    label: 'НЭЭЛТТЭЙ',
  },
};

// eslint-disable-next-line complexity
export const ClubCard = ({ club, isSelected, onClick }: ClubCardProps) => {
  const isEnrolled = !!club.isEnrolled;
  const isFull = club.currentMembers >= club.maxMembers;

  const stateKey = isEnrolled
    ? 'enrolled'
    : isFull
    ? 'full'
    : isSelected
    ? 'selected'
    : 'default';

  const theme = CARD_THEMES[stateKey];
  const progress = Math.min((club.currentMembers / club.maxMembers) * 100, 100);

  const handleOnClick = () => {
    onClick(club.id);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.01, x: 2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'relative w-full rounded-xl border p-4 text-left transition-all duration-300 backdrop-blur-sm',
        theme.container
      )}
      onClick={handleOnClick}
    >
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <h3
            className={cn(
              'text-[15px] font-semibold tracking-tight',
              theme.text
            )}
          >
            {club.name}
          </h3>
          <span
            className={cn(
              'rounded-md px-1.5 py-0.5 text-[10px] font-bold tracking-wider',
              theme.badge
            )}
          >
            {theme.label}
          </span>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-[12px] text-white/40">
            <Clock size={13} strokeWidth={2.5} className="opacity-50" />
            <span className="font-medium">
              {club.schedule} • {club.time}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[12px] text-white/40">
            <MapPin size={13} strokeWidth={2.5} className="opacity-50" />
            <span className="font-medium">{club.class}</span>
          </div>
        </div>

        <div className="mt-1 h-[4px] w-full rounded-full bg-white overflow-hidden">
          <div
            className={cn('h-full transition-all', theme.bar)}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.button>
  );
};
