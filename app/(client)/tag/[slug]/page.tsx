import React from "react"
import { getPostsByTag } from "@/sanity/lib/fetchData"
import { PostType } from "@/sanity/lib/interface"
import Header from "@/app/components/header"
import Post from "@/app/components/preview-card"

interface Params {
    params: {
        slug: string
    }
}

export const revalidate = 60

export default async function Page({params}:Params) {
    const posts: Array<PostType> = await getPostsByTag(params.slug)
  return (
    <div>
      <Header title={`#${params?.slug}`}/>
      <div className="spacer-mobile sm:spacer-normal">
        {posts?.length > 0 && posts?.map((post) => (
          <Post key={post?._id} post={post} />
        ))}
      </div>
    </div>
  )
}