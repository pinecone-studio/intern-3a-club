import { Geist, Manrope } from 'next/font/google';
import Providers from '../libs/apollo/providers';
import './global.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${manrope.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};
export default RootLayout;
