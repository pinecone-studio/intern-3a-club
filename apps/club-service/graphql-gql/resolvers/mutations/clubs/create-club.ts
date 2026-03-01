import { DB } from 'db/drizzle';
import { clubs, students, teachers, timetable } from 'db/schema';
import { eq } from 'drizzle-orm';
import { CreateClubWithSchedulesArgs } from 'gql-type';
import {
  handleMutationError,
  resolveFrequency,
  resolveMaxMember,
  resolveMinMember,
  resolvePreferredTeachers,
  resolveStatus,
  resolveTeacherId,
  resolveTerm,
  resolveType,
} from 'gql-utils';

const getClubValues = (clubId: string, args: CreateClubWithSchedulesArgs) => ({
  id: clubId,
  name: args.input.name,
  description: args.input.description,
  teacherId: resolveTeacherId(args.input.teacherId),
  status: resolveStatus(args.input.teacherId),
  type: resolveType(args.input.type, args.input.teacherId),
  preferredTeachers: resolvePreferredTeachers(
    args.input.teacherId,
    args.input.preferredTeachers
  ),
  minMember: resolveMinMember(args.input.minMember),
  maxMember: resolveMaxMember(args.input.maxMember),
  frequency: resolveFrequency(args.frequency),
  clubTerm: resolveTerm(args.clubTerm),
});

const getTimetableValues = (
  clubId: string,
  schedules: CreateClubWithSchedulesArgs['schedules']
) =>
  schedules.map((s) => ({
    id: crypto.randomUUID(),
    clubId,
    date: s.date,
    room: s.room,
    clubStartTime: s.clubStartTime,
    duration: s.duration,
  }));

const insertSchedules = async (
  clubId: string,
  schedules?: CreateClubWithSchedulesArgs['schedules']
) => {
  if (!schedules || schedules.length === 0) return;

  const timetableData = getTimetableValues(clubId, schedules);
  await DB.insert(timetable).values(timetableData);
};

export const createClubWithSchedules = async (
  _: unknown,
  args: CreateClubWithSchedulesArgs,
  context: any
) => {
  try {
    const { clerkId } = context;
    if (!clerkId) throw new Error('Нэвтрээгүй байна.');

    let creatorId: string | null = null;

    // багш мөн эсэхийг шалгах
    const teacher = await DB.select()
      .from(teachers)
      .where(eq(teachers.authUserId, clerkId))
      .get();

    if (teacher) {
      creatorId = teacher.id;
    } else {
      // Багш биш бол сурагч мөн эсэхийг шалгах
      const student = await DB.select()
        .from(students)
        .where(eq(students.authUserId, clerkId))
        .get();

      if (student) {
        creatorId = student.id;
      }
    }

    // Хэрэв аль алин дээр нь байхгүй бол (Синхрончлол хийгдээгүй гэсэн үг)
    if (!creatorId) {
      throw new Error(
        'Хэрэглэгчийн бүртгэл олдсонгүй. Системтэй дахин синхрончлоорой.'
      );
    }

    const clubId = crypto.randomUUID();

    //Клуб үүсгэх
    const [newClub] = await DB.insert(clubs)
      .values({ ...getClubValues(clubId, args), creatorId: creatorId })
      .returning();

    if (!newClub) {
      throw new Error('Клуб үүсгэж чадсангүй.');
    }

    //Хуваарийг хадгалах
    await insertSchedules(clubId, args.schedules);

    return newClub;
  } catch (error) {
    handleMutationError(error);
  }
};
