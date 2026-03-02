import { gql } from '@apollo/client';

export const CREATE_CLUB_WITH_SCHEDULE = gql`
  mutation CreateClubWithSchedules(
    $input: CreateClubInput!
    $schedules: [ScheduleInput!]!
    $frequency: String!
    $clubTerm: String
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
