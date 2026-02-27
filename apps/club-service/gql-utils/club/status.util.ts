import { ClubStatus } from 'gql-type';

export const resolveStatus = (teacherId?: string): ClubStatus =>
  teacherId ? 'approved' : 'pending';
