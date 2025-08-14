import React from 'react';
import { sanityClient } from '@/lib/sanity/sanity';
import { POST_QUERY } from '@/lib/sanity/queries';
import { BlogPost } from '@/types/sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface PageProps {
  params: {
    slug: string;
  };
}

const AnnounceDetail = async ({ params }: PageProps) => {
  const post: BlogPost | null = await sanityClient.fetch(POST_QUERY, {
    slug: params.slug,
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-dvh pt-[120px] pb-10">
      <div className="siteContainer">
        {/* Back link */}
        <Link
          href="/announces"
          className="text-black flex items-center gap-1 dark:text-white hover:text-main dark:hover:text-main transition-all duration-200 mb-6"
        >
          <ArrowLeft size={14} />
          Geri qayıt
        </Link>
        {post.mainImage && (
          <Image
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt || post.title}
            width={1200}
            height={600}
            className="w-full h-[300px] object-cover rounded-lg mb-8"
            priority
          />
        )}

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        {/* Meta */}
        <div className="text-gray-600 mb-8 flex items-center gap-4">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('az-AZ')}
          </time>
          {post.author && <span>• {post.author.name}</span>}
        </div>

        {/* Content - sadə render */}
        <div className="prose max-w-none">
          <PortableText value={post.body} />
        </div>
      </div>
    </div>
  );
};

// Static paths generate etmək üçün
export async function generateStaticParams() {
  const slugs: string[] = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`,
  );

  return slugs.map((slug) => ({
    slug,
  }));
}

// SEO metadata generate etmək
export async function generateMetadata({ params }: PageProps) {
  const post: BlogPost | null = await sanityClient.fetch(POST_QUERY, {
    slug: params.slug,
  });

  if (!post) {
    return {
      title: 'Post tapılmadı',
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt || `${post.title} haqqında ətraflı məlumat`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      images: post.mainImage
        ? [
            {
              url: post.mainImage.asset.url,
              width: 1200,
              height: 630,
              alt: post.mainImage.alt || post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.mainImage ? [post.mainImage.asset.url] : [],
    },
  };
}

export default AnnounceDetail;
