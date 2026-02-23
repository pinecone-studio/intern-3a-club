import { DB } from 'db/drizzle';
import { clubs, timetable } from 'db/schema';
import { GraphQLError } from 'graphql';

type ClubStatus = 'pending' | 'approved' | 'declined';
interface CreateClubInput {
  name: string;
  description?: string;
  creatorId?: string;
  teacherId?: string;
  status?: ClubStatus;
  type?: string;
  preferredTeachers?: string[];
  minMember?: number;
  maxMember?: number;
}
interface CreateClubWithSchedulesArgs {
  input: CreateClubInput;
  startDate: string;
  classroom: string;
  startTime: string;
  duration: number;
  frequency: string;
  selectedDays?: string[];
}
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

const prepareSchedules = (
  clubId: string,
  args: CreateClubWithSchedulesArgs
) => {
  const { startDate, classroom, startTime, duration, frequency, selectedDays } =
    args;
  const schedules = [];
  const common = {
    clubId,
    room: classroom,
    clubStartTime: startTime,
    duration,
  };

  if (frequency === 'ONCE' || !selectedDays || selectedDays.length === 0) {
    schedules.push({ id: crypto.randomUUID(), date: startDate, ...common });
  } else {
    for (const day of selectedDays) {
      schedules.push({
        id: crypto.randomUUID(),
        date: getNextDateOfDay(startDate, day),
        ...common,
      });
    }
  }
  return schedules;
};

export const createClubWithSchedules = async (
  _: unknown,
  args: CreateClubWithSchedulesArgs
) => {
  console.log('MUTATION START:', args);

  try {
    const { input } = args;
    const clubId = crypto.randomUUID();
    const isTeacherCreated = !!input.teacherId;

    const [newClub] = await DB.insert(clubs)
      .values({
        id: clubId,
        name: input.name,
        description: input.description,
        creatorId: input.creatorId,
        teacherId: isTeacherCreated ? input.teacherId : null,
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

    const schedulesToInsert = prepareSchedules(clubId, args);
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
