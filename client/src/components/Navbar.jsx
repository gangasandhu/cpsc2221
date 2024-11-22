import React, { useState } from "react";
import { useUser } from "../context/UserContext";


const Navbar = () => {
  // Simulating user login state
  //   const [user, setUser] = useState({name: "Ganga"}); // Replace with actual user state from your app
  const {user, setUser} = useUser(); // Replace with actual user state from your app

  const handleLogout = () => {
    setUser(null); // Clears the user state on logout
  };


  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-white text-xl font-bold">DevLink</div>

          {/* Navigation Links */}
          <div className="hidden sm:flex space-x-4">
            <a
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="/posts"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              posts
            </a>
            
            <a
              href="/codeedit"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Code Editor
            </a>

            <a
              href="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
          </div>

          {/* Login/Register or User Avatar */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                {/* Avatar */}
                <div
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-600 text-white font-medium"
                  title={user.name}
                >
                  {user.name[0].toUpperCase()}
                </div>
                <span className="text-gray-300 ml-2 text-sm font-medium">
                  {user.name}
                </span>
                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex space-x-4">
                <a
                  href="/auth"
                  className="text-gray-300 bg-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </a>

              </div>
            )}
          </div>
        </div>
      </div>


    </nav>
  );
};

export default Navbar;
