import { Providers } from '@/libs/apollo/Providers';
import './global.css';

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};
export default RootLayout;
