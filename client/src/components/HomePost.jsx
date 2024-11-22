import { useEffect } from "react";

const HomePost = ({ post }) => {
  useEffect(() => {
    console.log(post);
  });

  return (
    <div className="px-4 py-3 rounded bg-zinc-100 flex flex-col gap-4 max-w-96">
      <div className="flex justify-between">
        <div className="flex gap-x-2 items-center">
          <img
            src={post.user.profileImage}
            alt="User profile image"
            className="w-10 h-10"
          />
          <div>
            <h1 className="text-lg font-medium leading-4">{post.user.name}</h1>
            <h1 className="text-gray-500">{post.user.username}</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <p>
          {post.content}
        </p>
        <p className="text-gray-500">
          {post.timestamp}{" "}
          <span className="font-bold text-black">{post.views}</span> Views
        </p>
      </div>
    </div>
  );
};

export default HomePost;
