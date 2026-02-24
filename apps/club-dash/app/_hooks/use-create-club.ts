import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/client/react';
import { CreateClubState, Data } from '../../../club-dash/libs/types';

export const GET_ALL_CLUBS = gql`
  query GetAllClubs {
    getAllClubs {
      id
      name
      description
      creatorId
      teacherId
      type
      status
      preferredTeachers
      minMember
      maxMember
      timetables {
        id
        clubId
        date
        room
        clubStartTime
        duration
      }
    }
  }
`;

export const CREATE_CLUB_WITH_SCHEDULE = gql`
  mutation CreateClubWithSchedules(
    $input: CreateClubInput!
    $startDate: String!
    $classroom: String!
    $startTime: String!
    $duration: Int!
    $frequency: String!
    $selectedDays: [String!]
  ) {
    createClubWithSchedules(
      input: $input
      startDate: $startDate
      classroom: $classroom
      startTime: $startTime
      duration: $duration
      frequency: $frequency
      selectedDays: $selectedDays
    ) {
      id
      name
    }
  }
`;

const weekdays = [
  { id: '1', day: 'M', value: 'MONDAY' },
  { id: '2', day: 'T', value: 'TUESDAY' },
  { id: '3', day: 'W', value: 'WEDNESDAY' },
  { id: '4', day: 'T', value: 'THURSDAY' },
  { id: '5', day: 'F', value: 'FRIDAY' },
  { id: '6', day: 'S', value: 'SATURDAY' },
  { id: '7', day: 'S', value: 'SUNDAY' },
];

const getDurationInMinutes = (durationStr: string): number => {
  const [hours, minutes] = durationStr.split(':').map(Number);
  return (hours || 0) * 60 + (minutes || 0);
};

const getFormattedDays = (selectedIds: string[]): string[] =>
  selectedIds
    .map((id) => weekdays.find((d) => d.id === id)?.value)
    .filter((val): val is string => Boolean(val));

export const useCreateClubMutation = (state: CreateClubState) => {
  const [createClub, { loading }] = useMutation(CREATE_CLUB_WITH_SCHEDULE, {
    refetchQueries: [{ query: GET_ALL_CLUBS }],
  });

  const {
    loading: isLoading,
    error: err,
    data,
  } = useQuery<Data>(GET_ALL_CLUBS);

  // Helper to handle the actual mutation logic and error reporting
  // Complexity: 2 (Try/Catch)
  const executeCreation = async () => {
    try {
      await createClub({
        variables: {
          input: {
            name: state.clubName,
            description: state.clubDesc,
            teacherId: state.teacherName,
            type: 'mentor',
            minMember: parseInt(state.clubMinStudent, 10),
            maxMember: parseInt(state.clubMaxStudent, 10),
          },
          startDate: state.clubStartDate?.toISOString().split('T')[0],
          classroom: state.clubClassRoom,
          startTime: state.clubStartTime,
          duration: getDurationInMinutes(state.clubDuration),
          frequency: state.clubFrequency,
          selectedDays: getFormattedDays(state.selectedDays),
          selectedFreqId: state.selectedFreqId,
        },
      });
      alert('Амжилттай үүсгэлээ!');
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      console.error(message);
      alert('Алдаа гарлаа');
    }
  };

  // The main handler now only manages the event and validation
  // Complexity: 2 (Function + If)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!state.clubStartDate) {
      alert('Огноо сонгоно уу');
      return;
    }

    await executeCreation();
  };

  return { handleSubmit, loading, isLoading, err, data };
};
