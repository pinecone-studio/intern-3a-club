import gql from 'graphql-tag';

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
      frequency
      clubTerm
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
      members {
        id
        studentId
        student {
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
