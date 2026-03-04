import './global.css';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Providers } from '../lib/apollo/Providers';
import { ClerkProvider } from '@clerk/nextjs';

export const runtime = 'edge';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <html lang="en">
      <body className="bg-[#050816] text-white bg-[url('/pinebaatar.png')] bg-cover bg-center bg-no-repeat ">
        <ClerkProvider>
          <Providers>
            <Header />
            <div className="max-w-[1400px] mx-auto flex items-start min-h-screen  justify-center">
              <Sidebar />
              <main className="flex-1 min-w-0">{children}</main>
            </div>
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
