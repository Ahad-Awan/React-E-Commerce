import React from "react";
import Button from "./Button";

const Cards = ({ products }) => {
  return (
    <div className="flex gap-10">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white p-4 rounded-xl shadow-lg max-w-sm border border-gray-200"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-60 object-contain rounded-lg"
          />
          <h1 className="text-2xl font-bold text-center mt-4 text-gray-900">
            {product.name}
          </h1>
          <p className="text-xl text-blue-600 font-semibold text-center mt-2">
            {product.price}
          </p>
          <p className="text-gray-600 text-center mt-3">{product.desc}</p>
          <Button text="Add to cart" className="hover:bg-blue-600" />
        </div>
      ))}
    </div>
  );
};

export default Cards;
