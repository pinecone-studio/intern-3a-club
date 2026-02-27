import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Data } from './types';
import { format } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scheduleOverlapped = (
  data: Data | undefined,
  date: Date,
  room: string,
  StartTime: string
): boolean => {
  const formatted = format(date, 'yyyy-MM-dd');
  return (
    data?.getAllClubs.some((club) =>
      club.timetables.some(
        (overlap) =>
          overlap.date === formatted &&
          overlap.room === room &&
          overlap.clubStartTime === StartTime
      )
    ) ?? false
  );
};
