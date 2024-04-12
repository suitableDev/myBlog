import { client } from "./client";

export const previewData = `
    *[_type == "post"] | order(publishedAt desc){
      title,
      slug,
      publishedAt,
      excerpt,
      _id,
      tags[]-> {
        _id,
        slug,
        name
      },
      "image": thumbnail.asset -> url,
      "alt": thumbnail.alt,
    }
  `;

export const tagsData = `
  *[_type == "tag"] {
    name,
    slug,
    _id,
    "postCount": count(*[_type == "post" && references("tags", ^._id)])
  }
  `;

export const footerData = `
  *[_type == "footer"][0]{
    words,
    email,
  }
  `;

export async function basicFetch(query: string) {
  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error during fetch:", error);
    throw error;
  }
}

export async function getPost(slug: string) {
  const query = `
      *[_type == "post" && slug.current =="${slug}"][0] {
          title,
          slug,
          publishedAt,
          intro,
          _id,
          "image": thumbnail.asset -> url,
          "alt": thumbnail.alt,
          links{

            playing[]{
              _key, 
              text, 
              url, 
            }, 

            listening[]{
              _key, 
              artist, 
              trackname, 
              url, 

            }, 
            watching[]{
              _key, 
              text, 
              url,
            },
          },
          tags[]-> {
              _id,
              slug,
              name
          },
          paragraphs[]{
            heading,
            "image": image.asset -> url,
            "alt": image.alt,
            text
          },
          rating,
          symbol,
          ratingblurb,
        }
      `;
  return basicFetch(query);
}

export async function getPostsByTag(tag: String) {
  const query = `
    *[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
      title,
      slug,
      publishedAt,
      excerpt,
      tags[]-> {
        _id,
        slug,
        name
      },
      "image": thumbnail.asset -> url,
      "alt": thumbnail.alt,
    }
    `;
  return basicFetch(query);
}
