import { client } from "@/sanity/lib/client";
import Header from "../components/header";
import PostComponent from "../components/post";
import { PostType } from "../utills/interface";

async function getPosts() {
  const query = `
    *[_type == "post"] | order(publishedAt desc){
      title,
      slug,
      publishedAt,
      excerpt,
      _id,
      tags[]-> {
        _id,
        slug,
        name
      }
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function Home() {
  const posts: PostType[] = await getPosts();

  return (
    <div>
      <Header title="My perfect blog" />
      <div className="spacer-mobile sm:spacer-normal">
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </div>
  );
}
