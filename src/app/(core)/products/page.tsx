import GamesList from '@/components/common/games-list';
import { gamesData } from '@/mocks/gamesData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bütün Məhsullar ',
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
  ],
  icons: {
    icon: '/images/logo.svg',
  },
  openGraph: {
    title: 'Bütün Məhsullar | Epicpin Store',
    description:
      'Bütün oyun ödənişləri bir ünvanda — Epicpin Store. Ucuz qiymətlər, sürətli çatdırılma və 100% etibarlı alış-veriş!',
    url: 'https://epicpin.store/products',
    siteName: 'Epicpin Store',
    images: [
      {
        url: 'https://epicpin.store/images/seo-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Epicpin Store Məhsullar',
      },
    ],
    locale: 'az_AZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bütün Məhsullar | Epicpin Store',
    description:
      'Epicpin Store — Oyun valyutaları və epinlər üçün ən sərfəli ünvan. PUBG Mobile, Valorant, FC 25 və daha çox!',
    images: ['https://epicpin.store/images/seo-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://epicpin.store/products',
  },
};

const Games = () => {
  return (
    <div className="min-h-dvh w-full pt-[100px] pb-12 overflow-hidden">
      <div className="siteContainer">
        <div className="flex h-full">
          <GamesList data={gamesData} />
        </div>
      </div>
    </div>
  );
};

export default Games;
