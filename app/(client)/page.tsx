import { getPreview } from "@/sanity/lib/client";
import Header from "../components/header";
import PostComponent from "../components/post-preview";
import { PostType } from "../utills/interface";

export const revalidate = 60;

export default async function Home() {
  const posts: PostType[] = await getPreview();

  return (
    <div>
      <Header title="A Blog" />
      <div className="spacer-mobile sm:spacer-normal">
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </div>
  );
}
