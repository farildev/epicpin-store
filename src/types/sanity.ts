import { PortableTextBlock } from "@portabletext/react"

export interface SanityImageAsset {
  _id: string
  url: string
}

export interface SanityImage {
  asset: SanityImageAsset
  alt?: string
}

export interface Author {
  name: string
  image?: SanityImage
}

export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  publishedAt: string
  excerpt?: string
  body: PortableTextBlock
  mainImage?: SanityImage
  categories?: string[]
  author?: Author
}
