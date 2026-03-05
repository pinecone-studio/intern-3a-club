'use client';
import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { cn } from 'lib/utils';
import { ExtendedClub, ApprovedClubTimetable } from '../../../lib/type';
import { CgSandClock } from "react-icons/cg";

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

const hasDateAndTime = (date?: string, time?: string): date is string =>
  Boolean(date && time);

const parseTimestamp = (date: string, time: string): number | null => {
  const value = new Date(`${date}T${time}:00`).getTime();
  return Number.isNaN(value) ? null : value;
};

const toStartTimestamp = (date?: string, time?: string): number | null => {
  if (!hasDateAndTime(date, time)) return null;
  return parseTimestamp(date, time as string);
};

type TimetableWithStart = { timetable: ApprovedClubTimetable; start: number };
const toTimetableWithStart = (t: ApprovedClubTimetable): TimetableWithStart | null => {
  const start = toStartTimestamp(t.date, t.clubStartTime);
  if (start === null) return null;
  return { timetable: t, start };
};

export const getNextTimetable = (
  timetables?: ApprovedClubTimetable[]
): ApprovedClubTimetable | undefined => {
  const now = Date.now();
  return (timetables || [])
    .map(toTimetableWithStart)
    .filter((item): item is TimetableWithStart => item !== null)
    .sort((a, b) => a.start - b.start)
    .find((item) => item.start >= now)?.timetable;
};

const formatDaysAndHours = (days: number, hours: number): string =>
  `${days} өдөр ${hours} цагийн дараа`;

const formatDaysOnly = (days: number): string => `${days} өдрийн дараа`;

const formatHoursOnly = (hours: number): string => `${hours} цагийн дараа`;

const formatTimeLeft = (days: number, hours: number): string => {
  if (days > 0) return hours > 0 ? formatDaysAndHours(days, hours) : formatDaysOnly(days);
  return formatHoursOnly(hours);
};

const diffToTimeLeft = (diffMs: number): string => {
  const totalHours = Math.ceil(diffMs / (1000 * 60 * 60));
  return formatTimeLeft(Math.floor(totalHours / 24), totalHours % 24);
};

const getTimeLeftText = (timetable?: ApprovedClubTimetable): string | null => {
  const start = toStartTimestamp(timetable?.date, timetable?.clubStartTime);
  if (!start) return null;
  const diffMs = start - Date.now();
  if (diffMs <= 0) return null;
  return diffToTimeLeft(diffMs);

};

const getScheduleText = (timetable?: ApprovedClubTimetable): string =>
  timetable ? `${timetable.date} • ${timetable.clubStartTime}` : 'Хугацаа тодорхойгүй';

const getRoomText = (timetable?: ApprovedClubTimetable): string =>
  timetable?.room ?? 'Өрөө тодорхойгүй';

const ClubSchedule = ({ timetable }: { timetable?: ApprovedClubTimetable }) => {
  const timeLeftText = getTimeLeftText(timetable);
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2 text-[10px] text-white/40 font-medium">
        <Clock size={12} strokeWidth={2.5} />
        <span>{getScheduleText(timetable)}</span>
      </div>
      <div className="flex items-center gap-2 text-[10px] text-white/40 font-medium">
        <MapPin size={12} strokeWidth={2.5} />
        <span className="truncate">{getRoomText(timetable)}</span>
      </div>
      {timeLeftText && (
        <div className="flex items-center gap-x-2.5 text-[10px] text-white/40 font-medium">
          <CgSandClock className='opacity-60' size={10} strokeWidth={2.5} />
          <span>{timeLeftText}</span>
        </div>
      )}
    </div>
  );
};

const CONTAINER_CLASSES = {
  banned:   'bg-red-600/10 border-red-500/70',
  enrolled: 'bg-emerald-600/15 border-emerald-500/70',
  selected: 'bg-blue-600/20 border-blue-500',
  default:  'bg-blue-600/20 border-white/5',
} as const;

const TITLE_CLASSES = {
  enrolled: 'text-emerald-200',
  selected: 'text-white',
  default:  'text-white/70',
} as const;

const getContainerKeyForState = (isEnrolled: boolean, isSelected: boolean) =>
  isEnrolled ? 'enrolled' : isSelected ? 'selected' : 'default';

type ContainerKey = keyof typeof CONTAINER_CLASSES;

const getContainerKey = (isBanned: boolean, isEnrolled: boolean, isSelected: boolean): ContainerKey => {
  if (isBanned) return 'banned';
  return getContainerKeyForState(isEnrolled, isSelected);
};

const getTitleKey = (isEnrolled: boolean, isSelected: boolean) =>
  isEnrolled ? 'enrolled' : isSelected ? 'selected' : 'default';



export const ClubCard = ({ club, isSelected, onClick }: ClubCardProps) => {
  const handleCardClick = () => onClick(club.id);
  const isBanned = (club.bannedUntil ?? 0) > Date.now();
  const isEnrolled = !!club.isEnrolled;
  const nextTimetable = getNextTimetable(club.timetables) || club.timetables?.[0];

  const containerClass = cn(
    'w-full p-4 rounded-xl cursor-pointer border transition-colors duration-150',
    CONTAINER_CLASSES[getContainerKey(isBanned, isEnrolled, isSelected)]
  );
  const titleClass = cn(
    'text-xs font-semibold uppercase truncate',
    TITLE_CLASSES[getTitleKey(isEnrolled, isSelected)]
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
