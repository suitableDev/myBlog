import Link from "next/link";
import { Tag } from "@/app/utills/interface";

export default function Tags({ tags }: { tags: Array<Tag> }) {
  const sortedTags = tags?.sort((a, b) => b.name.length - a.name.length);
  return (
    <div className="flex flex-wrap gap-2 max-w-2xl mx-auto">
      {sortedTags.map((tag) => (
        <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
          <span className={tagStyle}>#{tag.name}</span>
        </Link>
      ))}
    </div>
  );
}

const tagStyle = `
p-1 
border 
rounded-sm 
text-xs
sm:text-sm
lowercase 
text-words

dark:text-wordsDark
dark:border-primaryDark
`;
