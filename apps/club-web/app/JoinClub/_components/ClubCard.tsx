'use client';
import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { cn } from 'lib/utils';
import { ExtendedClub, ApprovedClubTimetable } from '../../../lib/type';
import { CgSandClock } from "react-icons/cg";
import { getEnrollmentDeadline, isEnrollmentOpen } from './clubs-utils';
import {
  getRoomText,
  getTimeLeftText,
  getContainerKey,
  getTitleKey,
  getNextTimetable,
  getDeadlineClass,
  getDeadlineText,
} from './club-card-utils';

interface ClubCardProps {
  club: ExtendedClub;
  isSelected: boolean;
  onClick: (_id: string) => void;
}

interface ClubScheduleProps {
  timetable?: ApprovedClubTimetable;
  createdAt: string;
}

const EnrollmentBadge = ({ isEnrolled }: { isEnrolled: boolean }) => {
  if (!isEnrolled) return null;
  return (
    <span className="text-[9px] font-medium text-blue-400 border border-blue-400/30 px-1.5 py-0.5 rounded uppercase shrink-0">
      Элссэн
    </span>
  );
};

const CONTAINER_CLASSES = {
  banned:   'bg-red-600/10 border-red-500/70',
  expired:  'bg-white/5 border-white/5',
  enrolled: 'bg-emerald-600/15 border-emerald-500/70',
  selected: 'bg-blue-600/20 border-blue-500',
  default:  'bg-blue-600/20 border-white/5',
} as const;

const TITLE_CLASSES = {
  expired:  'text-white/30',
  enrolled: 'text-emerald-200',
  selected: 'text-white',
  default:  'text-white/70',
} as const;

const ClubSchedule = ({ timetable, createdAt }: ClubScheduleProps) => {
  const timeLeftText = getTimeLeftText(timetable);
  const deadline = getEnrollmentDeadline(createdAt);
  const expired = !isEnrollmentOpen(createdAt);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2 text-[10px] text-white/40 font-medium">
        <MapPin size={12} strokeWidth={2.5} />
        <span className="truncate">{getRoomText(timetable)}</span>
      </div>
      {timeLeftText && (
        <div className="flex items-center gap-x-2.5 text-[10px] text-white/40 font-medium">
          <CgSandClock className="opacity-60" size={10} strokeWidth={2.5} />
          <span>{timeLeftText}</span>
        </div>
      )}
      <div className={getDeadlineClass(expired)}>
        <Clock size={12} strokeWidth={2.5} />
        <span>{getDeadlineText(expired, deadline)}</span>
      </div>
    </div>
  );
};

export const ClubCard = ({ club, isSelected, onClick }: ClubCardProps) => {
  const handleCardClick = () => onClick(club.id);
  const isBanned   = (club.bannedUntil ?? 0) > Date.now();
  const isEnrolled = !!club.isEnrolled;
  const isExpired  = !isEnrollmentOpen(club.createdAt);
  const nextTimetable = getNextTimetable(club.timetables) ?? club.timetables?.[0];

  const containerClass = cn(
    'w-full p-4 rounded-xl cursor-pointer border transition-colors duration-150',
    CONTAINER_CLASSES[getContainerKey(isBanned, isExpired, isEnrolled, isSelected)]
  );
  const titleClass = cn(
    'text-xs font-semibold uppercase truncate',
    TITLE_CLASSES[getTitleKey(isExpired, isEnrolled, isSelected)]
  );

  return (
    <div onClick={handleCardClick} className={containerClass}>
      <div className="flex justify-between items-start mb-2 gap-2">
        <h3 className={titleClass}>{club.name}</h3>
        <EnrollmentBadge isEnrolled={isEnrolled} />
      </div>
      <ClubSchedule timetable={nextTimetable} createdAt={club.createdAt} />
    </div>
  );
};