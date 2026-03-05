'use client';
import React from 'react';

export const JoinedMembersList = ({ lastnames }: { lastnames: string[] }) => {
  return (
    <div className='flex items-center mt-4'>
      <div>
        <p className="text-xs text-white/40 shrink-0">
          Элссэн гишүүд :
        </p>

        <div className="flex flex-wrap items-center gap-2 pt-2 pl-1">
          {lastnames.length === 0 ? (
            <p className="text-xs py-1 rounded-md bg-white/5 text-white/70 px-1 ">
              Одоогоор гишүүн алга
            </p>
          ) : (
            lastnames.map((name, index) => (
              <span
                key={`${name}-${index}`}
                className="inline-flex items-center px-2 py-1 rounded-md bg-white/5 text-[11px] text-white/70"
              >
                {name}  
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}