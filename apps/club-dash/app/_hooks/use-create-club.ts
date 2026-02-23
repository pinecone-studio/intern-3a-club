import gql from 'graphql-tag';
import { useMutation } from '@apollo/client/react';
import { mockWeekdays } from '../../../club-dash/libs/mockdata';
import { CreateClubState } from '../../../club-dash/libs/types';

const CREATE_CLUB_WITH_SCHEDULE = gql`
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

export const useCreateClubMutation = (state: CreateClubState) => {
  const [createClub, { loading }] = useMutation(CREATE_CLUB_WITH_SCHEDULE);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!state.clubStartDate) {
      alert('Огноо сонгоно уу');
      return;
    }

    const durationInMinutes = (val: string): number => {
      const [hours, minutes] = val.split(':').map(Number);
      return (hours || 0) * 60 + (minutes || 0);
    };

    const formattedDays = state.selectedDays
      .map((id: string) => mockWeekdays.find((d) => d.id === id)?.value)
      .filter((val): val is string => Boolean(val));

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
          startDate: state.clubStartDate.toISOString().split('T')[0],
          classroom: state.clubClassRoom,
          startTime: state.clubStartTime,
          duration: durationInMinutes(state.clubDuration),
          frequency: state.clubFrequency,
          selectedDays: formattedDays,
          selectedFreqId: state.selectedFreqId,
        },
      });
      alert('Амжилттай үүсгэлээ!');
    } catch (error) {
      console.error(error);
      alert('Алдаа гарлаа');
    }
  };

  return { handleSubmit, loading };
};
