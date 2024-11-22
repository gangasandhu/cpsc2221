import { useState, useEffect, useParams } from "react";
import BlogPost from "../components/BlogPost";

const ViewPost = () => {
  const id = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    // Temporary data for testing
    const initialPost = {
      id: 1,
      user: {
        name: "User Name 1",
        username: "@username1",
        profileImage: "https://cdn-icons-png.flaticon.com/512/8847/8847419.png",
        isFollowing: false,
      },
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem necessitatibus nam esse illum.`,
      timestamp: "12:11 PM • 21/11/2024",
      views: 987000,
      engagement: {
        retweets: 82000,
        quotes: 45000,
        likes: 91000,
        bookmarks: 78000,
      },
      actions: {
        comments: 5,
        retweets: 5,
        likes: 25,
        shares: 0,
      },
    };

    setPost(initialPost);
  }, [id]);

  return (
    <div>
      <h1>hello there</h1>
      <BlogPost post={post} />
    </div>
  );
};

export default ViewPost;
