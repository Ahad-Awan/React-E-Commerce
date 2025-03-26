import React, { useState } from "react";
import Cards from "../components/Cards";

const Home = () => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("storeProduct")) || []
  );
  return (
    <>
      <div className="mt-10 mb-10 min-h-screen">
        <Cards products={products} setProducts={setProducts} />
      </div>
    </>
  );
};

export default Home;
