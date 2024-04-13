import React from 'react';
import Image from "next/image";
import { PortableText } from '@portabletext/react';
import { Paragraph } from "@/app/utills/interface";

export default function PostParagraphs({ paragraphs }: { paragraphs: Array<Paragraph> }) {
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <div key={index}>
          <div className={paragraphHeader}>
          <h1>
            {paragraph?.heading}
          </h1>
          </div>
            
          <div className={imageStyle}>
            <Image
              src={paragraph?.image}
              alt={paragraph?.alt}
              width={900}
              height={300}
              layout="fixed"
            />
          </div>

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
pb-4
max-width 
mx-auto 
text-left 
text-3xl
font-bold
`
const imageStyle=`
flex
justify-center
max-width
mx-auto

`

const portableTxtStyles = `
mt-4
text-justify
max-width
mx-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-4
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;