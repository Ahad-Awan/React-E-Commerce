import React from "react";
import Cards from "./Cards";

const Herosection = () => {
  return (
    <div className="flex justify-center items-center gap-10 mt-6 min-h-screen">
      <Cards products={products} />
    </div>
  );
};

export default Herosection;
