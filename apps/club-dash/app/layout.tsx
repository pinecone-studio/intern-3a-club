'use client';

import './global.css';
import { apolloClient } from '../libs/apolloClient';
import { ApolloProvider } from '@apollo/client/react';

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
