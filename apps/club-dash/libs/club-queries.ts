import gql from 'graphql-tag';
import { Data } from './types';

// Shared GraphQL queries for clubs used across admin views

export const GET_ALL_APPROVED_CLUBS = gql`
  query GetAllApprovedClubs {
    getAllApprovedClubs {
      id
      name
      description
      creatorId
      teacherId
      type
      status
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

export const GET_ALL_PENDING_CLUBS = gql`
  query GetAllPendingClubs {
    getAllPendingClubs {
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

export const UPDATE_CLUB = gql`
  mutation UpdateClub($input: UpdateClubInput!) {
    updateClub(input: $input) {
      id
      status
    }
  }
`;

export const GET_ALL_DECLINED_CLUBS = gql`
  query {
    getAllClubs(status: declined) {
      id
      name
      status
    }
  }
`;

export const DELETE_CLUB = gql`
  mutation DeleteClub($id: ID!) {
    deleteClub(id: $id)
  }
`;

export const DELETE_TIMETABLE = gql`
  mutation DeleteTimetable($id: ID!) {
    deleteTimetable(id: $id)
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
