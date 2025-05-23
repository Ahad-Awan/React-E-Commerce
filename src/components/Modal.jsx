import React, { useState, useEffect } from "react";
import Button from "./Button";

const Modal = ({ products, setProducts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    localStorage.setItem("storeProduct", JSON.stringify(products));
  }, [products]);

  const handleOutput = () => {
    if (!data.title || !data.price || !data.description || !data.image) {
      alert("Please fill all the fields including the image!");
      return;
    }

    const newProduct = {
      id: Date.now(),
      title: data.title.slice(0, 25),
      price: data.price,
      description: data.description.slice(0, 100),
      image: data.image,
    };

    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);

    setData({
      title: "",
      price: "",
      description: "",
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
            <h2 className="text-3xl text-center font-bold mb-4">
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
              value={data.description}
              onChange={(e) =>
                setData((prev) => ({ ...prev, description: e.target.value }))
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
              text="Add Product"
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
