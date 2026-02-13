import { gql } from 'graphql-tag';

export const timetableTypeDefs = gql`
  type Timetable {
    id: ID!
    date: String!
    clubStartTime: String
    clubEndTime: String
    room: Int
    duration: Int
    clubId: String!
    club: Club # Timetable-ээс тухайн клубын мэдээллийг шууд харах боломжтой
    createdAt: String!
    updatedAt: String!
  }

  input CreateTimetableInput {
    date: String!
    clubStartTime: String
    clubEndTime: String
    room: Int
    duration: Int
    clubId: String!
  }

  input UpdateTimetableInput {
    id: ID!
    date: String
    clubStartTime: String
    clubEndTime: String
    room: Int
    duration: Int
  }

  extend type Query {
    getTimetables: [Timetable]
    getTimetableByClub(clubId: ID!): [Timetable]
  }

  extend type Mutation {
    createTimetable(input: CreateTimetableInput!): Timetable
    updateTimetable(input: UpdateTimetableInput!): Timetable
    deleteTimetable(id: ID!): Boolean
  }

  # Өмнөх Club төрөл дээр timetable-үүдийг нь нэмж өгвөл хэрэгтэй
  extend type Club {
    timetables: [Timetable]
  }
`;
