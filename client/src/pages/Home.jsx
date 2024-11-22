import { useState, useEffect } from "react";
import HomePost from "../components/HomePost";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Temporary data for testing
    const initialPosts = [
      {
        id: 1,
        user: {
          name: "User Name 1",
          username: "@username1",
          profileImage:
            "https://cdn-icons-png.flaticon.com/512/8847/8847419.png",
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
      },
      {
        id: 2,
        user: {
          name: "User Name 2",
          username: "@username2",
          profileImage:
            "https://cdn-icons-png.flaticon.com/512/8847/8847419.png",
          isFollowing: true,
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem necessitatibus nam esse illum.`,
        timestamp: "1:45 PM • 21/11/2024",
        views: 245000,
        engagement: {
          retweets: 60000,
          quotes: 25000,
          likes: 71000,
          bookmarks: 50000,
        },
        actions: {
          comments: 8,
          retweets: 12,
          likes: 50,
          shares: 3,
        },
      },
      {
        id: 3,
        user: {
          name: "User Name 3",
          username: "@username3",
          profileImage:
            "https://cdn-icons-png.flaticon.com/512/8847/8847419.png",
          isFollowing: false,
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem necessitatibus nam esse illum.`,
        timestamp: "2:30 PM • 21/11/2024",
        views: 123456,
        engagement: {
          retweets: 8000,
          quotes: 4500,
          likes: 9100,
          bookmarks: 7800,
        },
        actions: {
          comments: 1,
          retweets: 1,
          likes: 5,
          shares: 0,
        },
      },
      {
        id: 4,
        user: {
          name: "User Name 4",
          username: "@username4",
          profileImage:
            "https://cdn-icons-png.flaticon.com/512/8847/8847419.png",
          isFollowing: false,
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem necessitatibus nam esse illum.`,
        timestamp: "3:00 PM • 21/11/2024",
        views: 654321,
        engagement: {
          retweets: 12000,
          quotes: 35000,
          likes: 45000,
          bookmarks: 33000,
        },
        actions: {
          comments: 10,
          retweets: 15,
          likes: 100,
          shares: 5,
        },
      },
      {
        id: 5,
        user: {
          name: "User Name 5",
          username: "@username5",
          profileImage:
            "https://cdn-icons-png.flaticon.com/512/8847/8847419.png",
          isFollowing: true,
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem necessitatibus nam esse illum.`,
        timestamp: "4:15 PM • 21/11/2024",
        views: 321654,
        engagement: {
          retweets: 15000,
          quotes: 7000,
          likes: 21000,
          bookmarks: 19000,
        },
        actions: {
          comments: 15,
          retweets: 20,
          likes: 75,
          shares: 7,
        },
      },
      {
        id: 6,
        user: {
          name: "User Name 6",
          username: "@username6",
          profileImage:
            "https://cdn-icons-png.flaticon.com/512/8847/8847419.png",
          isFollowing: false,
        },
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem necessitatibus nam esse illum.`,
        timestamp: "5:00 PM • 21/11/2024",
        views: 100000,
        engagement: {
          retweets: 10000,
          quotes: 5000,
          likes: 15000,
          bookmarks: 14000,
        },
        actions: {
          comments: 3,
          retweets: 2,
          likes: 10,
          shares: 1,
        },
      },
    ];

    setPosts(initialPosts); // Set the posts data
  }, []);

  return (
    <div className="p-6">
      <div>
        <h1 className="text-4xl">This is home</h1>
        <h3 className="text-2xl">Subheading</h3>
      </div>

      <ul className="p-4 flex flex-wrap gap-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/ViewPost/${post.id}`}>
              <HomePost post={post} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;