import { useEffect } from "react";

const HomePost = ({ post }) => {
  useEffect(() => {
    console.log(post);
  });

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength - 3) + "...";
    }
    return text;
  };

  const maxLength = 140;

  return (
    <div className="px-4 py-3 rounded bg-zinc-100 flex flex-col gap-4 w-96 drop-shadow-md">
      <div className="flex justify-between">
        <div className="flex gap-x-2 items-center">
          {/* TODO: To include images */}
          {/* <img
            src={post.user.profileImage}
            alt="User profile image"
            className="w-10 h-10"
          /> */}
          <div>
            <h1 className="text-lg font-medium leading-4">{post.username}</h1>
            <h1 className="text-gray-500">{post.email}</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <p className="h-20">
          {truncateText(post.content, maxLength)}
        </p>
        <p className="text-gray-500">
          {post.datePublished}{" "}
          {/* TODO: To include Views */}
          {/* <span className="font-bold text-black">{post.views}</span> Views */}
        </p>
      </div>
    </div>
  );
};

export default HomePost;
