import React from "react";

import pentImg from "../assets/pent.jpg";
import shirtImg from "../assets/mens-shirt.jpg";
import shoeImg from "../assets/shoe.jpg";
import Cards from "./Cards";

const products = [
  {
    image: pentImg,
    name: "Jeans Pent",
    price: "$9.99",
    desc: "Jeans are a type of pants, often made from denim fabric, known for their durability and casual style.",
  },
  {
    image: shirtImg,
    name: "Blue Shirt",
    price: "$19.99",
    desc: "A shirt is a garment worn on the upper body, typically having sleeves and a front opening.",
  },
  {
    image: shoeImg,
    name: "Black Shoe",
    price: "$29.99",
    desc: "A shoe is a piece of footwear, typically made of leather or other materials, designed to cover and protect the foot.",
  },
];

const Herosection = () => {
  return (
    <div className="flex justify-center items-center gap-10 mt-6 min-h-screen">
      <Cards products={products} />
    </div>
  );
};

export default Herosection;
