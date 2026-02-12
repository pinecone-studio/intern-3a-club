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
    badge: 'bg-[#00ff9d] text-black',
    bar: 'bg-[#00ff9d]',
    label: 'ИДЭВХТЭЙ',
  },
  full: {
    container: 'border-white/5 bg-[#0a162e]/80 opacity-60',
    text: 'text-blue-200/50',
    badge: 'bg-gray-700 text-gray-300',
    bar: 'bg-gray-600',
    label: 'ДҮҮРСЭН',
  },
  selected: {
    container:
      'border-blue-500 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.15)]',
    text: 'text-blue-400',
    badge: 'bg-blue-600 text-white',
    bar: 'bg-blue-500',
    label: 'НЭЭЛТТЭЙ',
  },
  default: {
    container: 'border-white/5 bg-[#0a162e]/50 hover:border-white/20',
    text: 'text-blue-200/80',
    badge: 'bg-blue-600 text-white',
    bar: 'bg-blue-500',
    label: 'НЭЭЛТТЭЙ',
  },
};

// eslint-disable-next-line complexity
export const ClubCard = ({ club, isSelected, onClick }: ClubCardProps) => {
  const isEnrolled = !!club.isEnrolled;
  const isFull = club.currentMembers >= club.maxMembers;

  // Нөхцөл шалгах логикийг хамгийн бага түвшинд барих
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
      whileHover={{ scale: 1.01, x: 4 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'relative w-full rounded-2xl border p-5 text-left transition-all duration-300',
        theme.container
      )}
      onClick={handleOnClick}
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <h3
            className={cn(
              'text-lg font-black uppercase tracking-tight',
              theme.text
            )}
          >
            {club.name}
          </h3>
          <span
            className={cn(
              'rounded px-2 py-0.5 text-[9px] font-black',
              theme.badge
            )}
          >
            {theme.label}
          </span>
        </div>

        <div className="space-y-1 text-[11px] font-bold text-white/40 uppercase">
          <div className="flex items-center gap-2">
            <Clock size={12} /> {club.schedule} • {club.time}
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={12} /> {club.class}
          </div>
        </div>

        <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
          <div
            className={cn('h-full transition-all duration-500', theme.bar)}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.button>
  );
};
