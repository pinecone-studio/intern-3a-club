import { mergeTypeDefs } from '@graphql-tools/merge';
import { gql } from 'graphql-tag';

// Модулиудаа импортлох
import { clubTypeDefs } from './club.schema';


// Суурь Query болон Mutation (бусад схемүүд үүнийг extend хийнэ)
const baseTypeDefs = gql`
  type Query { _empty: String }
  type Mutation { _empty: String }
`;

export const typeDefs = mergeTypeDefs([
  baseTypeDefs,
  clubTypeDefs,
]);