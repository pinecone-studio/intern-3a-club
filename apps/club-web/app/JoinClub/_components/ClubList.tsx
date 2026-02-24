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
    <div className="w-full lg:w-[380px] shrink-0">
      <div className="h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar">
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {clubs.map((club) => (
              <motion.div
                key={club.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
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

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};
