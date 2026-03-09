import { cn } from 'lib/utils';
import { ApprovedClubTimetable } from '../../../../lib/type';
import { toStartTimestamp } from './clubs-utils';

export {
  getDeadlineText,
  getDeadlineClass,
  formatDeadlineText,
} from './club-card-deadline-utils';

export { getTimeLeftText } from './club-card-time-utils';

export const getRoomText = (timetable?: ApprovedClubTimetable): string =>
  timetable?.room ?? 'Өрөө тодорхойгүй';

export type TimetableWithStart = {
  timetable: ApprovedClubTimetable;
  start: number;
};

export const toTimetableWithStart = (
  t: ApprovedClubTimetable
): TimetableWithStart | null => {
  const start = toStartTimestamp(t.date, t.clubStartTime);
  if (start === null) return null;
  return { timetable: t, start };
};

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

type ContainerKey = 'banned' | 'expired' | 'enrolled' | 'selected' | 'default';
type TitleKey = 'expired' | 'enrolled' | 'selected' | 'default';

const CONTAINER_KEY_MAP: Record<string, ContainerKey> = {
  banned: 'banned',
  expired: 'expired',
  enrolled: 'enrolled',
  selected: 'selected',
};

const TITLE_KEY_MAP: Record<string, TitleKey> = {
  expired: 'expired',
  enrolled: 'enrolled',
  selected: 'selected',
};

const firstMatch = <T extends string>(
  map: Record<string, T>,
  flags: [string, boolean][],
  fallback: T
): T => {
  const match = flags.find(([, v]) => v);
  return match ? map[match[0]] ?? fallback : fallback;
};

export const getContainerKey = (
  isBanned: boolean,
  isExpired: boolean,
  isEnrolled: boolean,
  isSelected: boolean
): ContainerKey =>
  firstMatch(
    CONTAINER_KEY_MAP,
    [
      ['banned', isBanned],
      ['selected', isSelected],
      ['expired', isExpired],
      ['enrolled', isEnrolled],
    ],
    'default'
  );

export const getTitleKey = (
  isExpired: boolean,
  isEnrolled: boolean,
  isSelected: boolean
): TitleKey =>
  firstMatch(
    TITLE_KEY_MAP,
    [
      ['expired', isExpired],
      ['enrolled', isEnrolled],
      ['selected', isSelected],
    ],
    'default'
  );

export interface ClubStatusFlags {
  isBannedAndOpen: boolean;
  isExpired: boolean;
  isPending: boolean;
  isEnrolled: boolean;
  isSelected: boolean;
}

export const CONTAINER_CLASSES: Record<ContainerKey, string> = {
  banned: 'bg-red-600/10 border-red-500/70',
  expired: 'bg-blue-600/20 border-white/5',
  enrolled: 'bg-blue-600/20 border-white/5',
  selected: 'bg-blue-600/20 border-blue-500',
  default: 'bg-blue-600/20 border-white/5',
};

export const TITLE_CLASSES: Record<TitleKey, string> = {
  expired: 'text-white/70',
  enrolled: 'text-white/70',
  selected: 'text-white',
  default: 'text-white/70',
};

export const getContainerClass = (flags: ClubStatusFlags): string =>
  cn(
    'w-full p-4 rounded-xl cursor-pointer border transition-colors duration-150 min-h-[80px]',
    CONTAINER_CLASSES[
      getContainerKey(
        flags.isBannedAndOpen,
        flags.isExpired || flags.isPending,
        flags.isEnrolled,
        flags.isSelected
      )
    ]
  );

export const getTitleClass = (flags: ClubStatusFlags): string =>
  cn(
    'text-xs font-semibold uppercase truncate',
    TITLE_CLASSES[
      getTitleKey(
        flags.isExpired || flags.isPending,
        flags.isEnrolled,
        flags.isSelected
      )
    ]
  );
