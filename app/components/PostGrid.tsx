import type { IPost, IPostResponse } from "@/models/IPostResponse";
import { fetchData } from "@/utils/fetchData";
import { useEffect, useState } from "react";
import Post from "./Post";

const PostGrid = () => {
  const [postList, setPostList] = useState<IPost[]>([]);

  useEffect(() => {
    const init = async () => {
      const { hits } = await fetchData<IPostResponse>(
        "https://pixabay.com/api/?key=51139260-9ce5b4ca8359ac34fa4a95f9b&q=yellow+flowers&image_type=photo&orientation=vertical",
      );

      setPostList(hits);
    };

    init();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-3 gap-x-8 gap-y-10">
        {postList.length
          ? postList.map((post) => <Post key={post.id} post={post} />)
          : "Loading"}
      </div>
    </div>
  );
};

export default PostGrid;
