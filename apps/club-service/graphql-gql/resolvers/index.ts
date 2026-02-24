import { DB } from 'db/drizzle';
import { eq } from 'drizzle-orm';
import { InferSelectModel } from 'drizzle-orm';
import { clubs, timetable } from 'db/schema';
import { getAllClubs } from './queries';
import { createClubWithSchedules, deleteClub } from './mutations';

export type Club = InferSelectModel<typeof clubs>;
// interface GetClubByIdArgs {
//   id: string;
// }
export const resolvers = {
  Query: {
    getAllClubs: async () => await getAllClubs(),
    // getClubById: async (_: unknown, args: GetClubByIdArgs) =>
    //   await getClubById(_, args),
  },
  Mutation: {
    createClubWithSchedules,
    deleteClub,
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
