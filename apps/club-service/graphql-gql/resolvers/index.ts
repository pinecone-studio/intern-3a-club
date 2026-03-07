import { DB } from 'db/drizzle';
import { eq } from 'drizzle-orm';
import { InferSelectModel } from 'drizzle-orm';
import { clubMembers, clubs, students, timetable } from 'db/schema';
import {
  getAllApprovedClubs,
  getAllClubs,
  getAllClubsByCreatorId,
  getAllPendingClubs,
  getAllTeachers,
  getClubMembersAll,
} from './queries';
import {
  createClubWithSchedules,
  deleteClub,
  deleteManyTimetables,
  deleteTimetable,
  joinClub,
  leaveClub,
  syncUser,
  updateClub,
  updateManyTimetables,
  updateTimetable,
} from './mutations';

export type Club = InferSelectModel<typeof clubs>;
export type ClubMember = InferSelectModel<typeof clubMembers>;

export const resolvers = {
  Query: {
    getAllClubs,
    getAllApprovedClubs,
    getAllPendingClubs,
    getAllTeachers,
    getAllClubsByCreatorId,
    getClubMembersAll,
  },
  Mutation: {
    createClubWithSchedules,
    updateClub,
    deleteClub,
    updateTimetable,
    deleteTimetable,
    syncUser,
    joinClub,
    leaveClub,
    updateManyTimetables,
    deleteManyTimetables,
  },
  // Relationship (Холболт) хэсэг:
  Club: {
    timetables: async (parent: Club) => {
      return await DB.select()
        .from(timetable)
        .where(eq(timetable.clubId, parent.id));
    },
    members: async (parent: Club) => {
      return await DB.select()
        .from(clubMembers)
        .where(eq(clubMembers.clubId, parent.id));
    },
  },

  ClubMember: {
    student: async (parent: ClubMember) => {
      return await DB.query.students.findFirst({
        where: eq(students.id, parent.studentId),
      });
    },
  },
};
