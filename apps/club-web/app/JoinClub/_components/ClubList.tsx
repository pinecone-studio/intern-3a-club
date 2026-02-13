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
    <div className="w-full space-y-4 lg:w-[400px]">
      {/* Custom Scroll Container */}
      <div className="h-[calc(100vh-250px)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/10">
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {clubs.map((club) => (
              <motion.div
                key={club.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
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
