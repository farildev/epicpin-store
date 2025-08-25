import React from 'react';
import { sanityClient } from '@/lib/sanity/sanity';
import { POST_QUERY } from '@/lib/sanity/queries';
import { BlogPost } from '@/types/sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

type Params = {
  slug: string;
};

const AnnounceDetail = async ({ params }: { params: Promise<Params> }) => {
  const { slug } = await params;
  const post: BlogPost | null = await sanityClient.fetch(POST_QUERY, {
    slug,
  });

  if (!post) notFound();

  return (
    <div className="min-h-dvh pt-[120px] pb-10">
      <div className="siteContainer">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Ana səhifə</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/announces">Elanlar</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{post._id}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="relative w-full h-[400px] my-8">
          {post.mainImage && (
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              fill
              className="w-full h-full object-cover rounded-lg"
              priority
            />
          )}
          {post.categories &&
            post.categories.map((category, idx) => (
              <span
                className="absolute top-5 right-5 text-white bg-main w-16 flex items-center justify-center p-1 rounded-full text-sm font-semibold"
                key={idx}
              >
                {category}
              </span>
            ))}
        </div>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="text-gray-600 mb-8 flex items-center gap-4">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('az-AZ')}
          </time>
          {post.author && (
            <div className="flex items-center gap-2">
              <Image
                width={32}
                height={32}
                className="rounded-full"
                src={post.author.image?.asset?.url || ''}
                alt={post.author.name || 'Epicpin Store'}
              />
              <span>• {post.author.name}</span>
            </div>
          )}
        </div>

        <div className="prose max-w-none">
          <PortableText value={post.body} />
        </div>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  const slugs: string[] = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`,
  );

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post: BlogPost | null = await sanityClient.fetch(POST_QUERY, {
    slug,
  });

  if (!post) return { title: 'Post tapılmadı' };

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
