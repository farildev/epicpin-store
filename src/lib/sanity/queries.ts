export const POSTS_QUERY = `*[_type == "post" && defined(slug.current)][0...12]{
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  body,
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  "categories": categories[]->title,
  "author": author->{name, image}
}` as const

export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  body,
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  publishedAt,
  "author": author->{name, image}
}` as const
