import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";

const Home = () => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("storeProduct")) || []
  );

  useEffect(() => {
    const storedProducts =
      JSON.parse(localStorage.getItem("storeProduct")) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <>
      <div className="mt-10 mb-10 min-h-screen">
        <Cards products={products} setProducts={setProducts} />
      </div>
    </>
  );
};

export default Home;
