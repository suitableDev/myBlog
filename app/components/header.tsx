import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  tags?: boolean;
}

export default function Header({ title = "", tags = false }: Props){
  return (
    <header className={headerDecoration}>
      <h2 className={headerTitle}>
        {title}
      </h2>

      {tags && (
        <div className={headerTags}>
          <Link href="/tag"> All tags</Link>
        </div>
      )}
    </header>
  );
};

//Currently underlines the header
const headerDecoration=`
py-14 
px-4 
mb-12 
text-center 
border-b
border-primary 
dark:border-primaryDark
`

//Styles the h2 tag for the title of the page you are viewing
const headerTitle=`
uppercase 
text-2xl 
mx-auto 
max-w-2xl 
font-bold
`

//Styles the link to the page that displays all tags 
const headerTags=`
text-xs 
mt-2 
hover:text-accent
`