import type { Club } from '../../../../../libs/types';

function getDescription(club: Club) {
  return club?.description ?? '';
}
function getStartTime(primary?: Club['timetables'][0]) {
  return primary?.clubStartTime ?? '-';
}
function getRoom(primary?: Club['timetables'][0]) {
  return primary?.room ?? '-';
}
function getMembers(club: Club) {
  return `${club?.minMember ?? 0} - ${club?.maxMember ?? 0}`;
}
function getClubTerm(club: Club) {
  const timetables = club?.timetables;
  if (!timetables || timetables.length === 0) return '-';

  const dates = timetables
    .map((t) => new Date(t.date))
    .sort((a, b) => a.getTime() - b.getTime());
  const first = dates[0];
  const last = dates[dates.length - 1];

  const months =
    (last.getFullYear() - first.getFullYear()) * 12 +
    (last.getMonth() - first.getMonth());

  return months === 0 ? 'One Time' : `${months} month${months > 1 ? 's' : ''}`;
}

function getDuration(primary?: Club['timetables'][0]) {
  const duration = primary?.duration;
  if (!duration) return '-';
  return `${duration} min`;
}

function getFrequency(club: Club) {
  const timetables = club?.timetables;
  if (!timetables || timetables.length === 0) return '-';

  const dayCounts: Record<number, number> = {};
  timetables.forEach((t) => {
    const day = new Date(t.date).getDay();
    dayCounts[day] = (dayCounts[day] || 0) + 1;
  });

  const uniqueDaysPerWeek = Object.keys(dayCounts).length;
  return `${uniqueDaysPerWeek}x per week`;
}

const WEEKDAY_EN: Record<number, string> = {
  0: 'Su',
  1: 'Mo',
  2: 'Tu',
  3: 'We',
  4: 'Th',
  5: 'Fr',
  6: 'Su',
};

function getUniqueDays(club: Club) {
  const timetables = club?.timetables;
  if (!timetables || timetables.length === 0) return '-';

  const days = timetables.map((t) => WEEKDAY_EN[new Date(t.date).getDay()]);
  return [...new Set(days)].join(', ');
}

export function getDetailDisplay(club: Club) {
  console.log('raw club:', club);
  const primary = club.timetables?.[0];
  console.log('raw timetable:', primary);
  return {
    description: getDescription(club),
    startTime: getStartTime(primary),
    room: getRoom(primary),
    members: getMembers(club),
    status: club?.status,
    duration: getDuration(primary),
    term: getClubTerm(club),
    frequency: getFrequency(club),
    days: getUniqueDays(club),
  };
}

export const mockClassroom = [
  { id: '1', classRoom: '301' },
  { id: '2', classRoom: '302' },
  { id: '3', classRoom: '303' },
];

export const mockStartTime = [
  { id: '1', startTime: '13:00' },
  { id: '2', startTime: '14:00' },
  { id: '3', startTime: '15:00' },
];

export const mockDuration = [
  { id: '1', duration: '1:00' },
  { id: '2', duration: '1:30' },
  { id: '3', duration: '2:00' },
];
