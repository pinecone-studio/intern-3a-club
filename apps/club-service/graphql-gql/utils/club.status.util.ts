import { ClubStatus } from './type';

export const resolveStatus = (teacherId?: string): ClubStatus =>
  teacherId ? 'approved' : 'pending';
