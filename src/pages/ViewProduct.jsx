import { MdDashboardCustomize } from "react-icons/md";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { CiViewList } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiLogoutBoxLine } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewProduct = () => {
  const navigate = useNavigate();

  const showDashboard = () => {
    navigate("/adminDashboard");
  };

  const showProduct = () => {
    navigate("/addProduct");
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
              <a
                onClick={handleLogout}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"
              >
                <RiLogoutBoxLine className="size-6" />
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="flex-1">
        <ViewProducts />
      </div>
    </div>
  );
};

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    const storedProducts =
      JSON.parse(localStorage.getItem("storeProduct")) || [];
    setProducts(storedProducts);
  }, []);

  const removeProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("storeProduct", JSON.stringify(updatedProducts));
    toast.info("Product removed successfully!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const handleEdit = (product) => {
    setEditProduct(product);
  };

  const handleSaveEdit = () => {
    const updatedProducts = products.map((product) =>
      product.id === editProduct.id ? editProduct : product
    );
    setProducts(updatedProducts);
    localStorage.setItem("storeProduct", JSON.stringify(updatedProducts));

    toast.success("Product updated successfully!", {
      position: "top-center",
      autoClose: 2000,
    });

    setEditProduct(null);
  };

  return (
    <div className="flex justify-center items-center ">
      <ToastContainer />
      <div className="w-full bg-white p-6 rounded-lg shadow-lg mx-10 my-4">
        <h1 className="text-3xl font-bold text-center mb-6">View Products</h1>
        {products.length > 0 ? (
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
              {products.map((product) => (
                <tr key={product.id} className="text-center">
                  <td className="border border-gray-300 p-2">{product.id}</td>
                  <td className="border border-gray-300 p-2">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-16 h-16 object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    {product.title}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {product.desc.slice(0, 100)}
                  </td>
                  <td className="border border-gray-300 p-2 font-semibold">
                    {product.price}
                  </td>
                  <td className="border border-gray-300 p-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 mb-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-2"
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
            No products available.
          </p>
        )}

        {editProduct && (
          <div className="mt-5 p-5 border border-gray-300 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
            <div>
              <label className="block mb-2">Title</label>
              <input
                type="text"
                value={editProduct.title}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, title: e.target.value })
                }
                className="border p-2 w-full mb-4"
              />
            </div>
            <div>
              <label className="block mb-2">Description</label>
              <input
                type="text"
                value={editProduct.desc}
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    desc: e.target.value,
                  })
                }
                className="border p-2 w-full mb-4"
              />
            </div>
            <div>
              <label className="block mb-2">Price</label>
              <input
                type="number"
                value={editProduct.price}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, price: e.target.value })
                }
                className="border p-2 w-full mb-4"
              />
            </div>
            <button
              onClick={handleSaveEdit}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewProduct;
