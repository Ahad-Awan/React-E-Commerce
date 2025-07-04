import React, { useState, useEffect } from "react";
import Button from "./Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cards = ({ products }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("storeCart")) || []
  );

  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("storeWishlist")) || []
  );

  useEffect(() => {
    localStorage.setItem("storeCart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("storeWishlist", JSON.stringify(wishlist));
    window.dispatchEvent(new Event("wishlistUpdated"));
  }, [wishlist]);

  const addProduct = (product) => {
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

  const addToWishlist = (product) => {
    const isAlreadyInWishlist = wishlist.some((item) => item.id === product.id);

    if (isAlreadyInWishlist) {
      toast.error("This item is already in your wishlist!", {
        autoClose: 2000,
      });
    } else {
      setWishlist([...wishlist, product]);
      toast.success("Item added to your wishlist!", { autoClose: 2000 });
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-6">
      <ToastContainer position="top-center" />
      {products.map((product) => (
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
            {product.description
              ? product.description.slice(0, 100)
              : product.desc.slice(0, 100)}
          </p>

          <div className="flex flex-col">
            <Button
              text="Add to Cart"
              className="bg-green-500 hover:bg-green-600 font-medium py-2 px-4 w-full rounded-lg transition duration-300"
              onClick={() => addProduct(product)}
            />
            <Button
              text="Add to Wishlist"
              className="bg-red-500 hover:bg-red-600 font-medium py-2 px-4 w-full rounded-lg transition duration-300"
              onClick={() => addToWishlist(product)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
