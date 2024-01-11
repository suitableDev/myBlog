export interface PostType {
    title: string
    slug: { current: string };
    publishedAt: string;
    excerpt: string;
    image: any
    alt: string
    body: any;
    tags: Array<Tag>;
    _id: string;
  }
  
  export interface Tag {
    name: string;
    slug: { current: string };
    _id: string;
    postCount?: number;
  }