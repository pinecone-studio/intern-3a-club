'use client';
import './global.css';

import { ApolloProvider } from '@apollo/client/react';
import { apolloClient } from '../lib/apolloClient';

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <html lang="en">
      <body>
        <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
      </body>
    </html>
  );
};

export default RootLayout;
