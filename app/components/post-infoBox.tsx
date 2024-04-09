import Image from "next/image";
import Link from "next/link";
import { Links } from "../utills/interface";

interface InfoBoxProps {
  image: any; 
  links: Array<Links>;
}

export default function  InfoBox({ image, links }: InfoBoxProps) {
  return (
    <>
            <div className="w-3/5">
          {image && (
            <Image
            src={image.image}
            alt={image.alt}
            width={200}
            height={200}
            layout="fixed"
            />
            )}
        </div>

        <div className={linkContainer}>
          <h2>This Weeks Links:</h2>
          {links.map((link) => (
        <div key={link._key}>
          <Link href={link.url}>{link.text}</Link>
        </div>
      ))}
        </div>
    </>
  )
}

const linkContainer=`
flex
flex-col
`;

//TO DO: Create an info box for every post that includes preview image, links and some other date