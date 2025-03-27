import React from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useNavigate } from "react-router";
import { CiViewList } from "react-icons/ci";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const showProduct = () => {
    navigate("/addProduct");
  };

  const showViewProduct = () => {
    navigate("/viewProduct");
  };

  const showDashboard = () => {
    navigate("/adminDashboard");
  };

  const showHome = () => {
    navigate("/");
  };

  return (
    <div className="flex">
      {/* Sidebar */}

      <aside
        id="default-sidebar"
        className="top-0 left-0 z-40 w-64 h-[77.3vh] transition-transform -translate-x-full sm:translate-x-0 bg-gray-50 dark:bg-gray-900"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                onClick={showDashboard}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"
              >
                <MdDashboardCustomize className="size-6" />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>

            <li>
              <a
                onClick={showProduct}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"
              >
                <HiOutlineShoppingBag className="size-6" />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Add Product
                </span>
              </a>
            </li>

            <li>
              <a
                onClick={showViewProduct}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"
              >
                <CiViewList className="size-6" />
                <span className="flex-1 ms-3 whitespace-nowrap cursor-pointer">
                  View Product
                </span>
              </a>
            </li>

            <li>
              <a
                onClick={showHome}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"
              >
                <RiLogoutBoxLine className="size-6" />
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="flex-1 flex justify-center items-center h-[77.3vh]">
        <div className="grid grid-cols-2 gap-6">
          <div
            onClick={showViewProduct}
            className="bg-white p-6 rounded-xl shadow-lg w-100 text-center cursor-pointer hover:shadow-xl transition"
          >
            <h2 className="text-lg font-semibold">Manage Product</h2>
            <p className="text-gray-600 mt-6">
              View, edit, and delete products in your inventory
            </p>
          </div>
          <div
            onClick={showProduct}
            className="bg-white p-6 rounded-xl shadow-lg w-100 text-center cursor-pointer hover:shadow-xl transition"
          >
            <h2 className="text-lg font-semibold">Add New Product</h2>
            <p className="text-gray-600 mt-6">
              Add new products to your inventory with details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
