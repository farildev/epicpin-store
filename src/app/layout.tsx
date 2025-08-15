import { DM_Sans } from 'next/font/google';
import '@/assets/styles/globals.css';
import { Toaster } from 'sonner';
import { ThemeProvider } from 'next-themes';
import Sidebar from '@/components/common/sidebar';
import { ReactNode } from 'react';
import { Metadata } from 'next';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Epicpin | Cibinizə uyğun alış-veriş',
    template: '%s | Epicpin',
  },
  description:
    'Epicpin Store — PUBG Mobile, Valorant, FC 25, Point Blank, TikTok Jeton və daha çox oyun üçün ucuz və etibarlı ödəniş sistemi. Sürətli çatdırılma və münasib qiymətlər!',
  authors: [{ name: 'Faril Mammadov', url: 'https://www.faril.dev/' }],
  keywords: [
    'Epicpin Store',
    'PUBG Mobile UC',
    'Valorant Points',
    'FC 25 Points',
    'Point Blank Cash',
    'TikTok jeton',
    'oyun ödənişləri',
    'epin satış',
    'ucuz oyun valyutası',
    'epin almaq',
    'online oyun ödənişi',
  ],
  icons: {
    icon: '/images/logo-main.svg',
  },
  openGraph: {
    title: 'Epicpin | Cibinizə uyğun alış-veriş',
    description:
      'Epicpin Store — Oyun valyutaları və epinlər üçün ən sərfəli ünvan. PUBG Mobile, Valorant, FC 25 və daha çox!',
    url: 'https://epicpin.store',
    siteName: 'Epicpin Store',
    images: [
      {
        url: 'https://epicpin.store/images/epicpin-seo-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Epicpin Store - Oyun ödənişləri',
      },
    ],
    locale: 'az_AZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Epicpin | Cibinizə uyğun alış-veriş',
    description:
      'Epicpin Store — Oyun valyutaları və epinlər üçün ən sərfəli ünvan. PUBG Mobile, Valorant, FC 25 və daha çox!',
    images: ['https://epicpin.store/images/epicpin-seo-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://epicpin.store',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="az" suppressHydrationWarning>
      <body className={`h-dvh antialiased ${dmSans.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Sidebar />
          {children}
          <Toaster position="top-right" theme="dark" closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
