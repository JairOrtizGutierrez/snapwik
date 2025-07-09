import type { IPost } from "@/models/IPostResponse";
import { Avatar } from "@heroui/react";
import { Ellipsis, Flame, Heart, MessageCircle, Share2 } from "lucide-react";
import type { FC } from "react";

interface PostProps {
  post: IPost;
}

const Post: FC<PostProps> = ({ post }) => {
  // return (
  //   <div className="text-sm">
  //     <img src={post.webformatURL} className="w-full h-[450px] object-cover" />
  //     <div className="flex justify-between items-center p-5">
  //       <div className="flex gap-6">
  //         <Avatar isBordered color="warning" src={post.userImageURL} />
  //         <div className="flex flex-col">
  //           <span className="font-semibold">{post.user}</span>
  //           <span>5 hrs ago</span>
  //         </div>
  //       </div>
  //       <div className="flex flex-col items-end gap-y-2">
  //         <div className="flex gap-4">
  //           <Flame size={20} />
  //           <MessageCircle size={20} />
  //           <Share2 size={20} />
  //         </div>
  //         <span className="font-semibold">{post.likes ?? 0} likes</span>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="text-sm bg-[#f9f9f9] rounded-3xl p-5">
      <div className="flex justify-between items-center pb-5">
        <div className="flex gap-5 p-1">
          <Avatar isBordered color="warning" src={post.userImageURL} />
          <div className="flex flex-col">
            <span className="font-semibold">{post.user}</span>
            <span className="text-gray-500 text-xs">5 hrs ago</span>
          </div>
        </div>
        <div>
          <Ellipsis />
        </div>
      </div>
      <div className="relative text-sm rounded-2xl overflow-hidden">
        <img
          src={post.webformatURL}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute bottom-0 backdrop-blur-xs w-full text-white">
          <div className="bg-black/50 p-4">
            <div className="flex gap-4">
              <div className="flex gap-2">
                <Flame size={20} />
                <span>{post.likes}</span>
              </div>
              <div className="flex gap-2">
                <MessageCircle size={20} />
                <span>{post.comments}</span>
              </div>
              <Share2 size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
    // return (
    //   <div className="text-sm bg-[#f9f9f9]">
    //     <div className="flex justify-between items-center p-5">
    //       <div className="flex gap-6 p-1">
    //         <Avatar isBordered color="warning" src={post.userImageURL} />
    //         <div className="flex flex-col">
    //           <span className="font-semibold">{post.user}</span>
    //           <span>5 hrs ago</span>
    //         </div>
    //       </div>
    //       <div>
    //         <Ellipsis />
    //       </div>
    //     </div>
    //     <div className="relative text-sm">
    //       <img
    //         src={post.webformatURL}
    //         className="w-full h-[450px] object-cover"
    //       />
    //       <div className="absolute bottom-0 backdrop-blur-xs w-full text-white">
    //         <div className="bg-black/50 p-4">
    //           <div className="flex gap-4">
    //             <div className="flex gap-2">
    //               <Flame size={20} />
    //               <span>{post.likes}</span>
    //             </div>
    //             <div className="flex gap-2">
    //               <MessageCircle size={20} />
    //               <span>{post.comments}</span>
    //             </div>
    //             <Share2 size={20} />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default Post;
