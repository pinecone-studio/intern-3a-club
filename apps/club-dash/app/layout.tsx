'use client';

import './global.css';
import { apolloClient } from '../libs/apollo-client';
import { ApolloProvider } from '@apollo/client/react';

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
