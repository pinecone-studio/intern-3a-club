'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { Club } from '../../../lib/type';
// import { cn } from 'lib/utils';
// import { InstructorCard } from './InsructorCard';
import { ClubInfoGrid } from './ClubInfoGrid';
import { ClubActionButtons } from './ClubActionButton';

// 1. Алга болсон interface-ийг нэмж өгнө
interface ClubDetailProps {
  selectedClub: Club & { isEnrolled?: boolean };
  onEnroll: (_id: number) => void;
  onLeave: (_id: number) => void;
  isLocked: boolean;
  remainingTime: number;
}

export const ClubDetail = ({
  selectedClub,
  onEnroll,
  onLeave,
  isLocked,
  remainingTime,
}: ClubDetailProps) => {
  // 2. Грид классыг complexity багасгахын тулд гадна тооцоолох
  // const gridCols =
  //   selectedClub.instructors.length === 1
  //     ? 'grid-cols-1'
  //     : 'grid-cols-1 md:grid-cols-2';

  const handleEnroll = () => {
    onEnroll(selectedClub.id);
  };

  const handleLeave = () => {
    onLeave(selectedClub.id);
  };

  const StudentIdBadge = ({ id }: { id: string }) => (
    <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
      <span className="text-[10px] font-bold text-white/50 tracking-tighter">
        ID: {id}
      </span>
    </div>
  );

  return (
    <div className="flex-1 space-y-6">
      <div className="relative min-h-[500px] rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedClub.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Header */}
            <header className="mb-8 flex items-start justify-between">
              <div>
                <span className="rounded bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold text-blue-400 uppercase">
                  Premium Club
                </span>
                <h1 className="text-4xl font-black uppercase text-white mt-2">
                  {selectedClub.name}
                </h1>
              </div>
              <ShieldCheck className="h-12 w-12 text-white/10" />
            </header>

            {/* Goal */}
            <div className="mb-8 border-l-2 border-blue-400 border-primary/30 pl-6">
              <h4 className="text-xs text-blue-500 font-bold uppercase tracking-[0.2em] text-primary mb-2">
                Зорилго
              </h4>
              <p className="text-lg italic text-gray-300 text-muted-foreground leading-relaxed">
                {selectedClub.description}
              </p>
            </div>

            {/* Instructors Grid */}
            {/* <section className="mb-8 overflow-hidden rounded-[2rem] bg-white/5 border border-white/5">
              <div className={cn('grid divide-white/5', gridCols)}>
                {selectedClub.instructors.map((ins, idx) => (
                  <InstructorCard
                    key={`${ins.name}-${idx}`}
                    instructor={ins}
                    isMultiple={selectedClub.instructors.length > 1}
                  />
                ))}
              </div>
            </section> */}

            <div className="grid grid-cols-2 gap-4 mb-10">
              {selectedClub.instructors.map((ins) => (
                <div
                  key={ins.name}
                  className="flex items-center gap-4 rounded-3xl border border-white/5 bg-white/[0.02] p-6"
                >
                  <div className="relative h-14 w-14 rounded-full border-2 border-blue-500/50 p-1">
                    <div className="h-full w-full rounded-full bg-blue-500/20 flex items-center justify-center font-bold text-white uppercase">
                      {ins.name[0]}
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase text-blue-400">
                      МЕНТОР
                    </p>
                    <h3 className="text-lg font-black uppercase text-white">
                      {ins.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Info and Progress */}
            <ClubInfoGrid
              schedule={selectedClub.schedule}
              className={selectedClub.class}
              current={selectedClub.currentMembers}
              max={selectedClub.maxMembers}
            />

            <div className="grid grid-cols-4 gap-2 mt-4">
              {['STU013', 'STU014', 'STU015', 'STU027'].map((id) => (
                <StudentIdBadge key={id} id={id} />
              ))}
            </div>

            {/* Enrollment Logic */}
            <div className="mt-8">
              <ClubActionButtons
                isEnrolled={Boolean(selectedClub.isEnrolled)}
                isLocked={isLocked}
                status={selectedClub.status}
                remainingTime={remainingTime}
                onEnroll={handleEnroll}
                onLeave={handleLeave}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
