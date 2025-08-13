import { DM_Sans } from 'next/font/google';
import '@/assets/styles/globals.css';
import { Toaster } from 'sonner';
import { ThemeProvider } from 'next-themes';
import Sidebar from '@/components/common/sidebar';
import { ReactNode } from 'react';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Epicpin | Cibinizə uyğun alışveriş',
  authors: [{ name: 'Faril Mammadov', url: 'https://www.faril.dev/' }],
  description: 'Bütün oyunlara tək nöqtədən ucuz və güvənilir ödəniş',
  icons: {
    icon: '/images/logo.svg',
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
