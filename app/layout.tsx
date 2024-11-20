import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MainNav from '@/components/main-nav';
import SiteFooter from '@/components/site-footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StoritveFinder - Najdite lokalne ponudnike storitev',
  description: 'Poiščite in rezervirajte zaupanja vredne lokalne ponudnike storitev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sl">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <MainNav />
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}