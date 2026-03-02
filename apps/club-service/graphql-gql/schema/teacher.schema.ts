import { gql } from 'graphql-tag';

export const teacherTypeDefs = gql`
  type Teacher {
    id: ID!
    authUserId: String
    azureEmail: String!
    personalEmail: String
    profilePicture: String
    firstName: String
    lastName: String
    createdAt: String
    updatedAt: String
  }

  union SyncResponse = Teacher | Student

  extend type Query {
    getAllTeachers: [Teacher!]!
    getTeacherById(id: ID!): Teacher
  }

  extend type Mutation {
    syncUser: SyncResponse!
  }
`;
