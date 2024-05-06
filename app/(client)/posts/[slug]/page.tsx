import React from "react";
import { getPost } from "@/sanity/lib/fetchData";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { PostType } from "@/sanity/lib/interface";
import { notFound } from "next/navigation";
import Header from "@/app/components/header";
import PostParagraphs from "../../../components/post-paragraph";
import Tags from "@/app/components/tags";
import InfoBox from "@/app/components/post-infoBox";
import ReviewBox from "@/app/components/post-reviewBox";

interface Params {
  params: {
    slug: string;
  };
}

export const revalidate = 60;

export default async function Page({ params }: Params) {
  const post: PostType = await getPost(params?.slug);
  if (!post) {
    notFound();
  }
  return (
    <>
      <Header title={post?.title} />
      <div className="text-center spacer-mobile sm:spacer-normal" /*Creates room for header. Edit in Global Css*/>
        <InfoBox info={post} links={post.links}/>
        <div className={portableTxtStyles}>
          <PortableText
            value={post?.intro}
            components={myPortableTextComponents}
          />
        </div>
        <PostParagraphs paragraphs={post?.paragraphs} />
        <ReviewBox info={post}/>
        <Tags tags={post?.tags}/>
      </div>
    </>
  );
}

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="mt-4">
        <Image src={urlForImage(value)} alt="Post" width={700} height={700} />
      </div>
    ),
  },
};

const portableTxtStyles = `
my-4
text-justify
max-width
mx-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-2
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;
