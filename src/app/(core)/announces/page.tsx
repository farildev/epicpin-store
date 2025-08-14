import { sanityClient } from '@/lib/sanity/sanity';
import { POSTS_QUERY } from '@/lib/sanity/queries';
import { BlogPost } from '@/types/sanity';
import AnnounceCard from '@/components/common/announce-card';
const Announces = async () => {
  const posts: BlogPost[] = await sanityClient.fetch(
    POSTS_QUERY,
    {},
    { next: { revalidate: 60 } },
  );

  console.log(posts);
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
