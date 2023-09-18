import React from "react";
import { Link } from "react-router-dom";

//username: from google authentication
//isSignedIn: A boolean value which represent state of user is signedIn or not
function NavBar({ username, isSignedIn }) {
  return (
    <div className="bg-gradient-to-tr from-green-500 to-blue-500 py-4 rounded-sm">
      <nav className="p-1 font-normal text-white mx-1">
        <ul className="flex justify-between">
          <div className="space-y-2 sm:space-y-0 sm:flex sm:space-x-9 text-xl">
            <Link to={"/"}>
              <li className="cursor-pointer hover:text-black md:hover:scale-110">Home</li>
            </Link>
            <Link to={"/addexercise"}>
              <li className="cursor-pointer hover:text-black md:hover:scale-110">Add Exercise</li>
            </Link>
            <Link to="/about">
              <li className="cursor-pointer hover:text-black md:hover:scale-110">About</li>
            </Link>
          </div>
          <div>
            <p className="mx-2 md:text-base hidden md:inline-block hover:underline hover:cursor-pointer">
              {
                isSignedIn ? <>Welcome, {username}</> : <>Sign in</>
              }
            </p>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
