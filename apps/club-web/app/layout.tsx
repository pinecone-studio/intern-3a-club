'use client';
import './global.css';

import { ApolloProvider } from '@apollo/client/react';
import { apolloClient } from '../lib/apolloClient';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
      </body>
    </html>
  );
}
