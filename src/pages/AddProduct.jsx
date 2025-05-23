import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDashboardCustomize } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiLogoutBoxLine } from "react-icons/ri";

const Modal = ({ products, setProducts }) => {
  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  useEffect(() => {
    localStorage.setItem("storeProduct", JSON.stringify(products));
  }, [products]);

  const handleOutput = () => {
    if (
      !data.title ||
      !data.price ||
      !data.description ||
      !data.image ||
      !data.category
    ) {
      toast.error("Please fill all the fields including the category!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    const newProduct = {
      id: Date.now(),
      title: data.title.slice(0, 30),
      price: data.price,
      description: data.description.slice(0, 100),
      image: data.image,
      category: data.category,
    };

    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem("storeProduct", JSON.stringify(updatedProducts));

    toast.success("Product added successfully!", {
      position: "top-center",
      autoClose: 2000,
    });

    setData({
      title: "",
      price: "",
      description: "",
      image: "",
      category: "",
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-start justify-center">
      <ToastContainer />
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl text-center font-bold mb-5">
          Add Product Data
        </h2>
        <div className="flex gap-4">
          <div className="w-1/3 flex items-center justify-center">
            {data.image ? (
              <img
                src={data.image}
                alt="Preview"
                className="w-full h-full object-cover rounded"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center border rounded text-gray-500">
                No Image
              </div>
            )}
          </div>
          <div className="w-2/3">
            <input
              type="text"
              name="title"
              placeholder="Product Title"
              value={data.title}
              onChange={(e) =>
                setData((prev) => ({ ...prev, title: e.target.value }))
              }
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              name="price"
              placeholder="Product Price"
              value={data.price}
              onChange={(e) =>
                setData((prev) => ({ ...prev, price: e.target.value }))
              }
              className="w-full p-2 border rounded mb-2"
            />
            <textarea
              name="description"
              placeholder="Product Description"
              value={data.description}
              onChange={(e) =>
                setData((prev) => ({ ...prev, description: e.target.value }))
              }
              className="w-full p-2 border rounded mb-2 h-20 resize-none"
            ></textarea>
            <select
              name="category"
              value={data.category}
              onChange={(e) =>
                setData((prev) => ({ ...prev, category: e.target.value }))
              }
              className="w-full p-2 border rounded mb-2"
            >
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Home & Furniture">Home & Furniture</option>
              <option value="Beauty & Personal Care">
                Beauty & Personal Care
              </option>
              <option value="Toys & Games">Toys & Games</option>
              <option value="Sports & Outdoors">Sports & Outdoors</option>
            </select>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border rounded mb-2"
            />
            <Button
              text="Add Product"
              className="hover:bg-blue-600 w-full"
              onClick={handleOutput}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const AddProduct = () => {
  const navigate = useNavigate();

  const showDashboard = () => {
    navigate("/adminDashboard");
  };

  const showProduct = () => {
    navigate("/addProduct");
  };

  const showViewProduct = () => {
    navigate("/viewProduct");
  };

  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("storeProduct")) || []
  );

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
    <div className="flex h-[77.3vh]">
      <aside
        id="default-sidebar"
        className="top-0 left-0 z-40 w-64 h-full bg-gray-50 dark:bg-gray-900"
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
      <div className="p-4 w-full flex items-center justify-center">
        <Modal products={products} setProducts={setProducts} />
      </div>
    </div>
  );
};

export default AddProduct;
