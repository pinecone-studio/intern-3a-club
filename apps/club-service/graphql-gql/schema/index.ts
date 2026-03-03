import { mergeTypeDefs } from '@graphql-tools/merge';
import { gql } from 'graphql-tag';
import { clubTypeDefs } from './club.schema';
import { timetableTypeDefs } from './timetable.schema';
import { teacherTypeDefs } from './teacher.schema';
import { studentTypeDefs } from './student.schema';

// Суурь Query болон Mutation (бусад схемүүд үүнийг extend хийнэ)
const baseTypeDefs = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

// mergeTypeDefs массив дотор нэмж өгөх
export const typeDefs = mergeTypeDefs([
  baseTypeDefs,
  studentTypeDefs,
  teacherTypeDefs,
  clubTypeDefs,
  timetableTypeDefs,
]);
