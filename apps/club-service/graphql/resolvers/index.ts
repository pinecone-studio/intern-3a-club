// import { clerkAuth, ClerkPermission } from '@pinecone-monorepo/clerk/server';
// import { DateResolver, DateTimeResolver } from 'graphql-scalars';
import * as Mutation from './mutations';
import * as Query from './queries';

export const resolvers = {
  //   DateTime: DateTimeResolver,
  //   Date: DateResolver,
  Mutation: {
    ...Mutation,
    // impersonateUser: clerkAuth(Mutation.impersonateUser, ClerkPermission.IMPERSONATE_USER),
  },
  Query,
};
