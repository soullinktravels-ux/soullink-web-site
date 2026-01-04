import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Visa Application Assistance | Soullink',
  description:
    'Nigeria-based experts in visa processing, job applications abroad, migration, and flight booking.',
  openGraph: {
    title: 'Visa Application Assistance | Soullink',
    description:
      'Nigeria-based experts in visa processing, job applications abroad, migration, and flight booking.',
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Soullink',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-neutral-100 text-neutral-900'}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
