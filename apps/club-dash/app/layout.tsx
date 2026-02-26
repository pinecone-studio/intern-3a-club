import { Providers } from '../libs/apollo/providers';
import './global.css';
import { ClerkProvider } from '@clerk/nextjs';

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
};
export default RootLayout;
