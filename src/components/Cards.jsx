import React, { useEffect, useState } from "react";
import Button from "./Button";

const Cards = ({ products, setProducts }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("storeCart")) || []
  );

  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("storeWishlist")) || []
  );

  useEffect(() => {
    localStorage.setItem("storeCart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("storeWishlist", JSON.stringify(wishlist));
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
  };

  const addToWishlist = (product) => {
    const isAlreadyInWishlist = wishlist.some((item) => item.id === product.id);

    if (isAlreadyInWishlist) {
      alert("This item is already in your wishlist!");
    } else {
      setWishlist([...wishlist, product]);
      alert("Item added to your wishlist!");
    }
  };

  const removeProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
    localStorage.setItem("storeProduct", JSON.stringify(updatedProducts));
  };

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {products.map((product, index) => (
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
            text="Add to Cart"
            className="bg-green-500 hover:bg-green-600 font-medium py-2 px-4 w-full rounded-lg transition duration-300 mt-3"
            onClick={() => addProduct(product)}
          />

          <div className="flex justify-between mt-2">
            <Button
              text="Add to Wishlist"
              className="bg-red-500 hover:bg-red-600 font-medium py-2 px-4 w-1/2 rounded-lg transition duration-300"
              onClick={() => addToWishlist(product)}
            />
            <Button
              onClick={() => removeProduct(index)}
              text="Remove"
              className="bg-gray-500 hover:bg-gray-600 font-medium py-2 px-4 rounded-lg transition duration-300"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
