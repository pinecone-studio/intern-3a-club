import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client';
import { SetContextLink } from '@apollo/client/link/context';

declare global {
  interface Window {
    Clerk?: {
      session?: {
        getToken: (_options: { template: string }) => Promise<string | null>;
      };
    };
  }
}

const httpLink = new HttpLink({
  uri: 'http://localhost:4200/api/graphql',
});

const authLink = new SetContextLink(async (prevContext) => {
  const token = await window.Clerk?.session?.getToken({
    template: 'pineclub',
  });

  return {
    ...prevContext,
    headers: {
      ...prevContext.headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
});
