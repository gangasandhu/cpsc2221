import { useState, useEffect } from "react";
import BlogPost from "../components/BlogPost";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getPostById } from "../services/postsApi.js";

const ViewPost = ({posts}) => {
  const { id } = useParams();
 
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  // TODO: for connection to backend
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  /** TODO: for connection to backend
   * Assuming this backend API structure
   * {
  "post": {
    "postID": 1,
    "userID": 1,
    "username": "@username",
    "email": "user@email.com",
    "title": "Post Title",
    "content": "Lorem ipsum dolor sit amet...",
    "datePublished": "2024-11-21"
  },
  "comments": [
    {
      "commentID": 1,
      "postID": 1,
      "userID": 2,
      "username": "@username2",
      "content": "Great post! Thanks for sharing.",
      "date": "2024-11-21"
    },
    {
      "commentID": 2,
      "postID": 1,
      "userID": 3,
      "username": "@username3",
      "content": "This is really insightful.",
      "date": "2024-11-21"
    }
  ]
}
   */

  useEffect(() => {
    // TODO: for connection to backend
    // const fetchPostData = async () => {
    //   try {
    //     setLoading(true);
    //     const response = await axios.get(`/api/post.php?id=${id}`);
    //     setPost(response.data.post);
    //     setComments(response.data.comments);
    //     setLoading(false);
    //   } catch (err) {
    //     setError("Failed to fetch post data.");
    //     setLoading(false);
    //   }
    // };
    // fetchPostData();

    // TODO: delete this temporary testing data once connection to backend is established
    
    const initialComments = []
    // TODO: delete this once connection to the backend is established
   
    const post = getPostById(posts, parseInt(id))
    
    setPost(post);
    setComments(initialComments);
  }, []);

  // TODO: connect to backend
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;

  return (
    <div className="p-6 bg-zinc-100 min-h-screen">
      {post && <BlogPost post={post} comments={comments} />}
    </div>
  );
};

export default ViewPost;
