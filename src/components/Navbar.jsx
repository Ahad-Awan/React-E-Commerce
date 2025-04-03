import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { MdAddShoppingCart } from "react-icons/md";
import { BsFillBagHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import Badge from "@mui/material/Badge";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const cartCount = 3;
  const wishlistCount = 5;

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-700 dark:text-blue-500"
      : "text-gray-900 dark:text-white";

  return (
    <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="flex items-center justify-between p-4 lg:px-12">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-10"
            alt="Logo"
          />
          <span className="text-3xl font-semibold dark:text-white hidden lg:block">
            E-Commerce
          </span>
        </Link>

        <div className="hidden md:flex space-x-10 text-lg">
          <Link to="/" className={`py-3 ${isActive("/")}`}>
            Home
          </Link>
          <Link to="/about" className={`py-3 ${isActive("/about")}`}>
            About
          </Link>
          <Link to="/contact" className={`py-3 ${isActive("/contact")}`}>
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <Link to="/Wishlist">
            <Badge badgeContent={wishlistCount} color="primary">
              <BsFillBagHeartFill className="text-gray-700 dark:text-white text-[40px]" />
            </Badge>
          </Link>
          <Link to="/ViewCart">
            <Badge badgeContent={cartCount} color="primary">
              <MdAddShoppingCart className="text-gray-700 dark:text-white text-[40px]" />
            </Badge>
          </Link>
          <button
            onClick={() => navigate("/adminDashboard")}
            className="hidden md:block bg-blue-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-800"
          >
            Admin Dashboard
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-white text-3xl"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col items-center p-6 space-y-6 text-lg">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={isActive("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={isActive("/about")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={isActive("/contact")}
              >
                Contact
              </Link>
            </li>
            <button
              onClick={() => {
                setIsOpen(false);
                navigate("/adminDashboard");
              }}
              className="w-full bg-blue-700 text-white px-6 py-3 rounded-lg text-lg"
            >
              Admin Dashboard
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
