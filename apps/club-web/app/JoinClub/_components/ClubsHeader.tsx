'use client';
import React from 'react';

interface ClubsHeaderProps {
  openClubsCount: number;
}

export const ClubsHeader = ({ openClubsCount }: ClubsHeaderProps) => {
  return (
    <div className="flex items-end justify-between border-b border-white/5 pb-8 mb-8">
      <div className="space-y-1">
        <h2 className="text-4xl font-[1000] uppercase tracking-tighter text-white leading-none">
          Клубууд
        </h2>
        <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/30">
          Өөрийн ур чадвараа дараагийн түвшинд гарга
        </p>
      </div>

      <div className="flex items-center gap-6">
        {/* Аватар овоолго (Avatar Stack) */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-9 w-9 rounded-full border-[3px] border-[#050c1f] bg-gradient-to-br from-white/20 to-white/5 shadow-xl flex items-center justify-center overflow-hidden"
              >
                <div className="h-full w-full bg-blue-500/20" />
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
              {openClubsCount} нээлттэй клуб
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
