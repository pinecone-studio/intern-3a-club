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

export const useCalendarEvents = (approvedClubs: GetAllClub[]) => {
  return useMemo(() => {
    const map = new Map<string, any[]>();

    for (const club of approvedClubs) {
      for (const timetable of club.timetables ?? []) {
        const date = new Date(timetable.date);

        if (Number.isNaN(date.getTime())) continue;

        const key = format(date, 'yyyy-MM-dd');

        const prev = map.get(key) ?? [];

        prev.push({
          clubId: club.id,
          clubName: club.name,
          timetableId: timetable.id,
          room: timetable.room,
          clubStartTime: timetable.clubStartTime,
        });

        map.set(key, prev);
      }
    }

    return map;
  }, [approvedClubs]);
};
