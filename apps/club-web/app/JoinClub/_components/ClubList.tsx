'use client';
/* eslint-disable complexity */

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClubCard } from './ClubCard';
import { ExtendedClub } from '../../../lib/type';

interface ClubListProps {
  selectedClubId: string;
  onSelect: (_id: string) => void;
  clubs: ExtendedClub[];
  isLiveSyncing?: boolean;
  nowTs?: number;
}

export const ClubList = ({
  selectedClubId,
  onSelect,
  clubs,
  isLiveSyncing = false,
  nowTs = Date.now(),
}: ClubListProps) => {
  return (
    <div className="w-full lg:w-[320px] flex flex-col">
      <div className="mb-6 px-1 flex justify-between items-center">
        <div>
          <h2 className="text-white/90 font-semibold text-xl ">Клубууд</h2>
          <p className="text-xs text-white/50">
            Өөрийн ур чадвараа дараагийн түвшинд гарга
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              isLiveSyncing ? 'bg-emerald-400 animate-pulse' : 'bg-white/40'
            }`}
          />
          <span className="text-[10px] uppercase tracking-wider text-white/50">
            {isLiveSyncing ? 'Syncing...' : 'Live'}
          </span>
        </div>
      </div>

      <div className="flex-1">
        <div
          className={`flex flex-col gap-4 pb-4 transition-opacity ${
            isLiveSyncing ? 'opacity-90' : 'opacity-100'
          }`}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {clubs.map((item) => (
              <motion.div
                key={item.id}
                layout
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 40,
                  mass: 1,
                }}
              >
                <ClubCard
                  club={item}
                  isSelected={selectedClubId === item.id}
                  onClick={onSelect}
                  nowTs={nowTs}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
