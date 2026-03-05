'use client';
import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { cn } from 'lib/utils';
import { ExtendedClub, ApprovedClubTimetable } from '../../../lib/type';
import { CgSandClock } from 'react-icons/cg';

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

const toStartTimestamp = (date?: string, time?: string): number | null => {
  if (!date || !time) return null;
  const value = new Date(`${date}T${time}:00`).getTime();
  return Number.isNaN(value) ? null : value;
};

const getNextTimetable = (
  timetables?: ApprovedClubTimetable[]
): ApprovedClubTimetable | undefined => {
  const now = Date.now();
  return (timetables || [])
    .map((timetable) => ({
      timetable,
      start: toStartTimestamp(timetable.date, timetable.clubStartTime),
    }))
    .filter(
      (item): item is { timetable: ApprovedClubTimetable; start: number } =>
        item.start !== null
    )
    .sort((a, b) => a.start - b.start)
    .find((item) => item.start >= now)?.timetable;
};

const getTimeLeftText = (timetable?: ApprovedClubTimetable): string | null => {
  const start = toStartTimestamp(timetable?.date, timetable?.clubStartTime);
  if (!start) return null;
  const diffMs = start - Date.now();
  if (diffMs <= 0) return null;
  const totalHours = Math.ceil(diffMs / (1000 * 60 * 60));
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;

  if (days > 0 && hours > 0) return `${days} өдөр ${hours} цагийн дараа`;
  if (days > 0) return `${days} өдрийн дараа`;
  return `${hours} цагийн дараа`;
};

const ClubSchedule = ({ timetable }: { timetable?: ApprovedClubTimetable }) => {
  const scheduleText = timetable
    ? `${timetable.date} • ${timetable.clubStartTime}`
    : 'Хугацаа тодорхойгүй';
  const timeLeftText = getTimeLeftText(timetable);

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
      {timeLeftText ? (
        <div className="flex items-center gap-2 text-[10px] text-white/40 font-medium">
          <CgSandClock size={10} strokeWidth={2.5} />
          <span>{timeLeftText}</span>
        </div>
      ) : null}
    </div>
  );
};

export const ClubCard = ({ club, isSelected, onClick }: ClubCardProps) => {
  const handleCardClick = () => onClick(club.id);
  const isBanned = (club.bannedUntil ?? 0) > Date.now();
  const isEnrolled = !!club.isEnrolled;
  const nextTimetable =
    getNextTimetable(club.timetables) || club.timetables?.[0];

  const getContainerClass = () => {
    if (isBanned) return 'bg-red-600/10 border-red-500/70';
    if (isEnrolled) return 'bg-emerald-600/15 border-emerald-500/70';
    if (isSelected) return 'bg-blue-600/20 border-blue-500';
    return 'bg-blue-600/20 border-white/5';
  };

  const getTitleClass = () => {
    if (isEnrolled) return 'text-emerald-200';
    if (isSelected) return 'text-white';
    return 'text-white/70';
  };

  const containerClass = cn(
    'w-full p-4 rounded-xl cursor-pointer border transition-colors duration-150',
    getContainerClass()
  );

  const titleClass = cn(
    'text-xs font-semibold uppercase truncate',
    getTitleClass()
  );

  return (
    <div onClick={handleCardClick} className={containerClass}>
      <div className="flex justify-between items-start mb-2 gap-2">
        <h3 className={titleClass}>{club.name}</h3>
        <EnrollmentBadge isEnrolled={!!club.isEnrolled} />
      </div>
      <ClubSchedule timetable={nextTimetable} />
    </div>
  );
};
