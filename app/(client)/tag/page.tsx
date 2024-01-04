import React from "react"
import { client } from "@/sanity/lib/client"
import { Tag } from "@/app/utills/interface"
import Header from "@/app/components/header";
import Link from "next/link";

async function getAllTags() {
    const query = `
    *[_type == "tag"] {
      name,
      slug,
      _id,
      "postCount": count(*[_type == "post" && references("tags", ^._id)])
    }
    `
    const tags = client.fetch(query);
    return tags;
  }

export const revalidate = 60

export default async function page() {
    const tags: Tag[] = await getAllTags();
    console.log(tags, "tags")
  return (
    <div>
      <Header title="Tags" />
      <div>
        {tags?.length > 0 &&
          tags?.map((tag) => (
            <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
              <div className={allTags}>
                #{tag.name} ({tag?.postCount})
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

const allTags=`
mb-2 
p-2 
text-sm 
lowercase
border 
text-words
bg-background
hover:text-neutral-500


//dark
dark:bg-backgroundDark
dark:text-wordsDark
dark:border-primaryDark
hover:dark:text-accent
`