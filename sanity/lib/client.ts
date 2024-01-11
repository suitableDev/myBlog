import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export async function getPreview() {
  const query = `
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
  const data = await client.fetch(query);
  return data;
}

export async function getPost(slug: string) {
  const query = `
    *[_type == "post" && slug.current =="${slug}"][0] {
        title,
        slug,
        publishedAt,
        body,
        _id,
        tags[]-> {
            _id,
            slug,
            name
        }
      }
    `
  const data = await client.fetch(query);
  return data;
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
    }
  }
  `
  const data = await client.fetch(query);
  return data
}

export async function getAllTags() {
  const query = `
  *[_type == "tag"] {
    name,
    slug,
    _id,
    "postCount": count(*[_type == "post" && references("tags", ^._id)])
  }
  `
  const data = client.fetch(query);
  return data
}

