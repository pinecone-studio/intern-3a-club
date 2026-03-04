import gql from 'graphql-tag';

export const clubMemberTypeDefs = gql`
  type ClubMember {
    id: ID!
    clubId: String!
    studentId: String!
    joinedAt: String!
    updatedAt: String!
    student: Student
  }

  extend type Query {
    getClubMembersAll(clubId: ID!): [ClubMember!]!
  }

  extend type Mutation {
    joinClub(clubId: ID!): ClubMember
    leaveClub(clubId: ID!): ID
  }
`;
