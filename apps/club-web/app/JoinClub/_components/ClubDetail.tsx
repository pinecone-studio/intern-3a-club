'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Award } from 'lucide-react';
import { Club } from '../../../lib/type';
import { ClubInfoGrid } from './ClubInfoGrid';
import { ClubActionButtons } from './ClubActionButton';

interface ClubDetailProps {
  selectedClub: (Club & { isEnrolled?: boolean }) | undefined;
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
  const handleEnroll = () => {
    if (selectedClub) onEnroll(selectedClub.id);
  };

  const handleLeave = () => {
    if (selectedClub) onLeave(selectedClub.id);
  };

  // Student ID Badge - Илүү гүн өнгөтэй болгов
  const StudentIdBadge = ({ id }: { id: string }) => (
    <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center transition-all hover:bg-white/10 hover:border-white/20">
      <span className="text-[10px] font-medium text-white/40 tracking-wider">
        {id}
      </span>
    </div>
  );

  if (!selectedClub)
    return (
      <div className="flex-1 w-full h-full flex items-center justify-center min-h-[400px]">
        <div className="text-white/50 text-xl font-medium">Клуб сонгоно уу</div>
      </div>
    );

  return (
    <div className="flex-1 w-full h-full">
      {/* Үндсэн контейнер -rgba(5, 10, 18, 0.6) ашиглан арын дэвсгэртэй уусгав */}
      <div className="relative h-full rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_20%_30%,_rgba(29,78,216,0.25)_0%,_transparent_30%),_radial-gradient(circle_at_20%_30%,_rgba(100,116,139,0.15)_0%,_transparent_90%)] p-8 lg:p-10 backdrop-blur-2xl overflow-hidden shadow-2xl">
        {/* Арын фонны туяа - Таны хэлсэн rgba цэнхэр туяаг энд ашиглав */}
        <div
          className="absolute -top-24 -right-24 w-80 h-80 opacity-20 blur-[120px] rounded-full pointer-events-none"
          style={{ backgroundColor: 'rgba(29, 78, 216, 0.8)' }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedClub.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            {/* Header */}
            <header className="mb-10 flex items-start justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-bold text-blue-400 uppercase tracking-[0.1em] border border-blue-500/20">
                    <Award size={12} /> Premium Club
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
                  {selectedClub.name}
                </h1>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <ShieldCheck className="h-8 w-8 text-blue-400/50" />
              </div>
            </header>

            {/* Description/Goal */}
            <div className="mb-12 relative max-w-3xl">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 to-transparent" />
              <div className="pl-6">
                <h4 className="text-[10px] text-blue-400/60 font-bold uppercase tracking-[0.2em] mb-3">
                  Зорилго болон чиглэл
                </h4>
                <p className="text-xl text-white/80 font-light leading-relaxed">
                  {selectedClub.description}
                </p>
              </div>
            </div>

            {/* Mentor Cards - Өнгийг rgba(5, 10, 18, 0.8) болгож өөрчлөв */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {selectedClub?.instructors?.map((ins) => (
                <div
                  key={ins.name}
                  className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="relative h-14 w-14 rounded-full border border-white/10 p-1 shrink-0 group-hover:border-blue-500/50 transition-colors">
                    <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-500/20 to-transparent flex items-center justify-center font-bold text-blue-400">
                      {ins.name[0]}
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase text-white/30 tracking-widest mb-0.5">
                      МЕНТОР
                    </p>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {ins.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Grid Section */}
            <div className="bg-white/[0.02] rounded-3xl border border-white/5 p-8 mb-6">
              <ClubInfoGrid
                schedule={selectedClub.schedule}
                className={selectedClub.class}
                current={selectedClub.currentMembers}
                max={selectedClub.maxMembers}
              />
            </div>

            {/* Students Section */}
            <div className="space-y-4">
              <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.3em] ml-1">
                Бүртгүүлсэн суралцагчид
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                {['STU013', 'STU014', 'STU015', 'STU027'].map((id) => (
                  <StudentIdBadge key={id} id={id} />
                ))}
              </div>
            </div>

            {/* Action Buttons Container */}
            <div className="mt-12 pt-8 border-t border-white/10">
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
