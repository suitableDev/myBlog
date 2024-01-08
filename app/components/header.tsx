import Link from "next/link";
import React from "react";
import QRgrid from "../qr/qrGrid";

interface Props {
  title: string;
  tags?: boolean;
}

export default function Header({ title = "", tags = false }: Props) {
  return (
    <header className={headerBox}>
      <div className={QRstyle}>
        <QRgrid />
      </div>

      <div className={titleAndTags}>
        <h2 className={headerTitle}>{title}</h2>
        {tags && (
          <div className={headerTags}>
            <Link href="/tag"> All tags</Link>
          </div>
        )}
      </div>
    </header>
  );
}

const headerBox = `
  flex
  relative
  overflow-hidden
  text-center 
  h-40
  px-4 
  py-4
  mb-8
  border-b
  border-primary 
  dark:border-primaryDark
`;

// Center the QR code within the header
const QRstyle = `
  absolute 
  inset-0
  flex 
  items-center 
  justify-center
  -z-50
  opacity-0
  sm:opacity-100
`;

// Center the content within titleAndTags
const titleAndTags = `
  my-auto
  mx-auto
`;

// Styles the h2 tag for the title of the page you are viewing
const headerTitle = `
  p-4
  uppercase 
  text-2xl 
  font-bold
  bg-background
  drop-shadow-[0_0_5px_rgba(255,255,255,1)]
  dark:bg-backgroundDark
  dark:drop-shadow-[0_0_5px_rgba(0,0,0,1)]
`;

// Styles the link to the page that displays all tags
const headerTags = `
  text-xs 
  mt-2 
  hover:text-accent
`;
