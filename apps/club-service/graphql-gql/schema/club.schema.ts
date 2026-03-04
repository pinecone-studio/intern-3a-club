import { gql } from 'graphql-tag';

export const clubTypeDefs = gql`
  enum ClubStatus {
    pending
    approved
    declined
  }

  enum ClubType {
    mentor
    self
  }

  enum ClubFrequency {
    ONCE
    WEEKLY
  }

  type Club {
    id: ID!
    name: String!
    description: String
    status: ClubStatus!
    type: ClubType!
    creatorId: String
    teacherId: String
    preferredTeachers: [String]
    minMember: Int!
    maxMember: Int!
    frequency: ClubFrequency!
    clubTerm: String
    createdAt: String!
    updatedAt: String!
    timetables: [Timetable]
    members: [ClubMember]
  }

  input CreateClubInput {
    name: String!
    description: String
    status: ClubStatus
    type: String!
    teacherId: String
    preferredTeachers: [String]
    minMember: Int!
    maxMember: Int!
  }

  input UpdateClubInput {
    id: ID!
    status: ClubStatus
    teacherId: String
  }

  extend type Query {
    getAllClubs: [Club!]!
    getAllPendingClubs: [Club!]!
    getAllApprovedClubs: [Club!]!
    getAllClubsByCreatorId: [Club!]!
    getClubById(id: ID!): Club
  }

  extend type Mutation {
    createClubWithSchedules(
      input: CreateClubInput!
      schedules: [ScheduleInput!]!
      frequency: String!
      clubTerm: String
    ): Club

    createClub(input: CreateClubInput!): Club
    updateClub(input: UpdateClubInput!): Club
    deleteClub(id: ID!): ID
  }
`;
