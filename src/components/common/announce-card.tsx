import { BlogPost } from '@/types/sanity';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface AnnounceCardProps {
  data: BlogPost;
}

const AnnounceCard = ({ data }: AnnounceCardProps) => {
  return (
    <Link href={`/announces/${data.slug.current}`}>
      <article
        key={data._id}
        className="border border-gray-200 dark:border-gray-100/10 rounded-lg"
      >
        <div className="relative h-[200px] overflow-hidden group">
          {data.mainImage && (
            <Image
              src={data.mainImage.asset.url}
              alt={data.mainImage.alt || data.title}
              fill
              className="w-full h-full object-center object-cover group-hover:scale-110 transition-all duration-200 rounded"
            />
          )}
          {data.categories &&
            data.categories.map((category: string, index: number) => (
              <span
                className="absolute top-2 right-2 text-white bg-main w-16 flex items-center justify-center p-1 rounded-full text-sm font-semibold"
                key={index}
              >
                {category}
              </span>
            ))}
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mt-2 hover:text-main transition-colors">
            {data.title}
          </h2>
          {data.excerpt && <p className="text-gray-600 mb-4">{data.excerpt}</p>}
          <div className="text-sm text-gray-500 mt-2">
            {new Date(data.publishedAt).toLocaleDateString('az-AZ')}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default AnnounceCard;
