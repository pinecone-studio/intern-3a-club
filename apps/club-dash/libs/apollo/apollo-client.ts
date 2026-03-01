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
<<<<<<< HEAD
  link: ApolloLink.from([authLink, httpLink]),
=======
  link: new HttpLink({
    uri: 'https://105-ochko-need-new-branch.cloudflare-pine-club.pages.dev/api/graphql',
  }),
>>>>>>> c15eda3d299fdc582969ab8907432fc51ba87935
  cache: new InMemoryCache(),
});
