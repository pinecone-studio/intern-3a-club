'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClubCard } from './ClubCard';
import { GetAllClub } from '../../../lib/type';

interface ClubListProps {
  clubs: GetAllClub[];
  selectedClubId: string;
  onSelect: (_id: string) => void;
}

export const ClubList = ({
  selectedClubId,
  onSelect,
  clubs,
}: ClubListProps) => {
  return (
    <div className="w-full lg:w-[320px] flex flex-col h-full max-h-[calc(100vh-160px)]">
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
        <div className="flex flex-col gap-4 pb-4">
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
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
