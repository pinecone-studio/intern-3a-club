import gql from 'graphql-tag';

export const timetableTypeDefs = gql`
  type Timetable {
    id: ID!
    date: String!
    room: String!
    clubStartTime: String!
    duration: Int!
    clubId: String!
    club: Club
    createdAt: String!
    updatedAt: String!
  }

  input ScheduleInput {
    date: String!
    room: String!
    clubStartTime: String!
    duration: Int!
  }

  input CreateTimetableInput {
    date: String!
    room: String!
    clubStartTime: String!
    duration: Int!
    clubId: String!
  }

  input UpdateTimetableInput {
    id: ID!
    date: String
    room: String
    clubStartTime: String
    duration: Int
  }

  extend type Query {
    getTimetables: [Timetable]
    getTimetableByClub(clubId: ID!): [Timetable]
  }

  extend type Mutation {
    createTimetable(input: CreateTimetableInput!): Timetable
    updateTimetable(input: UpdateTimetableInput!): Timetable
    updateManyTimetables(inputs: [UpdateTimetableInput!]!): [Timetable]
    deleteTimetable(id: ID!): Boolean
    deleteManyTimetables(ids: [ID!]!): Boolean
  }

  extend type Club {
    timetables: [Timetable]
  }
`;
