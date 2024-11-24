import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AuthPage from "./pages/AuthPage";
import ViewPost from "./pages/ViewPost";
import CodePage from "./pages/CodePage";
import ProfilePage from "./pages/ProfilePage";
import EditPost from "./pages/EditPost";
import UserPostsPage from "./pages/UserPostsPage";
import AboutPage from "./pages/AboutPage";
import { useEffect, useState } from "react";

function App() {

  const [posts, setPosts] = useState(null);
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

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home posts={posts} />} />
        {posts && <Route path="/ViewPost/:id" element={<ViewPost posts={posts} />} />}
        <Route path="/auth" element={<AuthPage />} />
      
        <Route path="/codeedit" element={<CodePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<UserPostsPage />} />

        <Route path="/EditPost" element={<EditPost />} />
        <Route path="/EditPost/:id" element={<EditPost />} />
        <Route path="/about" element={<AboutPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
