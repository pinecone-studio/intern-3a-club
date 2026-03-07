import gql from 'graphql-tag';
export const JOIN_CLUB = gql`
  mutation JoinClub($clubId: ID!) {
    joinClub(clubId: $clubId) {
      id
      studentId
      joinedAt
    }
  }
`;

export const LEAVE_CLUB = gql`
  mutation LeaveClub($clubId: ID!) {
    leaveClub(clubId: $clubId)
  }
`;
