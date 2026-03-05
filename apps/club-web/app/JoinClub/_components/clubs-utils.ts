import { ExtendedClub, GetAllApprovedClub } from '../../../lib/type';

// ── timestamp helpers ────────────────────────────────────────────────────────


export const toStartTimestamp = (date: string, time: string): number | null => {
  const value = new Date(`${date}T${time}:00`).getTime();
  return Number.isNaN(value) ? null : value;
};

const hasDateAndTime = (t: { date?: string; clubStartTime?: string }): t is {
  date: string;
  clubStartTime: string;
} => Boolean(t.date && t.clubStartTime);

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

// ── sort helpers ─────────────────────────────────────────────────────────────

const isBanned = (club: ExtendedClub): boolean =>
  (club.bannedUntil ?? 0) > Date.now();

const sortByBan = (a: ExtendedClub, b: ExtendedClub): number | null => {
  const aBanned = isBanned(a);
  const bBanned = isBanned(b);
  if (aBanned === bBanned) return null;
  return aBanned ? 1 : -1;
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

const compareNearest = (
  a: number | null,
  b: number | null,
  nameA: string,
  nameB: string
): number => {
  if (bothHaveValue(a, b)) return (a as number) - (b as number);
  if (bothAreNull(a, b)) return nameA.localeCompare(nameB);
  return compareWhenOneNull(a);
};

const compareByNearest = (a: ExtendedClub, b: ExtendedClub): number =>
  compareNearest(
    getNearestUpcomingStart(a),
    getNearestUpcomingStart(b),
    a.name,
    b.name
  );

export const compareByEnrollment = (a: ExtendedClub, b: ExtendedClub): number =>
  sortByBan(a, b) ?? sortByEnrolled(a, b) ?? compareByNearest(a, b);

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

export const mapClub = (c: GetAllApprovedClub, clerkUserId?: string): ExtendedClub => ({
  ...c,
  isEnrolled: computeIsEnrolled(c, clerkUserId),
  bannedUntil: 0,
});

// ── state updaters ────────────────────────────────────────────────────────────

const enrollClub = (c: ExtendedClub): ExtendedClub => ({
  ...c, isEnrolled: true, bannedUntil: 0,
});

const leaveClub = (c: ExtendedClub, banUntil: number): ExtendedClub => ({
  ...c, isEnrolled: false, bannedUntil: banUntil,
});

export const applyEnroll = (clubs: ExtendedClub[], id: string): ExtendedClub[] =>
  clubs.map((c) => (c.id === id ? enrollClub(c) : c));

export const applyLeave = (clubs: ExtendedClub[], id: string, banUntil: number): ExtendedClub[] =>
  clubs.map((c) => (c.id === id ? leaveClub(c, banUntil) : c));

export const clearBan = (clubs: ExtendedClub[], id: string): ExtendedClub[] =>
  clubs.map((c) => (c.id === id ? { ...c, bannedUntil: 0 } : c));

// ── selection helper ──────────────────────────────────────────────────────────

const idExistsInList = (id: string, clubs: ExtendedClub[]): boolean =>
  id !== '' && clubs.some((c) => c.id === id);

export const resolveSelectedId = (prev: string, clubs: ExtendedClub[]): string =>
  idExistsInList(prev, clubs) ? prev : clubs[0]?.id ?? '';