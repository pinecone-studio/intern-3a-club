'use client';
import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { cn } from 'lib/utils';
import { ExtendedClub, ApprovedClubTimetable } from '../../../lib/type';
import { getEnrollmentStatus, EnrollmentStatus } from './utils/clubs-utils';
import {
  getRoomText,
  getNextTimetable,
  getDeadlineClass,
  getDeadlineText,
  getContainerClass,
  getTitleClass,
  ClubStatusFlags,
} from './utils/club-card-utils';

interface ClubCardProps {
  club: ExtendedClub;
  isSelected: boolean;
  onClick: (_id: string) => void;
  nowTs?: number;
}

interface ClubScheduleProps {
  timetable?: ApprovedClubTimetable;
  createdAt: string;
  startDate: string;
  status: EnrollmentStatus;
  nowTs: number;
}

interface EnrollmentBadgeProps {
  isEnrolled: boolean;
}

interface BanCountdownProps {
  bannedUntil: number;
  nowTs: number;
}

const EnrollmentBadge = ({ isEnrolled }: EnrollmentBadgeProps) => {
  if (!isEnrolled) return null;
  return (
    <span className="text-[9px] font-medium text-[rgb(5,150,105)] border border-[rgb(5,150,105)]/50 bg-[rgb(5,150,105)]/10 px-1.5 py-0.5 rounded uppercase shrink-0">
      Элссэн
    </span>
  );
};

const BanCountdown = ({ bannedUntil, nowTs }: BanCountdownProps) => {
  const remainMs = Math.max(0, bannedUntil - nowTs);
  const remainSec = Math.ceil(remainMs / 1000);
  if (remainSec <= 0) return null;
  return (
    <span className="text-[9px] font-medium text-red-300 border border-red-400/40 px-1.5 py-0.5 rounded uppercase shrink-0">
      {remainSec}s
    </span>
  );
};

const ClubSchedule = ({
  timetable,
  createdAt,
  startDate,
  status,
  nowTs,
}: ClubScheduleProps) => (
  <div className="flex flex-col gap-1">
    <div className={cn(getDeadlineClass(status), 'items-start')}>
      <Clock size={12} strokeWidth={2.5} className="mt-[2px] shrink-0" />
      <span>{getDeadlineText(status, createdAt, startDate, nowTs)}</span>
    </div>
    <div className="flex items-center gap-2 text-[10px] text-white/40 font-medium">
      <MapPin size={12} strokeWidth={2.5} className="shrink-0" />
      <span className="truncate">{getRoomText(timetable)}</span>
    </div>
  </div>
);

const getBanUntil = (club: ExtendedClub): number =>
  Number(club.bannedUntil ?? 0);

const getStatusFlags = (
  status: EnrollmentStatus,
  banUntil: number,
  nowTs: number
) => ({
  isBannedAndOpen: banUntil > nowTs && status === 'open',
  isExpired: status === 'expired',
  isPending: status === 'pending',
});

const buildFlags = (
  club: ExtendedClub,
  isSelected: boolean,
  nowTs: number
): ClubStatusFlags => {
  const status = getEnrollmentStatus(club.createdAt, club.startDate, nowTs);
  const banUntil = getBanUntil(club);
  return {
    ...getStatusFlags(status, banUntil, nowTs),
    isEnrolled: !!club.isEnrolled,
    isSelected,
  };
};

export const ClubCard = ({
  club,
  isSelected,
  onClick,
  nowTs = Date.now(),
}: ClubCardProps) => {
  const handleClick = () => onClick(club.id);
  const status = getEnrollmentStatus(club.createdAt, club.startDate, nowTs);
  const flags = buildFlags(club, isSelected, nowTs);
  const nextTimetable =
    getNextTimetable(club.timetables) ?? club.timetables?.[0];

  return (
    <div onClick={handleClick} className={getContainerClass(flags)}>
      <div className="flex justify-between items-start mb-2 gap-2">
        <h3 className={getTitleClass(flags)}>{club.name}</h3>
        <div className="flex items-center gap-1.5">
          {flags.isBannedAndOpen && (
            <BanCountdown bannedUntil={getBanUntil(club)} nowTs={nowTs} />
          )}
          <EnrollmentBadge isEnrolled={flags.isEnrolled} />
        </div>
      </div>
      <ClubSchedule
        timetable={nextTimetable}
        createdAt={club.createdAt}
        startDate={club.startDate}
        status={status}
        nowTs={nowTs}
      />
    </div>
  );
};
