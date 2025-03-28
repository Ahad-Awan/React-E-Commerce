import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("storeWishlist")) || []
  );

  useEffect(() => {
    localStorage.setItem("storeWishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    toast.info("Removed from wishlist!", { autoClose: 2000 });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Toast notification positioned at center */}
      <ToastContainer position="top-center" />

      <h1 className="text-3xl font-bold text-center mb-6">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-2xl text-gray-600">
          Your wishlist is empty
        </p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-xl shadow-lg w-80 border border-gray-200"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-60 object-contain rounded-lg"
              />
              <h1 className="text-2xl font-bold text-center text-gray-900">
                {product.title}
              </h1>
              <p className="text-xl text-blue-600 font-semibold text-center mt-2">
                {product.price}
              </p>
              <p className="text-gray-600 text-center mt-2">{product.desc}</p>

              <Button
                text="Remove from Wishlist"
                className="bg-red-500 hover:bg-red-600 font-medium py-2 px-4 w-full rounded-lg transition duration-300 mt-3"
                onClick={() => removeFromWishlist(product.id)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
