import { IoIosMore } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";

// This is named wrong. It's supposed to be for ViewBlog page. I will move this code to later.
const BlogPost = ({ post, comments }) => {
  return (
    <div className="px-8 py-4 pb-6 rounded bg-white drop-shadow-md flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="flex gap-x-2 items-center">
          {/* <img
            src={post.profileImage}
            className="w-10 h-10"
          /> */}
          <div>
            <h1 className="text-lg font-medium leading-4">{post.username}</h1>
            <h1 className="text-gray-500">{post.email}</h1>
          </div>
          {/* TODO: make this button functional */}
          <button className="border-2 border-solid border-blue-500 px-3 py-2 w-28 rounded-3xl text-blue-500 font-semibold">
            Follow
          </button>
        </div>
        {/* TODO: add a small edit component */}
        <button className="text-2xl">
          <IoIosMore />
        </button>
      </div>

      <div className="flex flex-col gap-y-4">
        <h2 className="text-lg font-bold">{post.title}</h2>
        <p className="whitespace-pre-wrap">{post.content}</p>
      </div>

      <div className="border-solid border-t-2 border-b-2 border-gray-300 py-3">
        <ul className="text-gray-500 flex gap-x-2">
          <li>
            <p className="text-gray-500">{post.datePublished}</p>
          </li>
          •
          <li>
            {/* TODO: make this button start a comment */}
            <button className="flex items-center gap-x-1">
              <FaRegComment className="text-xl" />
              <p>5</p>
            </button>
          </li>
        </ul>
      </div>

      <div className="flex flex-col justify-around">
        <div className="pb-3">
          <h2 className="text-lg font-medium pb-1">Comments</h2>
          {/* TODO: make this button start a comment */}
          <button className="border-2 border-solid border-gray-500 px-2 py-1 rounded-3xl text-gray-500 font-semibold">
            Add a comment...
          </button>
        </div>
        {comments.length > 0 ? (
          <div>
            <ul className="flex flex-col gap-y-4">
              {comments.map((comment) => (
                <li
                  key={comment.commentID}
                  className="bg-gray-100 px-4 py-2 rounded shadow-sm"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{comment.username}</h3>
                    <p className="text-gray-500 text-sm">{comment.date}</p>
                  </div>
                  <p className="whitespace-pre-wrap mt-2">{comment.content}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-gray-500">No comments yet</p>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
