import React, { useState, useEffect } from "react";
import Button from "./Button";

const Modal = ({ products, setProducts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    title: "",
    price: "",
    desc: "",
    image: "",
  });

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleOutput = () => {
    if (!data.title || !data.price || !data.desc || !data.image) {
      alert("Please fill all the fields including the image!");
      return;
    }

    const newProduct = {
      id: Date.now(),
      title: data.title,
      price: data.price,
      desc: data.desc,
      image: data.image,
    };

    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    setData({
      title: "",
      price: "",
      desc: "",
      image: null,
    });

    setIsOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center flex-wrap justify-start">
      <Button
        text="Add Product"
        className="px-20 mb-6 hover:bg-blue-600"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-3xl text-center font-bold mb-6">
              Add Product Data
            </h2>
            <input
              type="text"
              name="title"
              placeholder="Product Title"
              value={data.title}
              onChange={(e) =>
                setData((prev) => ({ ...prev, title: e.target.value }))
              }
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={data.price}
              onChange={(e) =>
                setData((prev) => ({ ...prev, price: e.target.value }))
              }
              className="w-full p-2 border rounded mb-2"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={data.desc}
              onChange={(e) =>
                setData((prev) => ({ ...prev, desc: e.target.value }))
              }
              className="w-full p-2 border rounded mb-2"
            ></textarea>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border rounded mb-2"
            />
            {data.image && (
              <img
                src={data.image}
                alt="Preview"
                className="w-full h-40 object-cover rounded mb-2"
              />
            )}
            <Button
              text="Add to Cart"
              className="hover:bg-blue-600"
              onClick={handleOutput}
            />

            <Button
              text="Close"
              className="bg-red-500 hover:bg-red-600"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
