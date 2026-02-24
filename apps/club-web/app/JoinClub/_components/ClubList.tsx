'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClubCard } from './ClubCard';
import { Club } from '../../../lib/type';

interface ExtendedClub extends Club {
  isEnrolled?: boolean;
  bannedUntil?: number;
}

interface ClubListProps {
  clubs: ExtendedClub[];
  selectedClubId: number;
  onSelect: (_id: number) => void;
}

export const ClubList = ({
  clubs,
  selectedClubId,
  onSelect,
}: ClubListProps) => {
  return (
    <div className="w-full lg:w-[380px] flex flex-col h-full max-h-[calc(100vh-160px)]">
      <div className="mb-6 px-1 flex justify-between items-center">
        <div className="space-y-1">
          <h2 className="text-white/90 font-bold text-lg tracking-tight">
            Клубууд
          </h2>
          <p className="text-[12px] font-medium text-white/40 tracking-normal">
            Өөрийн ур чадвараа дараагийн түвшинд гарга
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-3 custom-scrollbar">
        <div className="flex flex-col gap-3 pb-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {clubs.map((club) => (
              <motion.div
                key={club.id}
                layout // Жагсаалт өөрчлөгдөхөд зөөлөн шилжихэд тусална
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 40,
                  mass: 1,
                }}
              >
                <ClubCard
                  club={club}
                  isSelected={selectedClubId === club.id}
                  onClick={onSelect}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
