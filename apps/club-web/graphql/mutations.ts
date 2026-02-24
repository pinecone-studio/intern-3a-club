import { gql } from '@apollo/client';

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
