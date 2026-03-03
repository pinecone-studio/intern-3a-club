import { gql } from '@apollo/client';
import { Data } from '../../../../libs/types';

export const DELETE_CLUB = gql`
  mutation DeleteClub($id: ID!) {
    deleteClub(id: $id)
  }
`;

export type DeleteClubData = {
  deleteClub: string;
};

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
      frequency
      clubTerm
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

export function getAllTimetablesFromData(data: Data | undefined) {
  return data?.getAllClubs?.flatMap((c) => c.timetables ?? []) ?? [];
}
