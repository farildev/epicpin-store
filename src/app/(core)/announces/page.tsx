import { sanityClient } from '@/lib/sanity/sanity';
import { POSTS_QUERY } from '@/lib/sanity/queries';
import { BlogPost } from '@/types/sanity';
import AnnounceCard from '@/components/common/announce-card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elanlar',
  description:
    'Epicpin Store — Oyunlar və yeniliklər haqqında bütün məlumatları buradan ala bilərsiniz.',
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
};

const Announces = async () => {
  const posts: BlogPost[] = await sanityClient.fetch(
    POSTS_QUERY,
    {},
    { next: { revalidate: 60 } },
  );
  return (
    <div className="min-h-dvh pt-[120px]">
      <div className="siteContainer">
        <h1 className="text-4xl font-bold mb-8">Elanlar</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <AnnounceCard data={post} key={post._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announces;
