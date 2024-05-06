import Link from "next/link";
import { Tag } from "@/sanity/lib/interface";

export default function Tags({ tags }: { tags: Array<Tag> }) {
  const sortedTags = tags?.sort((a, b) => b.name.length - a.name.length);
  return (
    <div className="pt-4">
    <div className="flex flex-wrap gap-2 max-width mx-auto">
      {sortedTags.map((tag) => (
        <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
          <span className={tagStyle}>#{tag.name}</span>
        </Link>
      ))}
    </div>
    </div>
  );
}

const tagStyle = `
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
