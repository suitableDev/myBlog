import Image from "next/image";
import Link from "next/link";
import { Links } from "../utills/interface";

interface InfoBoxProps {
  image: any;
  links: Links;
}

export default function InfoBox({ image, links }: InfoBoxProps) {
  return (
    <>
      <div className="w-2/5 sm:w-3/5">
        {image && (
          <Image
          src={image.image}
          alt={image.alt}
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
        pl-4
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
    </>
  );
}

const linkContainer = `
flex
flex-col
align-left
`;
