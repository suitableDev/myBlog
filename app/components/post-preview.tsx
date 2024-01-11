import Link from "next/link"
import React from "react"
import { Lilita_One, VT323} from 'next/font/google'
import { PostType } from '../utills/interface'
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image"
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
      <div className={container}>
        <div className={leftSide}>
      <h2 className={classNames(font.className, titleStyle)}>{post?.title}</h2>
        <p className={classNames(dateFont.className, dateStyle)}>{new Date(post?.publishedAt).toDateString()}</p>
       
        <p className={excerptStyle}>{post?.excerpt}</p>
        <div>
        {post?.tags?.map((tag, num) => (
          <span key={num} className={tagStyle}>#{tag?.name}</span>
        ))}
      </div>
        </div>
        
        <div className={imageStyle}>
          <div><Image src="https://pbs.twimg.com/profile_images/443395572783800322/nXTuit5o_400x400.jpeg" alt="Post" width={200} height={200} layout="fixed"/></div>
          </div>
        </div>
      </Link>
    </div>
  )
}


const cardStyle = `
mb-8
border
border-gray-900
rounded-md
shadow-sm
shadow-gray

flex
flex-col

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
const container=`
flex 
justify-between 
w-full
`

const leftSide=`
flex
flex-col
w-3/5 
p-4
`

const titleStyle=`
text-2xl 
dark:text-wordsDark
`

const dateStyle=`
my-2 
dark:text-wordsDark
`

const excerptStyle=`
mb-4 
line-clamp-2
sm:line-clamp-3
break-words
dark:text-gray-400 
`

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
const imageStyle=`
p-2
flex 
items-center
justify-end
w-2/5 
sm:w-2/5  
sm:p-4
`