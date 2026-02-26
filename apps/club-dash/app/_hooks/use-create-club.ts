import gql from 'graphql-tag';
import { useMutation } from '@apollo/client/react';
import { CreateClubState, ScheduleChange } from '../../../club-dash/libs/types';
import { format } from 'date-fns';

export const CREATE_CLUB_WITH_SCHEDULE = gql`
  mutation CreateClubWithSchedules(
    $input: CreateClubInput!
    $schedules: [ScheduleInput!]!
    $frequency: String!
    $clubTerm: String!
  ) {
    createClubWithSchedules(
      input: $input
      schedules: $schedules
      frequency: $frequency
      clubTerm: $clubTerm
    ) {
      id
      name
    }
  }
`;

export const parseDuration = (chosenDuration: string): number => {
  const durationMin = chosenDuration.split(':').map(Number);
  return (durationMin[0] || 0) * 60 + (durationMin[1] || 0);
};

export const toFormattedDate = (date: Date): string =>
  format(date, 'yyyy-MM-dd');

export const byAscendingDate = (a: Date, b: Date): number =>
  a.getTime() - b.getTime();

export const getClassroom = (
  change: ScheduleChange | undefined,
  initialSchedule: CreateClubState
) => change?.room ?? initialSchedule.clubClassRoom;

export const getStartTime = (
  change: ScheduleChange | undefined,
  initialSchedule: CreateClubState
) => change?.startTime ?? initialSchedule.clubStartTime;

export const getDuration = (
  change: ScheduleChange | undefined,
  initialSchedule: CreateClubState
) => parseDuration(change?.duration ?? initialSchedule.clubDuration);

export const changeSingleSchedule = (
  date: string,
  initialSchedule: CreateClubState
) => {
  const change: ScheduleChange | undefined =
    initialSchedule.scheduleChange?.[date];
  return {
    date,
    classroom: getClassroom(change, initialSchedule),
    startTime: getStartTime(change, initialSchedule),
    duration: getDuration(change, initialSchedule),
  };
};

export function changeScheduleForState(initialSchedule: CreateClubState) {
  return function (date: string) {
    return changeSingleSchedule(date, initialSchedule);
  };
}

export function updateSchedules(initialSchedule: CreateClubState) {
  const dates = initialSchedule.clubStartDate || [];
  const sorted = [...dates].sort(byAscendingDate);
  const formatted = sorted.map(toFormattedDate);
  return formatted.map(changeScheduleForState(initialSchedule));
}
export const getClubTerm = (initialSchedule: CreateClubState): string => {
  const isWeekly = initialSchedule.clubFrequency === 'WEEKLY';
  return isWeekly ? initialSchedule.clubTerm : '0';
};
export const getValues = (initialSchedule: CreateClubState) => {
  const schedules = updateSchedules(initialSchedule);
  console.log({ clubSchedule: schedules });
  return {
    input: {
      name: initialSchedule.clubName,
      description: initialSchedule.clubDesc,
      teacherId: initialSchedule.teacherId,
      type: 'mentor',
      minMember: parseInt(initialSchedule.clubMinStudent, 10) || 0,
      maxMember: parseInt(initialSchedule.clubMaxStudent, 10) || 0,
    },
    schedules,
    frequency: initialSchedule.clubFrequency,
    clubTerm: getClubTerm(initialSchedule),
  };
};

export const createClubDash = async (
  state: CreateClubState,
  createClub: (_opts: {
    variables: ReturnType<typeof getValues>;
  }) => Promise<unknown>
) => {
  const variables = getValues(state);
  try {
    console.log('Club Data', variables);
    await createClub({ variables });
    alert('Амжилттай үүсгэлээ!');
  } catch (error) {
    console.error('Mutation failed:', error);
    alert('Алдаа гарлаа');
  }
};

export const getOverrideRoom = (
  schedule: Record<string, ScheduleChange>,
  key: string,
  s: CreateClubState
) => schedule[key]?.room ?? s.clubClassRoom;

export const getOverrideStartTime = (
  schedule: Record<string, ScheduleChange>,
  key: string,
  s: CreateClubState
) => schedule[key]?.startTime ?? s.clubStartTime;

export const getOverrideDuration = (
  schedule: Record<string, ScheduleChange>,
  key: string,
  s: CreateClubState
) => schedule[key]?.duration ?? s.clubDuration;

export const buildOverride = (
  schedule: Record<string, ScheduleChange>,
  key: string,
  field: keyof ScheduleChange,
  value: string,
  s: CreateClubState
): ScheduleChange => ({
  room: getOverrideRoom(schedule, key, s),
  startTime: getOverrideStartTime(schedule, key, s),
  duration: getOverrideDuration(schedule, key, s),
  [field]: value,
});

export const useCreateClubMutation = (state: CreateClubState) => {
  const [createClub, { loading }] = useMutation(CREATE_CLUB_WITH_SCHEDULE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.clubStartDate?.length) {
      alert('Огноо сонгоно уу');
      return;
    }
    createClubDash(state, createClub);
  };

  return { handleSubmit, loading };
};
