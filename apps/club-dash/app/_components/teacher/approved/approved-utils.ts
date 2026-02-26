import type { Club } from '../../../../libs/types';

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

export function getDetailDisplay(club: Club) {
  const primary = club.timetables?.[0];
  return {
    description: getDescription(club),
    startTime: getStartTime(primary),
    room: getRoom(primary),
    members: getMembers(club),
    status: club?.status,
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
