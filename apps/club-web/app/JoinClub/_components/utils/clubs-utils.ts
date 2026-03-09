import { ExtendedClub, GetAllApprovedClub } from '../../../../lib/type';

export {
  compareByEnrollment,
  getNearestUpcomingStart,
} from './clubs-sort-utils';

export const formatDaysAndHours = (days: number, hours: number): string =>
  `${days} өдөр ${hours} цагийн дараа`;

export const formatDaysOnly = (days: number): string => `${days} өдрийн дараа`;

export const formatHoursOnly = (hours: number): string =>
  `${hours} цагийн дараа`;

const hasBothDaysAndHours = (days: number, hours: number): boolean =>
  days > 0 && hours > 0;

const hasDaysOnly = (days: number): boolean => days > 0;

export const formatTimeLeft = (days: number, hours: number): string => {
  if (hasBothDaysAndHours(days, hours)) return formatDaysAndHours(days, hours);
  if (hasDaysOnly(days)) return formatDaysOnly(days);
  return formatHoursOnly(hours);
};

export const diffToTimeLeft = (diffMs: number): string => {
  const totalHours = Math.ceil(diffMs / (1000 * 60 * 60));
  return formatTimeLeft(Math.floor(totalHours / 24), totalHours % 24);
};

export type EnrollmentStatus = 'pending' | 'open' | 'expired';

const isValidDateString = (val: string | null | undefined): val is string => {
  if (!val) return false;
  const ts = new Date(val).getTime();
  return !Number.isNaN(ts);
};

const getStatusFromDates = (
  startRegistration: number,
  startClub: number,
  nowTs: number
): EnrollmentStatus => {
  if (nowTs >= startClub) return 'expired';
  if (nowTs < startRegistration) return 'pending';
  return 'open';
};

export const getEnrollmentStatus = (
  createdAt: string | null | undefined,
  startDate: string | null | undefined,
  nowTs: number = Date.now()
): EnrollmentStatus => {
  if (!isValidDateString(startDate) || !isValidDateString(createdAt))
    return 'open';
  return getStatusFromDates(
    new Date(createdAt).getTime(),
    new Date(startDate).getTime(),
    nowTs
  );
};

export const isEnrollmentOpen = (
  createdAt: string,
  endDate: string,
  nowTs: number = Date.now()
): boolean => getEnrollmentStatus(createdAt, endDate, nowTs) === 'open';

export const toStartTimestamp = (date: string, time: string): number | null => {
  const value = new Date(`${date}T${time}:00`).getTime();
  return Number.isNaN(value) ? null : value;
};

// ── member helpers ────────────────────────────────────────────────────────────

type Member = { student?: { authUserId?: string }; studentId?: string };

const matchesStudent = (member: Member, id: string): boolean =>
  member.student?.authUserId === id;

const matchesStudentId = (member: Member, id: string): boolean =>
  member.studentId === id;

const isMemberMatch = (member: Member, clerkUserId: string): boolean =>
  matchesStudent(member, clerkUserId) || matchesStudentId(member, clerkUserId);

export const computeIsEnrolled = (
  club: Pick<GetAllApprovedClub, 'members'>,
  clerkUserId?: string
): boolean => {
  if (!clerkUserId) return false;
  return (club.members || []).some((m) => isMemberMatch(m, clerkUserId));
};

export const mapClub = (
  c: GetAllApprovedClub,
  clerkUserId?: string
): ExtendedClub => ({
  ...c,
  isEnrolled: computeIsEnrolled(c, clerkUserId),
  bannedUntil: 0,
});

// ── state updaters ────────────────────────────────────────────────────────────

const enrollClub = (c: ExtendedClub): ExtendedClub => ({
  ...c,
  isEnrolled: true,
  bannedUntil: 0,
});

const leaveClub = (c: ExtendedClub, banUntil: number): ExtendedClub => ({
  ...c,
  isEnrolled: false,
  bannedUntil: banUntil,
});

export const applyEnroll = (
  clubs: ExtendedClub[],
  id: string
): ExtendedClub[] => clubs.map((c) => (c.id === id ? enrollClub(c) : c));

export const applyLeave = (
  clubs: ExtendedClub[],
  id: string,
  banUntil: number
): ExtendedClub[] =>
  clubs.map((c) => (c.id === id ? leaveClub(c, banUntil) : c));

export const clearBan = (clubs: ExtendedClub[], id: string): ExtendedClub[] =>
  clubs.map((c) => (c.id === id ? { ...c, bannedUntil: 0 } : c));

// ── selection helper ──────────────────────────────────────────────────────────

const idExistsInList = (id: string, clubs: ExtendedClub[]): boolean =>
  id !== '' && clubs.some((c) => c.id === id);

export const resolveSelectedId = (
  prev: string,
  clubs: ExtendedClub[]
): string => (idExistsInList(prev, clubs) ? prev : clubs[0]?.id ?? '');
