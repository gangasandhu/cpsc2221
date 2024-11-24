import { useState, useEffect } from "react";
import BlogPost from "../components/BlogPost";
import { useParams } from "react-router-dom";

const ViewPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Temporary data for testing
    const initialPost = {
      postID: 1,
      userID: 1,
      username: "@username",
      email: "user@email.com",
      content: "Lorem ipsum dolor sit amet. Ab esse commodi sed blanditiis cupiditate id aliquam consequatur ut internos quaerat ut rerum rerum. Qui odit vero sit laudantium blanditiis ut voluptatem dolorem et quam possimus sed libero mollitia. Ad exercitationem accusamus cum inventore doloremque in dolor consequatur rem aliquid aperiam nam enim architecto aut eveniet tempore ea incidunt quae.\n\nAut nostrum nemo est assumenda ipsam ex nihil doloribus. Qui cupiditate nobis est illum praesentium ut suscipit reiciendis ut molestias laudantium hic repudiandae quidem id error dignissimos ut soluta enim. \n\nSed dolorum sunt ut nesciunt omnis et voluptatem corporis ut doloremque necessitatibus ut dolorum facilis? Non odit voluptatem et reprehenderit quia est omnis ducimus sit numquam nesciunt aut fugiat dolor qui dolor dolore!",
      datePublished: "12:11 PM • 21/11/2024",
    };
    const initialComments = [
      {
        commentID: 1,
        postID: 1,
        userID: 2,
        username: "@username2",
        content: "Lorem ipsum dolor sit amet. Ab esse commodi sed blanditiis cupiditate id aliquam consequatur ut internos quaerat ut rerum rerum. Qui odit vero sit laudantium blanditiis ut voluptatem dolorem et quam possimus sed libero mollitia.",
        date: "12:11 PM • 21/11/2024",
      },
      {
        commentID: 2,
        postID: 1,
        userID: 3,
        username: "@username3",
        content: "This is a fascinating post! Thank you for sharing your insights. I'm particularly interested in the point about rerum rerum.",
        date: "12:45 PM • 21/11/2024",
      },
      {
        commentID: 3,
        postID: 1,
        userID: 4,
        username: "@username4",
        content: "Great post! I would love to hear more about how quam possimus sed libero mollitia could be applied in a practical scenario.",
        date: "01:05 PM • 21/11/2024",
      },
      {
        commentID: 4,
        postID: 1,
        userID: 5,
        username: "@username5",
        content: "I have a few questions about dolorem et quam possimus. Are there any resources you recommend to dive deeper into this topic?",
        date: "02:15 PM • 21/11/2024",
      },
      {
        commentID: 5,
        postID: 1,
        userID: 6,
        username: "@username6",
        content: "I really appreciate the details in this post. The way you explained sed dolorum sunt ut nesciunt was very clear and easy to understand.",
        date: "02:45 PM • 21/11/2024",
      },
      {
        commentID: 6,
        postID: 1,
        userID: 7,
        username: "@username7",
        content: "Amazing work! This post really helped me understand quam possimus better. Looking forward to more posts like this!",
        date: "03:10 PM • 21/11/2024",
      },
    ]


    setPost(initialPost);
    setComments(initialComments);
  }, []);

  return (
    <div className="p-6 bg-zinc-100 min-h-screen">
      {post && <BlogPost post={post} comments={comments} />}
    </div>
  );
};

export default ViewPost;
