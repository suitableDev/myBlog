import React from "react"
import { client } from "@/sanity/lib/client"
import { PostType } from "@/app/utills/interface"
import Header from "@/app/components/header"
import Post from "@/app/components/post"

interface Params {
    params: {
        slug: string
    }
}

async function getPostsByTag(tag: String) {
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
    const posts = await  client.fetch(query);
    return posts;
  }

  export const revalidate = 60

export default async function Page({params}:Params) {
    const posts: Array<PostType> = await getPostsByTag(params.slug)
  return (
    <div>
      <Header title={`#${params?.slug}`} tags />
      <div>
        {posts?.length > 0 && posts?.map((post) => (
          <Post key={post?._id} post={post} />
        ))}
      </div>
    </div>
  )
}