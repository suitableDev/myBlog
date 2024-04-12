import Image from "next/image";
import Link from "next/link";
import { Links, PostType } from "../utills/interface";

interface InfoBoxProps {
  info: PostType;
  links: Links;
}

export default function InfoBox({ info, links }: InfoBoxProps) {
  return (
    <>
     <div className="pb-4 max-width mx-auto">
      <div className="flex justify-between items-end">
        <h1 className="text-left text-3xl font-bold">{info?.title}</h1>
        <span className="text-sm">{new Date(info?.publishedAt).toDateString()}</span>
      </div>
      
      </div>
    <div className="flex flex-row max-width mx-auto border-y border-primary dark:border-primaryDark py-4">
      <div className="w-0 sm:w-3/5">
        {info && (
          <Image
          src={info.image}
          alt={info.alt}
          width={300}
          height={300}
          layout="fixed"
          />
        )}
      </div>

      <div
        className="
        flex 
        flex-col 
        text-left
        w-3/5
        sm:w-2/5
        ">
          <h2> Ive mostly been...</h2>
          <div className="pt-4">
          <h3>Playing:</h3>
        {links?.playing?.map((link) => (
          <div key={link._key}>
            <ul>
              <li>
            <Link 
            href={link.url}
            target="_blank"
            className="underline hover:text-neutral-500 hover:dark:text-accent "
            >
            {link.text}
            </Link>
              </li>
              </ul>
          </div>
        ))}
        </div>
          <div className="pt-4">
          <h3>Watching:</h3>
        {links?.watching?.map((link) => (
          <div key={link._key}>
            <ul>
              <li>
            <Link 
            href={link.url}
            target="_blank"
            className="underline hover:text-neutral-500 hover:dark:text-accent "
            >
            {link.text}
            </Link>
              </li>
              </ul>
          </div>
        ))}
        </div>
          <div className="pt-4">
          <h3>Listening to:</h3>
        {links?.listening?.map((link) => (
          <div key={link._key}>
            <ul>
              <li>
            <Link 
            href={link.url}
            target="_blank"
            className="underline hover:text-neutral-500 hover:dark:text-accent "
            >
            {link.artist}
            </Link>
              </li>
              </ul>
          </div>
        ))}
        </div>
        
        </div>
      </div>
    </>
  );
}

const linkContainer = `
flex
flex-col
align-left
`;
