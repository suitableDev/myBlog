import Link from "next/link"
import Image from "next/image"
import classNames from "classnames" //allows multiple classnames
import { Lilita_One, VT323 } from "next/font/google"
import { PostType } from "../utills/interface"

interface Props {
  post: PostType
}

const font = Lilita_One({ weight: "400", subsets: ["latin"] })
const dateFont = VT323({ weight: "400", subsets: ["latin"] })

export default function Post({ post }: Props) {
  const sortedTags = post?.tags?.sort((a, b) => a.name.length - b.name.length);

  return (
    <div className={cardStyle}>
      <Link href={`/posts/${post?.slug?.current}`}>
        
        <div className={container}>
          <div className={leftSide}>
            <div className={cardText}>
            <h2 className={classNames(font.className, titleStyle)}>
              {post?.title}
            </h2> 
            <p className={classNames(dateFont.className, dateStyle)}>
              {new Date(post?.publishedAt).toDateString()}
            </p>
            <p className={excerptStyle}>{post?.excerpt}</p>
            </div>
            <div className={tagContainer}>
            {sortedTags.map((tag, num) => (
                <span key={num} className={tagStyle}>
                  #{tag?.name}
                </span>
              ))}
            </div>
            </div>

          <div className={imageStyle}>
              {post?.image && 
              <Image
                src={post?.image}
                alt={post?.alt}
                width={200}
                height={200}
                layout="fixed"
              />}
          </div>
        </div>

      </Link>
    </div>
  )
}

const cardStyle = `
mb-4
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
const cardText=`
`

const container = `
flex 
flex-row
justify-between 
w-full
`

const leftSide = `
flex
flex-col
justify-between
w-3/5 
p-4
`

const titleStyle = `
text-xl 
sm:text-2xl 
dark:text-wordsDark
`

const dateStyle = `
mb-2 
dark:text-wordsDark
`

const excerptStyle = `
mb-4 
line-clamp-2
sm:line-clamp-3
break-words
dark:text-gray-400 
`

const tagContainer=`
flex
flex-wrap
`

const tagStyle = `
mr-2
mt-2
p-1 
border 
border-primary
rounded-sm 
text-xs
sm:text-sm
lowercase 
text-words

dark:text-wordsDark
dark:border-primaryDark
`
const imageStyle = `
px-2
flex 
items-center
justify-end
w-2/5 
sm:w-2/5  
sm:p-4
`
