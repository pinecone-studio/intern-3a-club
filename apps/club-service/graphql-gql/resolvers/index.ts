import { createClubWithSchedules } from './mutations/clubs/create-club';
import { DB } from 'db/drizzle';
import { clubs, timetable } from 'db/schema';
import { eq } from 'drizzle-orm';
import { getAllClubs, getClubById } from './queries';
import { InferSelectModel } from 'drizzle-orm';

export type Club = InferSelectModel<typeof clubs>;
interface GetClubByIdArgs {
  id: string;
}
export const resolvers = {
  Query: {
    getAllClubs: async () => await getAllClubs(),
    getClubById: async (_: unknown, args: GetClubByIdArgs) =>
      await getClubById(_, args),
  },
  Mutation: {
    createClubWithSchedules,
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
