import React from "react";
import Button from "../components/Button";

const Home = () => {
  const products = JSON.parse(localStorage.getItem("storeProduct")) || [];
  // console.log(products, "Home");
  return (
    <>
      <section className="min-h-screen">
        <div className="flex flex-wrap justify-center gap-10 mt-10 mb-10">
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
              <h1 className="text-2xl font-bold text-center  text-gray-900">
                {product.title}
              </h1>
              <p className="text-xl text-blue-600 font-semibold text-center mt-2">
                {product.price}
              </p>
              <p className="text-gray-600 text-center mt-2">{product.desc}</p>
              <Button
                text="Add to Cart"
                className="bg-blue-500 hover:bg-blue-600"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
