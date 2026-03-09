import { ExtendedClub } from '../../../../lib/type';
import { getEnrollmentStatus, toStartTimestamp } from './clubs-utils';

const hasDateAndTime = (t: {
  date?: string;
  clubStartTime?: string;
}): t is { date: string; clubStartTime: string } =>
  Boolean(t.date && t.clubStartTime);

const isValidFuture = (ts: number | null, now: number): ts is number =>
  ts !== null && ts >= now;

const timetableToTimestamp = (
  t: { date?: string; clubStartTime?: string },
  now: number
): number | null => {
  if (!hasDateAndTime(t)) return null;
  const ts = toStartTimestamp(t.date, t.clubStartTime);
  return isValidFuture(ts, now) ? ts : null;
};

export const getNearestUpcomingStart = (club: ExtendedClub): number | null => {
  const now = Date.now();
  const futures = (club.timetables || [])
    .map((t) => timetableToTimestamp(t, now))
    .filter((t): t is number => t !== null)
    .sort((a, b) => a - b);
  return futures[0] ?? null;
};

const isBanned = (club: ExtendedClub): boolean =>
  (club.bannedUntil ?? 0) > Date.now();

const sortByBan = (a: ExtendedClub, b: ExtendedClub): number | null => {
  const aBanned = isBanned(a);
  const bBanned = isBanned(b);
  if (aBanned === bBanned) return null;
  return aBanned ? 1 : -1;
};

const isExpiredClub = (club: ExtendedClub): boolean =>
  getEnrollmentStatus(club.createdAt, club.startDate) === 'expired';

const sortByExpired = (a: ExtendedClub, b: ExtendedClub): number | null => {
  const aExpired = isExpiredClub(a);
  const bExpired = isExpiredClub(b);
  if (aExpired === bExpired) return null;
  return aExpired ? 1 : -1;
};

const sortByEnrolled = (a: ExtendedClub, b: ExtendedClub): number | null => {
  if (a.isEnrolled === b.isEnrolled) return null;
  return a.isEnrolled ? -1 : 1;
};

const bothHaveValue = (a: number | null, b: number | null): boolean =>
  a !== null && b !== null;

const bothAreNull = (a: number | null, b: number | null): boolean =>
  a === null && b === null;

const compareWhenOneNull = (a: number | null): number => (a === null ? 1 : -1);

const compareByValue = (a: number, b: number): number => a - b;

function compareNearest(
  a: number | null,
  b: number | null,
  nameA: string,
  nameB: string
): number {
  if (bothHaveValue(a, b)) return compareByValue(a as number, b as number);
  if (bothAreNull(a, b)) return nameA.localeCompare(nameB);
  return compareWhenOneNull(a);
}

function compareByNearest(a: ExtendedClub, b: ExtendedClub): number {
  return compareNearest(
    getNearestUpcomingStart(a),
    getNearestUpcomingStart(b),
    a.name,
    b.name
  );
}

const applyPrioritySort = (a: ExtendedClub, b: ExtendedClub): number | null =>
  sortByBan(a, b) ?? sortByExpired(a, b) ?? sortByEnrolled(a, b);

export const compareByEnrollment = (a: ExtendedClub, b: ExtendedClub): number =>
  applyPrioritySort(a, b) ?? compareByNearest(a, b);
