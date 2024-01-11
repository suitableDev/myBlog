import Link from "next/link"
import React from "react"
import { Lilita_One, VT323} from 'next/font/google'
import { PostType } from '../utills/interface'
import classNames from "classnames"

interface Props {
    post: PostType;
}

const font = Lilita_One({weight: "400", subsets: ["latin"]})
const dateFont = VT323({weight: "400", subsets: ["latin"]})

export default function Post({post}: Props) {
  return (
    <div className={cardStyle}>
      <Link href={`/posts/${post?.slug?.current}`}>
      <h2 className={classNames(font.className, titleStyle)}>{post?.title}</h2>
        <p className={classNames(dateFont.className, dateStyle)}>{new Date(post?.publishedAt).toDateString()}</p>
        <p className={excerptStyle}>{post?.excerpt}</p>
      </Link>

      <div>
        {post?.tags?.map((tag, num) => (
          <span key={num} className={tagStyle}>#{tag?.name}</span>
        ))}
      </div>
    </div>
  )
}

//Styles for post preview card
const cardStyle = `
mb-8
p-4
border
border-gray-900
rounded-md
shadow-sm
shadow-gray

text-words
bg-background
hover:text-words
hover:bg-gray-100
hover:shadow-md

dark:border-primaryDark
dark:text-wordsDark
dark:bg-backgroundDark
hover:dark:bg-neutral-950
`

//styles for post preview title
const titleStyle=`
text-2xl 
dark:text-wordsDark
`
//styles for post preview date
const dateStyle=`
my-2 
dark:text-wordsDark
`
//styles for post preview excerpt
const excerptStyle=`
mb-4 
line-clamp-2
break-words
dark:text-gray-400 
`
//styles for post preview tags
const tagStyle=`
mr-2 
p-1 
border 
rounded-sm 
text-sm 
lowercase 
text-words

dark:text-wordsDark
dark:border-primaryDark

`