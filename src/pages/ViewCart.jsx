import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewCart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem("storeCart")) || [];
    return storedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
  });

  useEffect(() => {
    localStorage.setItem("storeCart", JSON.stringify(cartItems));
  }, [cartItems]);

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    toast.info("Item removed from cart!", { autoClose: 2000 });
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + Number(item.price || 0) * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate("/Checkout");
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center">
      <ToastContainer position="top-center" />
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

      <div className="w-full bg-white p-6 rounded-lg shadow-lg">
        {cartItems.length > 0 ? (
          <>
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-300">
                  <th className="border border-gray-200 px-4 py-3">Image</th>
                  <th className="border border-gray-200 px-4 py-3">Title</th>
                  <th className="border border-gray-200 px-4 py-3">Price</th>
                  <th className="border border-gray-200 px-4 py-3">Quantity</th>
                  <th className="border border-gray-200 px-4 py-3">
                    Sub Total
                  </th>
                  <th className="border border-gray-200 px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="border border-gray-200 px-4 py-2 text-center flex justify-center items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-center">
                      {item.title.slice(0, 20)}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-center">
                      ${item.price}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-center">
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="bg-gray-300 text-gray-800 px-3 py-1 rounded-l hover:bg-gray-400"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 text-lg">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="bg-gray-300 text-gray-800 px-3 py-1 rounded-r hover:bg-gray-400"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-center">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-center">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xl font-bold">
                Total: ${totalPrice.toFixed(2)}
              </p>
              <button
                className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 w-full md:w-auto"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="text-center max-w-xs mx-auto">
            <p className="text-lg font-semibold mb-4">Your cart is empty.</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full transition duration-300"
              onClick={() => navigate("/")}
            >
              Browse Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewCart;
