import Link from "next/link";
import Image from "next/image";
import classNames from "classnames"; //allows multiple classnames
import { Lilita_One, VT323 } from "next/font/google";
import { PostType } from "../../sanity/lib/interface";

interface Props {
  post: PostType;
}

const font = Lilita_One({ weight: "400", subsets: ["latin"] });
const dateFont = VT323({ weight: "400", subsets: ["latin"] });

export default function Post({ post }: Props) {
  const sortedTags = post?.tags?.sort((a, b) => a.name.length - b.name.length);

  return (
    <div className={cardStyle}>
      <Link href={`/posts/${post?.slug?.current}`}>
        <div className={container}>
          <div className={leftSide}>
            <h2 className={classNames(font.className, titleStyle)}>
              {post?.title}
            </h2>
            <p className={classNames(dateFont.className, dateStyle)}>
              {new Date(post?.publishedAt).toDateString()}
            </p>
            <p className={excerptStyle}>{post?.excerpt}</p>
            <div className={tagContainer}>
              {sortedTags.map((tag, num) => (
                <span key={num} className={tagStyle}>
                  #{tag?.name}
                </span>
              ))}
            </div>
          </div>
          <div className={imageStyle}>
            {post?.image && (
              <Image
                src={post?.image}
                alt={post?.alt}
                width={200}
                height={200}
                layout="fixed"
              />
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

const cardStyle = `
flex
flex-col
mb-4
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
`;

const container = `
flex 
flex-row
justify-between 
w-full
`;

const leftSide = `
flex
flex-col
justify-between
w-3/5 
p-4
`;

const titleStyle = `
text-xl 
dark:text-wordsDark
sm:text-2xl 
`;

const dateStyle = `
mb-2 
dark:text-wordsDark
`;

const excerptStyle = `
mb-4 
line-clamp-2
break-words
dark:text-gray-400 
sm:line-clamp-3
`;

const tagContainer = `
flex
flex-wrap
`;

const tagStyle = `
mr-2
mt-2
p-1 
border 
border-primary
rounded-sm 
text-xs
lowercase 
text-words
dark:text-wordsDark
dark:border-primaryDark
sm:text-sm
`;
const imageStyle = `
flex 
items-center
justify-end
w-2/5 
px-2
sm:w-2/5  
sm:p-4
`;
