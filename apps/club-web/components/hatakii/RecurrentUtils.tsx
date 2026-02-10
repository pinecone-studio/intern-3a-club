'use client';

import { RecurrenceConfig } from './types';

export const isWeeklyMatch = (date: Date, weekDays: number[]) =>
  weekDays.includes(date.getDay());

export const isBiweeklyMatch = (
  date: Date,
  weekDays: number[],
  anchorTime: number
) => {
  if (!weekDays.includes(date.getDay())) return false;
  const diff = Math.ceil(Math.abs(date.getTime() - anchorTime) / 86400000);
  return diff % 14 === 0;
};

export const isMonthlyMatch = (date: Date, dayNumbers: number[]) =>
  dayNumbers.includes(date.getDate());

export const checkDateMatch = (
  date: Date,
  mode: string,
  config: RecurrenceConfig
): boolean => {
  const matchers: Record<string, () => boolean> = {
    weekly: () => isWeeklyMatch(date, config.weekDays),
    biweekly: () => isBiweeklyMatch(date, config.weekDays, config.anchorTime),
    monthly: () => isMonthlyMatch(date, config.dayNumbers),
  };

  return matchers[mode]?.() ?? false;
};

/** * Complexity-г бууруулахын тулд нөхцөл шалгах логикийг
 * тусад нь функц болгов (Complexity: 1)
 */
const shouldIncludeDate = (
  date: Date,
  today: Date,
  mode: string,
  config: RecurrenceConfig
) => {
  return date >= today && checkDateMatch(date, mode, config);
};

export const generateDates = (
  year: number,
  month: number,
  today: Date,
  mode: string,
  config: RecurrenceConfig
) => {
  const newDates: Date[] = [];
  const tempDate = new Date(year, month, 1);

  while (tempDate.getMonth() === month) {
    if (shouldIncludeDate(tempDate, today, mode, config)) {
      newDates.push(new Date(tempDate));
    }
    tempDate.setDate(tempDate.getDate() + 1);
  }
  return newDates;
};
