'use client';

import { ApolloProvider } from '@apollo/client/react';
import { apolloClient } from './apolloClient';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
