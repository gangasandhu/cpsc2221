import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    // TODO: for connection to the backend
    // const fetchPostData = async () => {
    //   try {
    //     const response = await axios.get(`/api/post.php?id=${id}`);
    //     const { title, content } = response.data.post;
    //     setPost(response.data.post);
    //     setTitle(title || "");
    //     setContent(content || "");
    //   } catch (error) {
    //     console.error("Failed to fetch post data", error);
    //   }
    // };
    // fetchPostData();
  }, [id]);

  const handleSave = async () => {
    const updatedPost = {
      id,
      title,
      content,
    };

    // TODO: for connection to the backend
    // try {
    //   await axios.post(`/api/editPost.php`, updatedPost);
    //   alert("Post updated successfully!");
    // } catch (error) {
    //   console.error("Failed to save the post", error);
    //   alert("Failed to save the post. Try again");
    // }
  };

  return (
    <div className="p-6 bg-zinc-100 min-h-screen">
      <div className="px-8 py-4 rounded bg-white drop-shadow-md max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          {post ? "Edit Post" : "Create New Post"}
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="flex flex-col gap-4"
        >
          <label className="flex flex-col">
            <span className="font-semibold">Title</span>
            <input
              type="text"
              placeholder="Enter post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-300 rounded px-3 py-2"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-semibold">Content</span>
            <textarea
              placeholder="Write your post content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={10}
              className="border-2 border-gray-300 rounded px-3 py-2"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
          >
            Save Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
