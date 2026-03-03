import { Providers } from '../libs/apollo/Providers';
import './global.css';

import { ClerkProvider } from '@clerk/nextjs';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider clerkJSVersion="5.125.3">
          <Providers>{children}</Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
