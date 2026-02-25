import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:3200/api/graphql',
  }),
  cache: new InMemoryCache(),
});
