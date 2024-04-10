import React from "react";
import { getPost } from "@/sanity/lib/fetchData";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { PostType } from "@/app/utills/interface";
import { notFound } from "next/navigation";
import Header from "@/app/components/header";
import PostParagraphs from "../../../components/post-paragraph";
import Tags from "@/app/components/tags";
import InfoBox from "@/app/components/post-infoBox";

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

        <div className="pt-4 pb-4 max-w-2xl mx-auto border-b-2">
      <div className="flex justify-between items-end">
        <h2 className="text-left text-3xl font-bold">{post?.title}</h2>
        <span className="text-sm">{new Date(post?.publishedAt).toDateString()}</span>
      </div>
      
      </div>
      <div className="flex flex-row max-w-2xl mx-auto">
          <InfoBox image={post} links={post.links}/>
        </div>
        <div className={portableTxtStyles}>
          <PortableText
            value={post?.intro}
            components={myPortableTextComponents}
          />
        </div>
        
        <PostParagraphs paragraphs={post?.paragraphs} />
        <div className="pt-4">
        <Tags tags={post?.tags}/>
        </div>
      </div>
    </>
  );
}

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="mt-8">
        <Image src={urlForImage(value)} alt="Post" width={700} height={700} />
      </div>
    ),
  },
};

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
