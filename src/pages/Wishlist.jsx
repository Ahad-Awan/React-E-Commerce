import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wishlist = () => {
  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("storeWishlist")) || []
  );
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("storeCart")) || []
  );

  useEffect(() => {
    localStorage.setItem("storeWishlist", JSON.stringify(wishlist));
    window.dispatchEvent(new Event("wishlistUpdated"));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("storeCart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cart]);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    toast.info("Removed from wishlist!", { autoClose: 2000 });
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    toast.success("Product added to cart!", { autoClose: 2000 });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <ToastContainer position="top-center" />

      <h1 className="text-3xl font-bold text-center mb-6">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="text-center">
          <p className="text-2xl text-gray-600 mb-4">Your wishlist is empty</p>
          <Button
            text="Browse Products"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 w-full max-w-xs mx-auto"
            onClick={() => navigate("/")}
          />
        </div>
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
                {product.title.slice(0, 20)}
              </h1>
              <p className="text-xl text-blue-600 font-semibold text-center mt-2">
                ${product.price}
              </p>
              <p className="text-gray-600 text-center mt-2">
                {product.description.slice(0, 100)}
              </p>

              <div className="flex flex-col gap-2 mt-3">
                <Button
                  text="Add to Cart"
                  className="bg-green-500 hover:bg-green-600 font-medium py-2 px-4 w-full rounded-lg transition duration-300"
                  onClick={() => addToCart(product)}
                />
                <Button
                  text="Remove from Wishlist"
                  className="bg-red-500 hover:bg-red-600 font-medium py-2 px-4 w-full rounded-lg transition duration-300"
                  onClick={() => removeFromWishlist(product.id)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
