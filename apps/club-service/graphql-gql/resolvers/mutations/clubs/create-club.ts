import { DB } from 'db/drizzle';
import { clubs, timetable } from 'db/schema';
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
import { getCreatorId } from 'gql-utils/user/user.util';

interface MyContext {
  clerkId?: string;
}

const validateAndGetCreator = async (clerkId?: string): Promise<string> => {
  if (!clerkId) throw new Error('Нэвтрээгүй байна.');

  const creatorId = await getCreatorId(clerkId);
  if (!creatorId) {
    throw new Error(
      'Хэрэглэгчийн бүртгэл олдсонгүй. Системтэй дахин синхрончлоорой.'
    );
  }

  return creatorId;
};

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
  context: MyContext
) => {
  try {
    const creatorId = await validateAndGetCreator(context.clerkId);

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
