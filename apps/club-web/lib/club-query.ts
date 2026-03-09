import gql from 'graphql-tag';

export const GET_ALL_APPROVED_CLUBS = gql`
  query GetAllApprovedClubs {
    getAllApprovedClubs {
      id
      startDate
      endDate
      name
      description
      creatorId
      teacherId
      type
      status
      frequency
      clubTerm
      minMember
      maxMember
      createdAt
      timetables {
        id
        clubId
        date
        room
        clubStartTime
        duration
      }
      members {
        id
        studentId
        student {
          authUserId
          azureEmail
          firstName
          lastName
          classId
        }
      }
    }
  }
`;

export const GET_ALL_TEACHERS = gql`
  query GetAllTeachers {
    getAllTeachers {
      id
      firstName
      lastName
      profilePicture
    }
  }
`;

export const GET_ALL_CLUBS_BY_CREATOR_ID = gql`
  query GetAllClubsByCreatorId {
    getAllClubsByCreatorId {
      id
      name
      status
      type
      members {
        id
      }
    }
  }
`;
