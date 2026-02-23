import { DB } from 'db/drizzle';
import { clubs, timetable } from 'db/schema';
import { GraphQLError } from 'graphql';
import { getNextDateOfDay } from 'graphql-gql/utils/date.util';
import { resolveMaxMember } from 'graphql-gql/utils/maxmemb.util';
import { resolveMinMember } from 'graphql-gql/utils/minmemb.util';
import { resolvePreferredTeachers } from 'graphql-gql/utils/preferred.util';
import { resolveStatus } from 'graphql-gql/utils/status.util';
import { resolveTeacherId } from 'graphql-gql/utils/teacher.util';
import { CreateClubWithSchedulesArgs } from 'graphql-gql/utils/type';
import { resolveType } from 'graphql-gql/utils/type.util';

export const createClubWithSchedules = async (
  _: unknown,
  args: CreateClubWithSchedulesArgs
) => {
  console.log('MUTATION START:', args);

  const {
    input,
    startDate,
    classroom,
    startTime,
    duration,
    frequency,
    selectedDays,
  } = args;

  try {
    const clubId = crypto.randomUUID();

    // 1. Клуб үүсгэх (Cloudflare D1 дээр шууд DB ашиглана)
    const [newClub] = await DB.insert(clubs)
      .values({
        id: clubId,
        name: input.name,
        description: input.description,
        creatorId: input.creatorId,
        teacherId: resolveTeacherId(input.teacherId),
        status: resolveStatus(input.teacherId),
        type: resolveType(input.type, input.teacherId),
        preferredTeachers: resolvePreferredTeachers(
          input.teacherId,
          input.preferredTeachers
        ),
        minMember: resolveMinMember(input.minMember),
        maxMember: resolveMaxMember(input.maxMember),
      })
      .returning();

    if (!newClub) {
      throw new Error('Клуб үүсгэж чадсангүй.');
    }

    const schedulesToInsert = [];
    const commonSchedule = {
      clubId: clubId,
      room: classroom,
      clubStartTime: startTime,
      duration: duration,
    };

    if (frequency === 'ONCE' || !selectedDays || selectedDays.length === 0) {
      schedulesToInsert.push({
        id: crypto.randomUUID(),
        date: startDate,
        ...commonSchedule,
      });
    } else {
      for (const day of selectedDays) {
        const actualDate = getNextDateOfDay(startDate, day);
        schedulesToInsert.push({
          id: crypto.randomUUID(),
          date: actualDate,
          ...commonSchedule,
        });
      }
    }

    if (schedulesToInsert.length > 0) {
      await DB.insert(timetable).values(schedulesToInsert);
    }

    console.log('SUCCESS: Club and schedules created.');
    return newClub;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    throw new GraphQLError(`Алдаа гарлаа: ${message}`);
  }
};
