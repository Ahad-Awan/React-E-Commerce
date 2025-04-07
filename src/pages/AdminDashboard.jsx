import React, { useState, useEffect } from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiViewList } from "react-icons/ci";
import { useNavigate } from "react-router";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    const token = localStorage.getItem("token");
    if (isAdmin !== "true" || !token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.setItem("isAdmin", "false");
    localStorage.setItem("token", "");
    navigate("/login");
  };

  return (
    <div className="flex relative">
      {/* Sidebar */}
      <aside
        className={`fixed sm:static top-0 left-0 z-50 w-64 h-full bg-gray-50 dark:bg-gray-900 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform sm:translate-x-0 sm:h-[77.3vh]`}
      >
        <div className="h-full px-4 py-6">
          {/* Close Button for Mobile */}
          <button
            className="sm:hidden text-gray-900 dark:text-white mb-4"
            onClick={toggleSidebar}
          >
            ✖ Close
          </button>

          <ul className="space-y-3 font-medium">
            <li>
              <a
                onClick={() => navigate("/adminDashboard")}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              >
                <MdDashboardCustomize className="size-6" />
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/addProduct")}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              >
                <HiOutlineShoppingBag className="size-6" />
                <span className="ml-3">Add Product</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/viewProduct")}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              >
                <CiViewList className="size-6" />
                <span className="ml-3">View Product</span>
              </a>
            </li>
            <li>
              <a
                onClick={handleLogout}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              >
                <RiLogoutBoxLine className="size-6" />
                <span className="ml-3">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Overlay for Small Screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 sm:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Sidebar Toggle */}
        <button
          className="sm:hidden p-4 text-gray-900 dark:text-black text-right text-2xl mr-0.5"
          onClick={toggleSidebar}
        >
          ☰
        </button>

        {/* Dashboard Cards */}
        <div className="flex justify-center items-center p-4 mt-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
            <div
              onClick={() => navigate("/viewProduct")}
              className="bg-white p-6 rounded-xl shadow-lg text-center cursor-pointer hover:shadow-xl transition"
            >
              <h2 className="text-lg font-semibold">Manage Product</h2>
              <p className="text-gray-600 mt-2">
                View, edit, and delete products in your inventory.
              </p>
            </div>

            <div
              onClick={() => navigate("/addProduct")}
              className="bg-white p-6 rounded-xl shadow-lg text-center cursor-pointer hover:shadow-xl transition"
            >
              <h2 className="text-lg font-semibold">Add New Product</h2>
              <p className="text-gray-600 mt-2">
                Add new products to your inventory with details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
