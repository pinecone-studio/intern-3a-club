'use client';
import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { cn } from 'lib/utils';
import { ExtendedClub, ApprovedClubTimetable } from '../../../lib/type';

interface ClubCardProps {
  club: ExtendedClub;
  isSelected: boolean;
  onClick: (_id: string) => void;
}

const EnrollmentBadge = ({ isEnrolled }: { isEnrolled: boolean }) => {
  if (!isEnrolled) return null;
  return (
    <span className="text-[9px] font-medium text-blue-400 border border-blue-400/30 px-1.5 py-0.5 rounded uppercase shrink-0">
      Элссэн
    </span>
  );
};

const ClubSchedule = ({ timetable }: { timetable?: ApprovedClubTimetable }) => {
  const scheduleText = timetable
    ? `${timetable.date} • ${timetable.clubStartTime}`
    : 'Хугацаа тодорхойгүй';

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2 text-[10px] text-white/40 font-medium">
        <Clock size={12} strokeWidth={2.5} />
        <span>{scheduleText}</span>
      </div>
      <div className="flex items-center gap-2 text-[10px] text-white/40 font-medium">
        <MapPin size={12} strokeWidth={2.5} />
        <span className="truncate">
          {timetable?.room || 'Өрөө тодорхойгүй'}
        </span>
      </div>
    </div>
  );
};

export const ClubCard = ({ club, isSelected, onClick }: ClubCardProps) => {
  const handleCardClick = () => onClick(club.id);
  const isBanned = (club.bannedUntil ?? 0) > Date.now();
  const isEnrolled = !!club.isEnrolled;

  const containerClass = cn(
    'w-full p-4 rounded-xl cursor-pointer border transition-colors duration-150',
    isBanned
      ? 'bg-red-600/10 border-red-500/70'
      : isEnrolled
        ? 'bg-emerald-600/15 border-emerald-500/70'
      : isSelected
        ? 'bg-blue-600/20 border-blue-500'
        : 'bg-blue-600/20 border-white/5'
  );

  const titleClass = cn(
    'text-sm font-bold uppercase truncate',
    isEnrolled ? 'text-emerald-200' : isSelected ? 'text-white' : 'text-white/70'
  );

  return (
    <div onClick={handleCardClick} className={containerClass}>
      <div className="flex justify-between items-start mb-2 gap-2">
        <h3 className={titleClass}>{club.name}</h3>
        <EnrollmentBadge isEnrolled={!!club.isEnrolled} />
      </div>
      <ClubSchedule timetable={club.timetables?.[0]} />
    </div>
  );
};
