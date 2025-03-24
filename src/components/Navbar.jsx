import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white px-20 py-4 shadow-md mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Logo Here</h1>
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-gray-200 text-black text-xl">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-200 text-black text-xl">
            About
          </Link>
          <Link
            to="/products"
            className="hover:text-gray-200 text-black text-xl"
          >
            Products
          </Link>
          <Link to="contact" className="hover:text-gray-200 text-black text-xl">
            Contact Us
          </Link>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
