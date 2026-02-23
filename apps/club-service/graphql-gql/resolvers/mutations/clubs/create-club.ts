import { DB } from 'db/drizzle';
import { clubs, timetable } from 'db/schema';
import { GraphQLError } from 'graphql';
import {
  CreateClubWithSchedulesArgs,
  getNextDateOfDay,
  resolveMaxMember,
  resolveMinMember,
  resolvePreferredTeachers,
  resolveSchedules,
  resolveStatus,
  resolveTeacherId,
  resolveType,
} from 'graphql-gql/utils';

export const createClubWithSchedules = async (
  _: unknown,
  args: CreateClubWithSchedulesArgs
) => {
  console.log('MUTATION START:', args);

  try {
    const clubId = crypto.randomUUID();

    const [newClub] = await DB.insert(clubs)
      .values({
        id: clubId,
        name: args.input.name,
        description: args.input.description,
        creatorId: args.input.creatorId,
        teacherId: resolveTeacherId(args.input.teacherId),
        status: resolveStatus(args.input.teacherId),
        type: resolveType(args.input.type, args.input.teacherId),
        preferredTeachers: resolvePreferredTeachers(
          args.input.teacherId,
          args.input.preferredTeachers
        ),
        minMember: resolveMinMember(args.input.minMember),
        maxMember: resolveMaxMember(args.input.maxMember),
      })
      .returning();

    if (!newClub) {
      throw new Error('Клуб үүсгэж чадсангүй.');
    }

    const schedules = resolveSchedules(args, clubId);
    await DB.insert(timetable).values(schedules);

    console.log('SUCCESS: Club and schedules created.');
    return newClub;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    throw new GraphQLError(`Алдаа гарлаа: ${message}`);
  }
};
