import './global.css';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Providers } from '../lib/apollo/Providers';
import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <html lang="en">
      <body className="bg-[#050816] text-white">
        <ClerkProvider>
          <Providers>
            <Header />
            <div className="max-w-[1700px] mx-auto flex items-start">
              <Sidebar />
              <main className="flex-1 min-w-0">{children}</main>
            </div>
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
