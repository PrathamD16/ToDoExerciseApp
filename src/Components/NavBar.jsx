import React from "react";
import { Link } from "react-router-dom";

//username: from google authentication
//isSignedIn: A boolean value which represent state of user is signedIn or not
function NavBar({ username, isSignedIn }) {
  return (
    <div className="bg-gradient-to-tr from-green-500 to-blue-500 py-4 rounded-sm">
      <nav className="p-1 font-normal text-white mx-1">
        <ul className="flex justify-between">
          <div className="space-y-2 sm:space-y-0 sm:flex sm:space-x-9 text-xl sm:text-2xl">
            <Link to={"/"}>
              <li className="cursor-pointer hover:text-black">Home</li>
            </Link>
            <Link to={"/addexercise"}>
              <li className="cursor-pointer hover:text-black">Add Exercise</li>
            </Link>
            <Link to="/about">
              <li className="cursor-pointer hover:text-black">About</li>
            </Link>
          </div>
          <div>
            <p className="text-sm md:text-xl hidden md:inline-block hover:underline hover:cursor-pointer">
              Welcome, {username}
            </p>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
