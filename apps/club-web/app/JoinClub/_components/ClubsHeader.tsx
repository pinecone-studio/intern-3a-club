'use client';
import React from 'react';

interface ClubsHeaderProps {
  openClubsCount: number;
}

export const ClubsHeader = ({ openClubsCount }: ClubsHeaderProps) => {
  return (
    <div className="flex items-end justify-between border-b border-white/5 pb-6 mb-2">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold tracking-tight text-white leading-none">
          Клубууд
        </h2>
        <p className="text-[12px] font-medium text-white/40 tracking-normal">
          Өөрийн ур чадвараа дараагийн түвшинд гарга
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2.5">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-full border-2 border-[#0B0E14] bg-[#11161D] shadow-lg flex items-center justify-center overflow-hidden"
              >
                <div className="h-full w-full bg-gradient-to-br from-white/10 to-transparent" />
              </div>
            ))}
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded-md">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
              {openClubsCount} нээлттэй клуб
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};