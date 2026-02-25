import { DB } from 'db/drizzle';
import { eq } from 'drizzle-orm';
import { InferSelectModel } from 'drizzle-orm';
import { clubs, timetable } from 'db/schema';
import {
  getAllApprovedClubs,
  getAllClubs,
  getAllPendingClubs,
} from './queries';
import { createClubWithSchedules, deleteClub, updateClub } from './mutations';
import { updateTimetable } from './mutations/timetable';

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
  },
  Mutation: {
    createClubWithSchedules,
    deleteClub,
    updateTimetable,
    updateClub,
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
