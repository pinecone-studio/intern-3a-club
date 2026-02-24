import gql from 'graphql-tag';

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

