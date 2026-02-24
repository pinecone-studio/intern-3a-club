import { Club, GetAllClub } from './types';

// Map raw GraphQL club shape to the UI Club type used in the dashboard
export const mapGetAllClubToClub = (src: GetAllClub): Club => ({
  id: src.id,
  name: src.name,
  description: src.description ?? null,
  teacherId: src.teacherId ?? null,
  minMember: src.minMember,
  maxMember: src.maxMember,
  status: src.status,
  timetables: src.timetables,
});

export const mapGetAllClubsToClubs = (items: GetAllClub[]): Club[] =>
  items.map(mapGetAllClubToClub);

