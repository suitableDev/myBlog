export interface PostType {
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  image: any;
  alt: string;
  links: Links
  intro: any;
  tags: Array<Tag>;
  _id: string;
  paragraphs: Array<Paragraph>;
  rating: number;
  symbol: string;
  ratingblurb: string;
}

export interface Links {
  playing: {
    _key: string;
    text: string;
    url: string;
  }[];
  listening: {
    _key: string;
    artist: string;
    trackname: string;
    url: string;
  }[];
  watching: {
    _key: string;
    text: string;
    url: string;
  }[];
}


export interface Paragraph {
  image: string;
    alt: string;
    heading: string;
    text: any;
  };
export interface Tag {
    name: string
    slug: { current: string }
    _id: string
    postCount?: number
  }

  export interface Footer {
    words: string
    email: string
  }