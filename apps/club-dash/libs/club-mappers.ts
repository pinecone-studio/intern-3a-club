import { Club, GetAllClub } from './types';

const getDescription = (src: GetAllClub): string | null =>
  src.description ?? null;

const getTeacherId = (src: GetAllClub): string | null => src.teacherId ?? null;

const getPreferredTeachers = (src: GetAllClub): string[] =>
  src.preferredTeachers ?? [];

// Map raw GraphQL club shape to the UI Club type used in the dashboard
export const mapGetAllClubToClub = (src: GetAllClub): Club => ({
  id: src.id,
  name: src.name,
  description: getDescription(src),
  teacherId: getTeacherId(src),
  preferredTeachers: getPreferredTeachers(src),
  minMember: src.minMember,
  maxMember: src.maxMember,
  status: src.status,
  timetables: src.timetables,
});

export const mapGetAllClubsToClubs = (items: GetAllClub[]): Club[] =>
  items.map(mapGetAllClubToClub);
