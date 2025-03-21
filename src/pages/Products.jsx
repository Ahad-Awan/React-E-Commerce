import React, { useState } from "react";
import Modal from "../components/Modal";
import Cards from "../components/Cards";

const Products = () => {
  const [products, setProducts] = useState([]);
  console.log(products, "product component");

  return (
    <div>
      <Modal products={products} setProducts={setProducts} />
      <Cards products={products} />
    </div>
  );
};

export default Products;
