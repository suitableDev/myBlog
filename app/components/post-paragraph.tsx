import React from 'react';
import Image from "next/image";
import { PortableText } from '@portabletext/react';
import { Paragraph } from "@/app/utills/interface";

export default function PostParagraphs({ paragraphs }: { paragraphs: Array<Paragraph> }) {
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <div key={index}>
          <div className={imageStyle}>
            <Image
              src={paragraph?.image}
              alt={paragraph?.alt}
              width={700}
              height={200}
              layout="fixed"
            />
          </div>
          <h2 className={paragraphHeader}>
            {paragraph?.heading}
          </h2>
          <div className={portableTxtStyles}>
            <PortableText value={paragraph?.text} />
          </div>
        </div>
      ))}
    </>
  );
}


const paragraphHeader=`
flex 
pt-4
pb-4
border-b-2 
max-w-2xl 
mx-auto 
text-left 
text-3xl
font-bold
`
const imageStyle=`
flex
justify-center
max-w-2xl
mx-auto
`

const portableTxtStyles = `
my-4
text-justify
max-w-2xl
mx-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;