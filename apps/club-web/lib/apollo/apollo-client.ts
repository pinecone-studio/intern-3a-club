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
  uri: 'https://105-ochko-need-new-branch.cloudflare-pine-club.pages.dev/api/graphql',
});

// Шинэ SetContextLink ашиглалт
const authLink = new SetContextLink(async (prevContext) => {
  if (typeof window === 'undefined') {
    return prevContext;
  }

  const token = await window.Clerk?.session?.getToken();
  const nextHeaders = {
    ...prevContext?.headers,
  } as Record<string, string>;

  if (token) {
    nextHeaders.authorization = `Bearer ${token}`;
  } else {
    delete nextHeaders.authorization;
  }

  return {
    ...prevContext,
    headers: nextHeaders,
  };
});

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
});
