import { MdDashboardCustomize } from "react-icons/md";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { CiViewList } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiLogoutBoxLine } from "react-icons/ri";

const ViewProduct = () => {
  const navigate = useNavigate();

  const showDashboard = () => {
    navigate("/adminDashboard");
  };

  const showProduct = () => {
    navigate("/addProduct");
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="top-0 left-0 z-40 w-64 h-screen bg-gray-50 dark:bg-gray-900 transition-transform -translate-x-full sm:translate-x-0">
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
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                <CiViewList className="size-6" />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  View Product
                </span>
              </a>
            </li>
            <li>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                <RiLogoutBoxLine className="size-6" />
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="flex-1">
        <ViewCart />
      </div>
    </div>
  );
};

const ViewCart = () => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem("storeCart")) || [];
    return storedCart.map((item, index) => ({
      ...item,
      id: index + 1,
      quantity: item.quantity || 1,
    }));
  });

  useEffect(() => {
    localStorage.setItem("storeCart", JSON.stringify(cartItems));
  }, [cartItems]);

  const removeItem = (id) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter((item) => item.id !== id);
      localStorage.setItem("storeCart", JSON.stringify(updatedCart));
      localStorage.setItem("storeProduct", JSON.stringify(updatedCart)); // Update Home page
      return updatedCart.map((item, index) => ({ ...item, id: index + 1 }));
    });
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="w-full bg-white p-6 rounded-lg shadow-lg mx-10 my-4">
        <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
        {cartItems.length > 0 ? (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">Image</th>
                <th className="border border-gray-300 p-2">Title</th>
                <th className="border border-gray-300 p-2">Description</th>
                <th className="border border-gray-300 p-2">Price</th>
                <th className="border border-gray-300 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="border border-gray-300 p-2">{item.id}</td>
                  <td className="border border-gray-300 p-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="border border-gray-300 p-2">{item.title}</td>
                  <td className="border border-gray-300 p-2">{item.desc}</td>
                  <td className="border border-gray-300 p-2 font-semibold">
                    {item.price}
                  </td>
                  <td className="border border-gray-300 p-2">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-lg font-semibold">
            Your cart is empty.
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewProduct;
