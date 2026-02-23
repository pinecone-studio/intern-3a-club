import { DB } from 'db/drizzle';
import { clubs, timetable } from 'db/schema';
import { GraphQLError } from 'graphql';

/**
 * Тухайн гарагийн дараагийн огноог тооцоолох туслах функц
 * @param startDate Эхлэх огноо (YYYY-MM-DD)
 * @param dayName Гарагийн нэр (Monday, Tuesday...)
 */
const getNextDateOfDay = (startDate: string, dayName: string): string => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const targetDay = days.findIndex(
    (d) => d.toLowerCase() === dayName.toLowerCase()
  );
  const start = new Date(startDate);

  const resultDate = new Date(start);
  resultDate.setDate(start.getDate() + ((targetDay + 7 - start.getDay()) % 7));

  return resultDate.toISOString().split('T')[0];
};

export const createClubWithSchedules = async (_: any, args: any) => {
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
    const isTeacherCreated = !!input.teacherId;

    // 1. Клуб үүсгэх (Cloudflare D1 дээр шууд DB ашиглана)
    const [newClub] = await DB.insert(clubs)
      .values({
        id: clubId,
        name: input.name,
        description: input.description,
        creatorId: input.creatorId,
        teacherId: isTeacherCreated ? input.teacherId : null,
        // Хэрэв багш томилогдсон бол шууд approved, үгүй бол pending
        status: isTeacherCreated ? 'approved' : 'pending',
        type: input.type || (isTeacherCreated ? 'mentor' : 'self'),
        preferredTeachers: isTeacherCreated ? null : input.preferredTeachers,
        minMember: input.minMember || 0,
        maxMember: input.maxMember || 0,
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
      // Ганц удаагийн хуваарь
      schedulesToInsert.push({
        id: crypto.randomUUID(),
        date: startDate,
        ...commonSchedule,
      });
    } else {
      // Сонгогдсон гарагуудаар давтан хуваарь үүсгэх
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
  } catch (error: any) {
    console.error('RESOLVER ERROR:', error);
    throw new GraphQLError(`Алдаа гарлаа: ${error.message}`);
  }
};
