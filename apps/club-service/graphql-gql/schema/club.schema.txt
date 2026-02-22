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
    type: String! # SQLite дээр .notNull() байгаа тул ! нэмэв
    creatorId: String
    teacherId: String
    preferredTeacher: String
    minMember: Int
    maxMember: Int
    createdAt: String!
    updatedAt: String!
  }

  input CreateClubInput {
    name: String!
    description: String
    status: ClubStatus
    type: String! # Заавал оруулах шаардлагатай
    creatorId: String
    teacherId: String
    preferredTeacher: String
    minMember: Int
    maxMember: Int
  }

  input UpdateClubInput {
    id: ID!
    name: String
    description: String
    status: ClubStatus
    type: String
    teacherId: String
    minMember: Int
    maxMember: Int
  }

  extend type Query {
    getClubs: [Club]
    getClubById(id: ID!): Club
  }

  extend type Mutation {
    createClub(input: CreateClubInput!): Club
    updateClub(input: UpdateClubInput!): Club
    deleteClub(id: ID!): Boolean
  }
`;
