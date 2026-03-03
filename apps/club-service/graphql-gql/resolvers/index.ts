import { DB } from 'db/drizzle';
import { eq } from 'drizzle-orm';
import { InferSelectModel } from 'drizzle-orm';
import { clubs, timetable } from 'db/schema';
import {
  getAllApprovedClubs,
  getAllClubs,
  getAllClubsByCreatorId,
  getAllPendingClubs,
  getAllTeachers,
} from './queries';
import {
  createClubWithSchedules,
  deleteClub,
  deleteTimetable,
  syncUser,
  updateClub,
  updateTimetable,
} from './mutations';

export type Club = InferSelectModel<typeof clubs>;
// interface GetClubByIdArgs {
//   id: string;
// }
export const resolvers = {
  Query: {
    getAllClubs,
    // getClubById: async (_: unknown, args: GetClubByIdArgs) =>
    //   await getClubById(_, args),
    getAllApprovedClubs,
    getAllPendingClubs,
    getAllTeachers,
    getAllClubsByCreatorId,
  },
  Mutation: {
    createClubWithSchedules,
    deleteClub,
    updateTimetable,
    updateClub,
    syncUser,
    deleteTimetable,
  },
  // Relationship (Холболт) хэсэг:
  Club: {
    timetables: async (parent: Club) => {
      return await DB.select()
        .from(timetable)
        .where(eq(timetable.clubId, parent.id));
    },
  },
};
