import { useState, useEffect } from "react";
import BlogPost from "../components/BlogPost";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getPostById } from "../services/postsApi.js";

const ViewPost = ({posts}) => {
  const { id } = useParams();
  console.log(posts)
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
    
    const initialComments = [
      {
        commentID: 1,
        postID: 1,
        userID: 2,
        username: "@username2",
        content:
          "Lorem ipsum dolor sit amet. Ab esse commodi sed blanditiis cupiditate id aliquam consequatur ut internos quaerat ut rerum rerum. Qui odit vero sit laudantium blanditiis ut voluptatem dolorem et quam possimus sed libero mollitia.",
        date: "12:11 PM • 21/11/2024",
      },
      {
        commentID: 2,
        postID: 1,
        userID: 3,
        username: "@username3",
        content:
          "This is a fascinating post! Thank you for sharing your insights. I'm particularly interested in the point about rerum rerum.",
        date: "12:45 PM • 21/11/2024",
      },
      {
        commentID: 3,
        postID: 1,
        userID: 4,
        username: "@username4",
        content:
          "Great post! I would love to hear more about how quam possimus sed libero mollitia could be applied in a practical scenario.",
        date: "01:05 PM • 21/11/2024",
      },
      {
        commentID: 4,
        postID: 1,
        userID: 5,
        username: "@username5",
        content:
          "I have a few questions about dolorem et quam possimus. Are there any resources you recommend to dive deeper into this topic?",
        date: "02:15 PM • 21/11/2024",
      },
      {
        commentID: 5,
        postID: 1,
        userID: 6,
        username: "@username6",
        content:
          "I really appreciate the details in this post. The way you explained sed dolorum sunt ut nesciunt was very clear and easy to understand.",
        date: "02:45 PM • 21/11/2024",
      },
      {
        commentID: 6,
        postID: 1,
        userID: 7,
        username: "@username7",
        content:
          "Amazing work! This post really helped me understand quam possimus better. Looking forward to more posts like this!",
        date: "03:10 PM • 21/11/2024",
      },
    ];
    // TODO: delete this once connection to the backend is established
   
    const post = getPostById(posts, parseInt(id))
    console.log(post)
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
