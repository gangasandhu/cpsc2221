import { useState, useEffect } from "react";
import HomePost from "../components/HomePost";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Temporary data for testing
    const initialPosts = [
      {
        postID: 1,
        userID: 1,
        username: "@username1",
        email: "user1@email.com",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        datePublished: "12:11 PM • 21/11/2024",
      },
      {
        postID: 2,
        userID: 2,
        username: "@username2",
        email: "user2@email.com",
        content:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        datePublished: "1:45 PM • 21/11/2024",
      },
      {
        postID: 3,
        userID: 3,
        username: "@username3",
        email: "user3@email.com",
        content:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        datePublished: "2:30 PM • 21/11/2024",
      },
      {
        postID: 4,
        userID: 4,
        username: "@username4",
        email: "user4@email.com",
        content:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        datePublished: "3:10 PM • 21/11/2024",
      },
      {
        postID: 5,
        userID: 5,
        username: "@username5",
        email: "user5@email.com",
        content:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        datePublished: "4:05 PM • 21/11/2024",
      },
      {
        postID: 6,
        userID: 6,
        username: "@username6",
        email: "user6@email.com",
        content:
          "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        datePublished: "5:20 PM • 21/11/2024",
      },
      {
        postID: 7,
        userID: 7,
        username: "@username7",
        email: "user7@email.com",
        content:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        datePublished: "6:45 PM • 21/11/2024",
      },
      {
        postID: 8,
        userID: 8,
        username: "@username8",
        email: "user8@email.com",
        content:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        datePublished: "7:30 PM • 21/11/2024",
      },
      {
        postID: 9,
        userID: 9,
        username: "@username9",
        email: "user9@email.com",
        content:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
        datePublished: "8:15 PM • 21/11/2024",
      },
      {
        postID: 10,
        userID: 10,
        username: "@username10",
        email: "user10@email.com",
        content: "Et harum quidem rerum facilis est et expedita distinctio.",
        datePublished: "9:00 PM • 21/11/2024",
      },
      {
        postID: 11,
        userID: 11,
        username: "@username11",
        email: "user11@email.com",
        content:
          "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
        datePublished: "10:35 PM • 21/11/2024",
      },
      {
        postID: 12,
        userID: 12,
        username: "@username12",
        email: "user12@email.com",
        content: "Omnis voluptas assumenda est, omnis dolor repellendus.",
        datePublished: "11:10 PM • 21/11/2024",
      },
    ];

    setPosts(initialPosts); // Set the posts data
  }, []);

  return (
    <div className="p-6">
      <div className="text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-800">DevLink</h1>
        <h3 className="text-2xl font-thin">Explore</h3>
      </div>

      <ul className="p-4 flex flex-wrap gap-4 justify-center">
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
