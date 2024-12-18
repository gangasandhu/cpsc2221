import { IoIosMore } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const BlogPost = ({ post, comments, setComments }) => {
  const [newComment, setNewComment] = useState("");
  // const [allComments, setAllComments] = useState([]);
  const [isFollowing, setIsFollowing] = useState(post.isFollowing || false);
  const navigate = useNavigate();
  const { user } = useUser();

  // This function is for adding a new comment to the post
  // TODO: for connection to backend
  const addComment = async () => {
    if (!newComment.trim()) return;

    try {
      const savedComment = {
        postID: post.postID,
        userID: post.userID,
        content: newComment,
      }
      const response = await axios.post(`http://localhost/cpsc2221/comments`, savedComment);

      setComments((prevComments) => [...prevComments, {...savedComment, username: user.name}]);
      setNewComment("");
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  };

  // This function is to update the follow user button
  const toggleFollow = async () => {
    // TODO: for connection to backend and if the user is logged in
    // try {
    //   await axios.post(`/api/follow`, {
    //     userID: post.userID,
    //     follow: !isFollowing,
    //   });

    //   setIsFollowing((prev) => !prev);
    // } catch (error) {
    //   console.error("Failed to toggle follow status:", error);
    // }
    setIsFollowing((prev) => !prev);
  };

  // This function is to edit post on EditPost page
  const handleEdit = () => {
    navigate(`/EditPost/${post.postID}`);
  };

  return (
    <div className="px-8 py-4 pb-6 rounded bg-white drop-shadow-md flex flex-col gap-4 max-w-4xl mx-auto">
      <div className="flex justify-between">
        <div className="flex gap-x-2 items-center">
          <div>
            <h1 className="text-lg font-medium leading-4">{post.username}</h1>
            <h1 className="text-gray-500">{post.email}</h1>
          </div>

          {/* Follow user button */}
          {user && user.id !== post.userID && (
            <button
              className={`border-2 border-solid px-3 py-2 w-28 rounded-3xl font-semibold ${
                isFollowing
                  ? "border-gray-500 text-gray-500"
                  : "border-blue-500 text-blue-500"
              }`}
              onClick={toggleFollow}
            >
              {isFollowing ? "Unfollow" : "Follow"}
            </button>
          )}
        </div>

        {/* Edit post button */}
        {user && user.id === post.userID && (
          <button className="text-2xl" onClick={handleEdit}>
            <IoIosMore />
          </button>
        )}
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
            <button className="flex items-center gap-x-1">
              <FaRegComment className="text-xl" />
              <p>{comments.length}</p>
            </button>
          </li>
        </ul>
      </div>

      <div className="flex flex-col justify-around">
        <div className="pb-3">
          <h2 className="text-lg font-medium pb-1">Comments</h2>
          <input
            type="text"
            placeholder="Write a comment..."
            className="border px-2 py-1 flex-grow rounded"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            // TODO: for connection to backend
            onClick={addComment}
            className="border-2 border-solid border-gray-500 px-2 py-1 rounded-3xl text-gray-500 font-semibold"
          >
            Add
          </button>
        </div>

        {/* Displaying comments / or no comments if there are none */}
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
