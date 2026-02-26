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
    phoneNumber: String
    gender: String
    isActive: Boolean
    createdAt: String
    updatedAt: String
  }

  extend type Query {
    getAllTeachers: [Teacher!]!
    getTeacherById(id: ID!): Teacher
  }
`;
