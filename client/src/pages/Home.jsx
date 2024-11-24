import { useState, useEffect } from "react";
import HomePost from "../components/HomePost";
import { Link } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  // TODO: for connection to backend
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // TODO: for connection to backend
  /**
   * Assuming this backend API structure
   * [
  {
    "postID": 1,
    "title": "Post Title 1",
    "content": "Lorem ipsum...",
    "datePublished": "2024-11-23",
    "userID": 1,
    "username": "@user1",
    "email": "user1@email.com",
    "postType": "Article",
    "contentType": "Text"
  },
  ...
]
   */

  useEffect(() => {
    // TODO: for connection to backend
    // const fetchPosts = async () => {
    //   try {
    //     setLoading(true);
    //     const response = await axios.get("/api/posts.php");
    //     setPosts(response.data);
    //     setLoading(false);
    //   } catch (err) {
    //     setError("Failed to fetch posts.");
    //     setLoading(false);
    //   }
    // };
    // fetchPosts();

    // TODO: delete this temporary testing data once the connection to the backend is established
    const initialPosts = [
      {
        postID: 1,
        userID: 1,
        username: "@username1",
        email: "user1@email.com",
        title: "Post 1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        datePublished: "12:11 PM • 21/11/2024",
      },
      {
        postID: 2,
        userID: 2,
        username: "@username2",
        email: "user2@email.com",
        title: "Post 2",
        content:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        datePublished: "1:45 PM • 21/11/2024",
      },
      {
        postID: 3,
        userID: 3,
        username: "@username3",
        email: "user3@email.com",
        title: "Post 3",
        content:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        datePublished: "2:30 PM • 21/11/2024",
      },
      {
        postID: 4,
        userID: 4,
        username: "@username4",
        email: "user4@email.com",
        title: "Post 4",
        content:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        datePublished: "3:10 PM • 21/11/2024",
      },
      {
        postID: 5,
        userID: 5,
        username: "@username5",
        email: "user5@email.com",
        title: "Post 5",
        content:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        datePublished: "4:05 PM • 21/11/2024",
      },
      {
        postID: 6,
        userID: 6,
        username: "@username6",
        email: "user6@email.com",
        title: "Post 6",
        content:
          "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        datePublished: "5:20 PM • 21/11/2024",
      },
      {
        postID: 7,
        userID: 7,
        username: "@username7",
        email: "user7@email.com",
        title: "Post 7",
        content:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        datePublished: "6:45 PM • 21/11/2024",
      },
      {
        postID: 8,
        userID: 8,
        username: "@username8",
        email: "user8@email.com",
        title: "Post 8",
        content:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        datePublished: "7:30 PM • 21/11/2024",
      },
      {
        postID: 9,
        userID: 9,
        username: "@username9",
        email: "user9@email.com",
        title: "Post 9",
        content:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
        datePublished: "8:15 PM • 21/11/2024",
      },
      {
        postID: 10,
        userID: 10,
        username: "@username10",
        email: "user10@email.com",
        title: "Post 10",
        content: "Et harum quidem rerum facilis est et expedita distinctio.",
        datePublished: "9:00 PM • 21/11/2024",
      },
      {
        postID: 11,
        userID: 11,
        username: "@username11",
        email: "user11@email.com",
        title: "Post 11",
        content:
          "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
        datePublished: "10:35 PM • 21/11/2024",
      },
      {
        postID: 12,
        userID: 12,
        username: "@username12",
        email: "user12@email.com",
        title: "Post 12",
        content: "Omnis voluptas assumenda est, omnis dolor repellendus.",
        datePublished: "11:10 PM • 21/11/2024",
      },
    ];

    // TODO: delete this once the connection to the backend is established
    setPosts(initialPosts);
  }, []);

  // TODO: for connection to backend
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;

  return (
    <div className="p-6">
      <div className="text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-800">DevLink</h1>
        <h3 className="text-2xl font-thin">Explore</h3>
      </div>

      <ul className="p-4 flex flex-wrap gap-4 justify-center">
        <li>
          {/* Link to add a new post */}
          <Link to="/EditPost">
            <button className="px-4 py-3 rounded border-2 border-blue-400 flex gap-x-2 w-96 h-full text-blue-400 justify-center items-center">
              Add a post <IoMdAddCircle className="text-3xl" />
            </button>
          </Link>
        </li>

        {/* All of the posts */}
        {posts.map((post) => (
          <li key={post.postID}>
            <Link to={`/ViewPost/${post.postID}`}>
              <HomePost post={post} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
