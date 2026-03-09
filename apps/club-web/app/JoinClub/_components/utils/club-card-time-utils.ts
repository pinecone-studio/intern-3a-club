import { ApprovedClubTimetable } from '../../../../lib/type';
import { diffToTimeLeft, toStartTimestamp } from './clubs-utils';

const getStart = (timetable?: ApprovedClubTimetable): number | null => {
  if (!timetable?.date || !timetable?.clubStartTime) return null;
  return toStartTimestamp(timetable.date, timetable.clubStartTime);
};

const getDiffMs = (start: number): number | null => {
  const diff = start - Date.now();
  return diff > 0 ? diff : null;
};

export const getTimeLeftText = (
  timetable?: ApprovedClubTimetable
): string | null => {
  const start = getStart(timetable);
  if (!start) return null;
  const diffMs = getDiffMs(start);
  if (!diffMs) return null;
  return diffToTimeLeft(diffMs);
};
