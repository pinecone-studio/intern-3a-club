// import { useMemo } from 'react';
// import { format } from 'date-fns';
// import { GetAllClub } from '../../../libs/types';

// export const toDate = (value: string) => {
//   const parsed = new Date(value);
//   return Number.isNaN(parsed.getTime()) ? null : parsed;
// };

// export const dateKey = (date: Date) => format(date, 'yyyy-MM-dd');

// export const useCalendarEvents = (approvedClubs: GetAllClub[]) => {
//   return useMemo(() => {
//     const map = new Map();

//     for (const club of approvedClubs) {
//       for (const timetable of club.timetables ?? []) {
//         const parsedDate = toDate(timetable.date);
//         if (!parsedDate) continue;

//         const key = dateKey(parsedDate);

//         const prev = map.get(key) ?? [];
//         prev.push({
//           clubId: club.id,
//           clubName: club.name,
//           timetableId: timetable.id,
//           room: timetable.room,
//           clubStartTime: timetable.clubStartTime,
//         });

//         map.set(key, prev);
//       }
//     }

//     return map;
//   }, [approvedClubs]);
// };

import { useMemo } from 'react';
import { format } from 'date-fns';
import { GetAllClub } from '../../../libs/types';

export type CalendarEvent = {
  clubId: string;
  clubName: string;
  timetableId: string;
  room: string;
  clubStartTime: string;
};

const toValidDate = (value: string) => {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

const toCalendarEvent = (
  club: GetAllClub,
  timetable: GetAllClub['timetables'][number]
): CalendarEvent => ({
  clubId: club.id,
  clubName: club.name,
  timetableId: timetable.id,
  room: timetable.room,
  clubStartTime: timetable.clubStartTime,
});

const addEventByKey = (
  map: Map<string, CalendarEvent[]>,
  key: string,
  event: CalendarEvent
) => {
  const previous = map.get(key) ?? [];
  map.set(key, [...previous, event]);
};

export const useCalendarEvents = (approvedClubs: GetAllClub[]) => {
  // eslint-disable-next-line complexity
  return useMemo(() => {
    const map = new Map<string, CalendarEvent[]>();

    for (const club of approvedClubs) {
      for (const timetable of club.timetables ?? []) {
        const date = toValidDate(timetable.date);
        if (!date) continue;
        const key = format(date, 'yyyy-MM-dd');
        addEventByKey(map, key, toCalendarEvent(club, timetable));
      }
    }

    return map;
  }, [approvedClubs]);
};
