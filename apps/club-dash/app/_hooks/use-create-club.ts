import gql from 'graphql-tag';
import { useMutation } from '@apollo/client/react';
import { CreateClubState, ScheduleChange } from '../../../club-dash/libs/types';
import { format } from 'date-fns';

export const CREATE_CLUB_WITH_SCHEDULE = gql`
  mutation CreateClubWithSchedules(
    $input: CreateClubInput!
    $schedules: [ScheduleInput!]!
    $frequency: String!
  ) {
    createClubWithSchedules(
      input: $input
      schedules: $schedules
      frequency: $frequency
    ) {
      id
      name
    }
  }
`;

export const parseDuration = (val: string): number => {
  const parts = val.split(':').map(Number);
  return (parts[0] || 0) * 60 + (parts[1] || 0);
};

export const toFormattedDate = (d: Date): string => format(d, 'yyyy-MM-dd');

export const byAscendingDate = (a: Date, b: Date): number =>
  a.getTime() - b.getTime();

export const getClassroom = (
  override: ScheduleChange | undefined,
  s: CreateClubState
) => override?.room ?? s.clubClassRoom;

export const getStartTime = (
  override: ScheduleChange | undefined,
  s: CreateClubState
) => override?.startTime ?? s.clubStartTime;

export const getDuration = (
  override: ScheduleChange | undefined,
  s: CreateClubState
) => parseDuration(override?.duration ?? s.clubDuration);

export const buildSingleSchedule = (date: string, s: CreateClubState) => {
  const override: ScheduleChange | undefined = s.scheduleChange?.[date];
  return {
    date,
    classroom: getClassroom(override, s),
    startTime: getStartTime(override, s),
    duration: getDuration(override, s),
  };
};

export function buildScheduleForState(s: CreateClubState) {
  return function (date: string) {
    return buildSingleSchedule(date, s);
  };
}

export function buildSchedules(s: CreateClubState) {
  const dates = s.clubStartDate || [];
  const sorted = [...dates].sort(byAscendingDate);
  const formatted = sorted.map(toFormattedDate);
  return formatted.map(buildScheduleForState(s));
}

export const getVariables = (s: CreateClubState) => {
  const schedules = buildSchedules(s);
  console.log({ clubSchedule: schedules });
  return {
    input: {
      name: s.clubName,
      description: s.clubDesc,
      teacherId: s.teacherName,
      type: 'mentor',
      minMember: parseInt(s.clubMinStudent, 10) || 0,
      maxMember: parseInt(s.clubMaxStudent, 10) || 0,
    },
    schedules,
    frequency: s.clubFrequency,
  };
};

export const performMutation = async (
  state: CreateClubState,
  createClub: (_opts: {
    variables: ReturnType<typeof getVariables>;
  }) => Promise<unknown>
) => {
  const variables = getVariables(state);
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
    performMutation(state, createClub);
  };

  return { handleSubmit, loading };
};
