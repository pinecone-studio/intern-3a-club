import { gql } from 'graphql-tag';

export const clubTypeDefs = gql`
  enum ClubStatus {
    pending
    approved
    declined
  }

  type Club {
    id: ID!
    name: String!
    description: String
    status: ClubStatus!
    type: String!
    creatorId: String
    teacherId: String
    preferredTeachers: [String]
    minMember: Int!
    maxMember: Int!
    createdAt: String!
    updatedAt: String!
    timetables: [Timetable]
  }

  input CreateClubInput {
    name: String!
    description: String
    status: ClubStatus
    type: String!
    creatorId: String
    teacherId: String
    preferredTeachers: [String]
    minMember: Int!
    maxMember: Int!
  }

  input UpdateClubInput {
    id: ID!
    status: ClubStatus
    type: String
    teacherId: String
    minMember: Int
    maxMember: Int
  }

  extend type Query {
    getAllClubs: [Club!]!
    getClubById(id: ID!): Club
    getAllPendingClubs: [Club!]!
    getAllApprovedClubs: [Club!]!
  }

  extend type Mutation {
    createClubWithSchedules(
      input: CreateClubInput!
      startDate: String!
      classroom: String!
      startTime: String!
      duration: Int!
      frequency: String!
      selectedDays: [String!]
    ): Club

    createClub(input: CreateClubInput!): Club
    updateClub(input: UpdateClubInput!): Club
    deleteClub(id: ID!): ID
  }
`;
