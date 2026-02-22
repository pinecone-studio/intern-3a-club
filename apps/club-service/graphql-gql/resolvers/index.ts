// import * as Mutation from './mutations';
// import * as Query from './queries';

// export const resolvers = {
//   Mutation: {
//     ...Mutation,
//   },
//   Query,
// };
// graphql/resolvers/index.ts
import { createClubWithSchedules } from './mutations/clubs/create-club';
import { DB } from 'db/drizzle';
import { timetable } from 'db/schema';
import { eq } from 'drizzle-orm';
import { getClubs } from './queries';
import { getClubById } from './queries/get-club-by-id';

export const resolvers = {
  Query: {
    getClubs,
    getClubById,
  },
  Mutation: {
    createClubWithSchedules,
  },
  // Relationship (Холболт) хэсэг:
  Club: {
    timetables: async (parent: any) => {
      // parent дотор тухайн клубын дата (id) ирнэ
      return await DB.select()
        .from(timetable)
        .where(eq(timetable.clubId, parent.id));
    },
  },
};
