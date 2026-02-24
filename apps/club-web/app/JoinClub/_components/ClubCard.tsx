'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import { cn } from 'lib/utils';
import { ClubCardProps } from '../../../lib/type';

const CARD_THEMES = {
  enrolled: {
    container: 'border-blue-500 bg-blue-500/10',
    badge: 'bg-blue-600 text-white',
    label: 'ИДЭВХТЭЙ',
  },
  full: {
    container: 'border-blue-500 bg-blue-500/10',
    badge: 'bg-gray-600 text-white/70',
    label: 'ДҮҮРСЭН',
  },
  selected: {
    container: 'border-blue-500 bg-blue-500/10',
    badge: 'bg-blue-600 text-white',
    label: 'НЭЭЛТТЭЙ',
  },
  default: {
    container: 'rounded-full bg-[#0a192f]/60',
    badge: 'bg-blue-600 text-white',
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
      className={cn(
        'relative w-full rounded-lg p-4 text-left transition-colors duration-200',
        'bg-blue-600/10 border border-white/[0.06] backdrop-blur-md',
        'hover:bg-blue-600/20 cursor-pointer select-none'
      )}
      onClick={handleOnClick}
    >
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <h3 className="text-[17px] font-bold text-white tracking-wide leading-tight">
            {club.name}
          </h3>
          <span
            className={cn(
              'rounded-xl px-2 py-0.5 text-[10px] font-bold',
              theme.badge
            )}
          >
            {theme.label}
          </span>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-[12px] text-white/70">
            <Clock
              size={13}
              strokeWidth={2.5}
              className="opacity-50 text-white/70"
            />
            <span className="font-medium">
              {club.schedule} • {club.time}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[12px] text-white/70">
            <MapPin
              size={13}
              strokeWidth={2.5}
              className="opacity-50 text-white/70"
            />
            <span className="font-medium">{club.class}</span>
          </div>
        </div>

        <div className="mt-1 h-[4px] w-full rounded-full bg-white">
          <div
            className="h-full bg-blue-600 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center gap-6 mt-auto pt-2"></div>
      </div>
    </motion.button>
  );
};
