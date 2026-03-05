import { addMonths } from 'date-fns';

export const buildMonths = (start: Date) => {
  return Array.from({ length: 12 }, (_, i) => addMonths(start, i));
};

export const monthIndex = (date: Date) => {
  return date.getMonth() + 1;
};
