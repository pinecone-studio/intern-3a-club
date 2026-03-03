import { gql } from '@apollo/client';
import type { Timetable } from '../../../../../libs/types';

export type { Timetable };

export const UPDATE_TIMETABLE = gql`
  mutation UpdateTimetable($input: UpdateTimetableInput!) {
    updateTimetable(input: $input) {
      id
      date
      room
      clubStartTime
      duration
    }
  }
`;

export const parseDate = (d: string): Date => {
  const [y, m, day] = d.split('-').map(Number);
  return new Date(y, m - 1, day);
};

export const formatDate = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

export const mins = (v: string): number => {
  const [h, m] = v.split(':').map(Number);
  return h * 60 + (m || 0);
};

export const fmt = (m: number): string => {
  const h = Math.floor(m / 60);
  const mm = m % 60;
  return `${h}:${mm === 0 ? '00' : mm}`;
};

const CONFLICT_ALERT = 'Энэ өрөөнд энэ цагийн интервалд аль хэдийн клуб байна.';

function hasNoRequired(
  active: Timetable | null,
  selectedDate: Date | undefined
): boolean {
  return !active || !selectedDate;
}

export function shouldAbortSave(
  active: Timetable | null,
  selectedDate: Date | undefined,
  checkConflict: () => Timetable | undefined
): boolean {
  if (hasNoRequired(active, selectedDate)) return true;
  if (checkConflict()) {
    alert(CONFLICT_ALERT);
    return true;
  }
  return false;
}

export type EditTimetableDialogProps = {
  open: boolean;
  onClose: () => void;
  timetables: Timetable[];
  allTimetables: Timetable[];
  mockClassroom: { id: string; classRoom: string }[];
  mockStartTime: { id: string; startTime: string }[];
  mockDuration: { id: string; duration: string }[];
};

function isTimeOverlap(
  newStart: number,
  newEnd: number,
  existingStart: number,
  existingEnd: number
): boolean {
  return !(newEnd <= existingStart || existingEnd <= newStart);
}

function isSameSlot(
  t: Timetable,
  activeId: string,
  newDateStr: string,
  room: string
): boolean {
  return t.id !== activeId && t.date === newDateStr && t.room === room;
}

function overlapsWith(t: Timetable, newStart: number, newEnd: number): boolean {
  const existingStart = mins(t.clubStartTime);
  const existingEnd = existingStart + t.duration;
  return isTimeOverlap(newStart, newEnd, existingStart, existingEnd);
}

export function findTimetableConflict(
  allTimetables: Timetable[],
  active: Timetable,
  newDateStr: string,
  room: string,
  time: string,
  duration: string
): Timetable | undefined {
  const newStart = mins(time);
  const newEnd = newStart + mins(duration);
  return allTimetables.find(
    (t) =>
      isSameSlot(t, active.id, newDateStr, room) &&
      overlapsWith(t, newStart, newEnd)
  );
}

export function getConflictDates(
  allTimetables: Timetable[],
  active: Timetable | null,
  selectedDate: Date | undefined,
  room: string,
  time: string,
  duration: string
): Date[] {
  if (!selectedDate || !active) return [];
  const newDateStr = formatDate(selectedDate);
  const newStart = mins(time);
  const newEnd = newStart + mins(duration);
  const conflicting = allTimetables.filter(
    (t) =>
      isSameSlot(t, active.id, newDateStr, room) &&
      overlapsWith(t, newStart, newEnd)
  );
  return conflicting.map((t) => parseDate(t.date));
}
