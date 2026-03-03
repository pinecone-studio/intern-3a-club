import { gql } from '@apollo/client';

export const UPDATE_TIMETABLE = gql`
  mutation UpdateTimetable($input: UpdateTimetableInput!) {
    updateTimetable(input: $input) {
      id
      date
      room
      clubStartTime
      duration
    }
  }
`;
