'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Award } from 'lucide-react';
import { ExtendedClub } from '../../../lib/type';

interface ClubDetailProps {
  selectedClub: ExtendedClub | undefined;
  onEnroll: (_id: string) => void;
  onLeave: (_id: string) => void;
  isLocked: boolean;
  remainingTime: number;
  // club: GetAllClub & { isEnrolled?: boolean; bannedUntil?: number };
}

export const ClubDetail = ({
  selectedClub,
}: // onEnroll,
// onLeave,
// isLocked,
// remainingTime,
ClubDetailProps) => {
  if (!selectedClub)
    return (
      <div className="flex-1 w-full h-full flex items-center justify-center min-h-[400px]">
        <div className="text-white/50 text-xl font-medium">Клуб сонгоно уу</div>
      </div>
    );

  // const handleEnroll = () => {
  //   onEnroll(selectedClub.id);
  // };

  // const handleLeave = () => {
  //   onLeave(selectedClub.id);
  // };

  const StudentIdBadge = ({ id }: { id: string }) => (
    <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center transition-all hover:bg-white/10 hover:border-white/20">
      <span className="text-[10px] font-medium text-white/40 tracking-wider">
        {id}
      </span>
    </div>
  );

  return (
    <div className="flex-1 h-full pt-8 w-full lg:w-[400px]">
      <div className="relative  h-full rounded-3xl bg-[radial-gradient(circle_at_20%_30%,_rgba(29,78,216,0.25)_0%,_transparent_30%),_radial-gradient(circle_at_20%_30%,_rgba(100,116,139,0.15)_0%,_transparent_90%)] p-8 overflow-hidden shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div key={selectedClub.id}>
            {/* Header */}
            <header className="mb-8 flex items-start justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-[8px] font-bold text-blue-400 uppercase tracking-[0.1em] border border-blue-500/20">
                    <Award size={12} /> Premium Club
                  </div>
                </div>
                <h1 className="md:text-3xl font-extrabold tracking-tight text-white/90">
                  {selectedClub.name}
                </h1>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <ShieldCheck className="h-6 w-6 text-blue-400/50 " />
              </div>
            </header>

            {/* Description/Goal */}
            <div className="mb-3 relative max-w-3xl">
              <div className="absolute left-0 top-0 bottom-0 w-[1.8px] rounded-full bg-gradient-to-b from-blue-500/50 to-transparent" />
              <div className="pl-3">
                <h4 className="text-[7px] text-blue-400/60 font-bold uppercase tracking-[0.2em] ">
                  Зорилго болон чиглэл
                </h4>
                <p className="text-xl text-white/80 font-light leading-relaxed">
                  {selectedClub.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
              <div className="flex items-center gap-4 rounded-full border border-white/5 bg-white/[0.03] py-3 px-3 hover:bg-white/[0.06] transition-all group">
                <div className="relative h-9 w-9 rounded-full border border-white/10 p-1 shrink-0 group-hover:border-blue-500/50 transition-colors">
                  <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-500/20 to-transparent flex items-center justify-center font-bold text-blue-400">
                    {/* {selectedClub.teacherId[0]} */} Б
                  </div>
                </div>
                <div>
                  <p className="text-[8px] font-bold uppercase text-white/30 tracking-widest mb-0.5">
                    Багш
                  </p>
                  <h3 className="text-[13px] font-medium text-white group-hover:text-blue-400 transition-colors">
                    {selectedClub.teacherId}
                  </h3>
                </div>
              </div>
            </div>

            {/* Info Grid Section */}
            <div className="bg-white/[0.02] rounded-3xl border border-white/5 p-8 mb-6">
              {/* <ClubInfoGrid
                // schedule={club.schedule}
                club={selectedClub.class}
                minMember={selectedClub.minMember}
                maxMember={selectedClub.maxMember}
              /> */}
            </div>

            {/* Students Section */}
            <div className="space-y-4">
              <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] ml-1">
                Бүртгүүлсэн суралцагчид
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                {['25LP9878', '25LP4578', '25LP6786', '25LP2344'].map((id) => (
                  <StudentIdBadge key={id} id={id} />
                ))}
              </div>
            </div>

            {/* Action Buttons Container */}
            <div className="mt-12 pt-8 border-t border-white/10">
              {/* <ClubActionButtons
                isEnrolled={Boolean(selectedClub.isEnrolled)}
                isLocked={isLocked}
                status={selectedClub.status}
                remainingTime={remainingTime}
                onEnroll={handleEnroll}
                onLeave={handleLeave}
              /> */}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
