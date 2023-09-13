import React from "react";
import { Link } from "react-router-dom";

function NavBar({ username }) {
  return (
    <div className="bg-gradient-to-tr from-green-500 to-slate-500 py-4">
      <nav className="p-1 font-normal text-white mx-1">
        <ul className="flex justify-between">
          <div className="space-y-3 sm:space-y-0 sm:flex sm:space-x-9 text-xl sm:text-2xl">
            <Link to={'/'}>
              <li className="cursor-pointer hover:text-black">Home</li>
            </Link>
            <Link to={'/editexercise'}>
              <li className="cursor-pointer hover:text-black">Edit Exercise</li>
            </Link>
            <Link to='/about'>
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
