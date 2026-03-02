import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://105-ochko-need-new-branch.cloudflare-pine-club.pages.dev/api/graphql',
  }),
  cache: new InMemoryCache(),
});
