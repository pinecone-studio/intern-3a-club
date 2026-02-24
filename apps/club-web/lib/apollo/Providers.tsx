'use client';

import { ApolloProvider } from '@apollo/client/react';
import { apolloClient } from './apollo-client';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
