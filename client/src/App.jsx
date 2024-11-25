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
import AddPost from "./pages/AddPost";

import { useEffect, useState } from "react";
import axios from "axios";

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
    const fetchPosts = async () => {
      try {
       
        const response = await axios.get("http://localhost/cpsc2221/posts");
        setPosts(response.data);
        
      } catch (err) {
       
        console.log(err)
      }
    };
    fetchPosts();

    // TODO: delete this temporary testing data once the connection to the backend is established
    // const initialPosts = [
    //   {
    //     postID: 1,
    //     userID: 1,
    //     username: "@username1",
    //     email: "user1@email.com",
    //     title: "Post 1",
    //     content:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     datePublished: "12:11 PM • 21/11/2024",
    //   },
    //   {
    //     postID: 2,
    //     userID: 2,
    //     username: "@username2",
    //     email: "user2@email.com",
    //     title: "Post 2",
    //     content:
    //       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //     datePublished: "1:45 PM • 21/11/2024",
    //   },
    //   {
    //     postID: 3,
    //     userID: 3,
    //     username: "@username3",
    //     email: "user3@email.com",
    //     title: "Post 3",
    //     content:
    //       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    //     datePublished: "2:30 PM • 21/11/2024",
    //   }
    // ];

    // // TODO: delete this once the connection to the backend is established
    // setPosts(initialPosts);
  }, []);

  const addPosts = (post) => {
    setPosts([...posts, post])
  }

  const deletePost = async (postID) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
        try {
            // Delete the post from the database
            alert(postID)
            await axios.delete(`http://localhost/cpsc2221/posts/${postID}`);

            // Remove the post from the local state
            const updatedPosts = posts.filter((post) => post.postID !== postID);
            setPosts(updatedPosts);

            
        } catch (error) {
            console.error("Failed to delete post:", error);
            alert("Failed to delete the post. Please try again.");
        }
    }
};


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home posts={posts} />} />
        {posts && <Route path="/ViewPost/:id" element={<ViewPost posts={posts} />} />}
        <Route path="/auth" element={<AuthPage />} />
      
        <Route path="/codeedit" element={<CodePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<UserPostsPage posts={posts} deletePost={deletePost} />} />

        <Route path="/addPost" element={<AddPost addPosts={addPosts}/>} />
        <Route path="/EditPost/:id" element={<EditPost posts={posts} setPosts={setPosts} />} />
        <Route path="/about" element={<AboutPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
