import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserPostsPage = () => {
    // Example posts data (replace with API call to fetch user's posts)
    const [posts, setPosts] = useState([
        { id: 1, title: "My First Post", content: "This is the content of the first post." },
        { id: 2, title: "Learning React", content: "React is an awesome library for building UIs." },
        { id: 3, title: "Exploring Tailwind CSS", content: "Tailwind CSS makes styling so much easier!" },
    ]);

    // Handle Delete Post
    const handleDelete = (postId) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            setPosts(posts.filter((post) => post.id !== postId));
        }
    };


    return (
        <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Blog Posts</h1>

            {posts.length > 0 ? (
                <ul className="space-y-4">
                    {posts.map((post) => (
                        <li
                            key={post.id}
                            className="p-4 border rounded-lg shadow hover:shadow-md"
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
                                <div className="space-x-2">
                                    <Link
                                        to={`/editpost/${post.id}`}
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(post.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                            <p className="text-gray-600 mt-2">{post.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">You have not created any posts yet.</p>
            )}
        </div>
    );
};

export default UserPostsPage;
