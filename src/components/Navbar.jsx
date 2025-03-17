import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Logo Here</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-gray-200 text-black text-xl">
            Home
          </a>
          <a href="#" className="hover:text-gray-200 text-black text-xl">
            About
          </a>
          <a href="#" className="hover:text-gray-200 text-black text-xl">
            Contact Us
          </a>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
