'use client';
import { Providers } from '../lib/apollo/Providers';
import { Header } from '../components/Header';

import './global.css';
import { Sidebar } from '../components/Sidebar';

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <html lang="en">
      <body className="bg-[#050816] text-white">
        <Providers>
          <Header />
          <div className="max-w-[1700px] mx-auto flex items-start">
            <Sidebar />
            <main className="flex-1 min-w-0">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
