import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client';
import { SetContextLink } from '@apollo/client/link/context';

// Window интерфейсийг Clerk-тэй тодорхойлох
declare global {
  interface Window {
    Clerk?: {
      session?: {
        getToken: () => Promise<string | null>;
      };
    };
  }
}

const httpLink = new HttpLink({
  uri: 'http://localhost:4200/api/graphql',
});

// Шинэ SetContextLink ашиглалт
const authLink = new SetContextLink(async (prevContext) => {
  const token = await window.Clerk?.session?.getToken();

  return {
    ...prevContext,
    headers: {
      ...prevContext?.headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
});
