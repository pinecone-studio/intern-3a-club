import gql from 'graphql-tag';
import { useMutation } from '@apollo/client/react';
import { CreateClubState } from '../../../club-dash/libs/types';
import { format } from 'date-fns';

export const CREATE_CLUB_WITH_SCHEDULE = gql`
  mutation CreateClubWithSchedules(
    $input: CreateClubInput!
    $startDate: [String!]!
    $classroom: String!
    $startTime: String!
    $duration: Int!
    $frequency: String!
  ) {
    createClubWithSchedules(
      input: $input
      startDate: $startDate
      classroom: $classroom
      startTime: $startTime
      duration: $duration
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

export const detailedSchedule = (
  dates: string[],
  room: string,
  time: string,
  duration: number
) => {
  return dates.map((date, index) => ({
    club: index + 1,
    date,
    room,
    startTime: time,
    durationMinutes: duration,
  }));
};

export const clubDatas = (
  s: CreateClubState,
  formattedDates: string[],
  durationMins: number
) => ({
  input: {
    name: s.clubName,
    description: s.clubDesc,
    teacherId: s.teacherName,
    type: 'mentor',
    minMember: parseInt(s.clubMinStudent, 10) || 0,
    maxMember: parseInt(s.clubMaxStudent, 10) || 0,
  },
  startDate: formattedDates,
  classroom: s.clubClassRoom,
  startTime: s.clubStartTime,
  duration: durationMins,
  frequency: s.clubFrequency,
});

export const getVariables = (s: CreateClubState) => {
  const formattedDates = [...(s.clubStartDate || [])]
    .sort((a, b) => a.getTime() - b.getTime())
    .map((d) => format(d, 'yyyy-MM-dd'));

  const durationMins = parseDuration(s.clubDuration);

  console.log({
    clubSchedule: detailedSchedule(
      formattedDates,
      s.clubClassRoom,
      s.clubStartTime,
      durationMins
    ),
  });

  return clubDatas(s, formattedDates, durationMins);
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
