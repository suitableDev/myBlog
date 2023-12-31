import React from "react"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"
import { PostType } from "@/app/utills/interface"
import { notFound } from "next/navigation"
import Header from "@/app/components/header"

interface Params {
    params: {
      slug: string;
    };
  }

async function getPost(slug:string) {
    const query = `
    *[_type == "post" && slug.current =="${slug}"][0] {
        title,
        slug,
        publishedAt,
        excerpt,
        body,
        _id,
        tags[]-> {
            _id,
            slug,
            name
        }
      }
    `

    const post = await client.fetch(query)
    return post
}

export const revalidate = 60

export default async function Page({params}: Params) {
    const post: PostType = await getPost(params?.slug)
    
    if(!post){
      notFound()
    }

  return (
    <>
        <Header title={post?.title}/>
        <div className="text-center">
        <span className= "text-purple-500">
          {new Date(post?.publishedAt).toDateString()}
        </span>
        <div className="mt-5">
          {post?.tags?.map((tag) => (
            <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
              <span className="mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900">
                #{tag.name}
              </span>
            </Link>
          ))}
        </div>
        <div className={portableTxtStyles}>
          <PortableText value={post?.body} components={myPortableTextComponents} />
        </div>
        </div>
    </> 
  )
}

const myPortableTextComponents = {
    types: {
      image: ({ value }: any) => (
        <Image
          src={urlForImage(value)}
          alt="Post"
          width={700}
          height={700}
        />
      ),
    },
  };

const portableTxtStyles = `
mt-14
text-justify
max-w-2xl
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`