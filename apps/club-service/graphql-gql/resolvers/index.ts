import { createClubWithSchedules } from './mutations/clubs/create-club';
import { DB } from 'db/drizzle';
import { timetable } from 'db/schema';
import { eq } from 'drizzle-orm';
import { getAllClubs, getClubById } from './queries';

export const resolvers = {
  Query: {
    getAllClubs: async () => await getAllClubs(),
    getClubById: async (parent: any, args: any) =>
      await getClubById(parent, args),
  },
  Mutation: {
    createClubWithSchedules,
  },
  // Relationship (Холболт) хэсэг:
  Club: {
    timetables: async (parent: any) => {
      return await DB.select()
        .from(timetable)
        .where(eq(timetable.clubId, parent.id));
    },
  },
};
