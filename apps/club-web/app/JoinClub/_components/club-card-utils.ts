import { ApprovedClubTimetable } from '../../../lib/type';
import { diffToTimeLeft, toStartTimestamp } from './clubs-utils';

export const getRoomText = (timetable?: ApprovedClubTimetable): string =>
  timetable?.room ?? 'Өрөө тодорхойгүй';


export const formatDeadlineText = (deadline: Date): string => {
  const y = deadline.getFullYear();
  const m = String(deadline.getMonth() + 1).padStart(2, '0');
  const d = String(deadline.getDate()).padStart(2, '0');
  return `${y}-${m}-${d} хүртэл элсэх боломжтой`;
};

export const getDeadlineText = (expired: boolean, deadline: Date): string =>
  expired ? 'Элсэх хугацаа дууссан' : formatDeadlineText(deadline);

export const getDeadlineClass = (expired: boolean): string =>
  expired
    ? 'flex items-center gap-2 text-[10px] font-medium text-red-400/60'
    : 'flex items-center gap-2 text-[10px] font-medium text-white/40';

export type TimetableWithStart = { timetable: ApprovedClubTimetable; start: number };

export const getNextTimetable = (
  timetables?: ApprovedClubTimetable[]
): ApprovedClubTimetable | undefined => {
  const now = Date.now();
  return (timetables ?? [])
    .map(toTimetableWithStart)
    .filter((item): item is TimetableWithStart => item !== null)
    .sort((a, b) => a.start - b.start)
    .find((item) => item.start >= now)?.timetable;
};

export const toTimetableWithStart = (t: ApprovedClubTimetable): TimetableWithStart | null => {
  const start = toStartTimestamp(t.date, t.clubStartTime);
  if (start === null) return null;
  return { timetable: t, start };
};

const getStart = (timetable?: ApprovedClubTimetable): number | null => {
  if (!timetable?.date || !timetable?.clubStartTime) return null;
  return toStartTimestamp(timetable.date, timetable.clubStartTime);
};

const getDiffMs = (start: number): number | null => {
  const diff = start - Date.now();
  return diff > 0 ? diff : null;
};

export const getTimeLeftText = (timetable?: ApprovedClubTimetable): string | null => {
  const start = getStart(timetable);
  if (!start) return null;
  const diffMs = getDiffMs(start);
  if (!diffMs) return null;
  return diffToTimeLeft(diffMs);
};

type ContainerKey = 'banned' | 'expired' | 'enrolled' | 'selected' | 'default';
type TitleKey = 'expired' | 'enrolled' | 'selected' | 'default';

const CONTAINER_KEY_MAP: Record<string, ContainerKey> = {
  'banned':   'banned',
  'expired':  'expired',
  'enrolled': 'enrolled',
  'selected': 'selected',
};

const TITLE_KEY_MAP: Record<string, TitleKey> = {
  'expired':  'expired',
  'enrolled': 'enrolled',
  'selected': 'selected',
};

const firstMatch = <T extends string>(
  map: Record<string, T>,
  flags: [string, boolean][],
  fallback: T
): T => {
  const match = flags.find(([, v]) => v);
  return match ? (map[match[0]] ?? fallback) : fallback;
};

export const getContainerKey = (
  isBanned: boolean,
  isExpired: boolean,
  isEnrolled: boolean,
  isSelected: boolean
): ContainerKey =>
  firstMatch(CONTAINER_KEY_MAP, [
    ['banned', isBanned],
    ['expired', isExpired],
    ['enrolled', isEnrolled],
    ['selected', isSelected],
  ], 'default');

export const getTitleKey = (
  isExpired: boolean,
  isEnrolled: boolean,
  isSelected: boolean
): TitleKey =>
  firstMatch(TITLE_KEY_MAP, [
    ['expired', isExpired],
    ['enrolled', isEnrolled],
    ['selected', isSelected],
  ], 'default');