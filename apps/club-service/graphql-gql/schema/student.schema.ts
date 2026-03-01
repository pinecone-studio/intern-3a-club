import { gql } from 'graphql-tag';

export const studentTypeDefs = gql`
  type Student {
    id: ID!
    authUserId: String
    azureEmail: String!
    personalEmail: String
    profilePicture: String
    firstName: String
    lastName: String
    classId: String
    studentCode: String
    createdAt: String
    updatedAt: String
  }

  extend type Query {
    getAllStudents: [Student!]!
    getStudentById(id: ID!): Student
  }
`;
