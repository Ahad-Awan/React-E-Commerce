import React, { useState, useEffect } from "react";

const ViewCart = () => {
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
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
      <div className="w-full bg-white p-6 rounded-lg shadow-lg">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded"
              />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-lg font-semibold">Price: {item.price}</p>

              <div className="flex items-center">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-gray-300 text-gray-800 px-3 py-1 rounded-l hover:bg-gray-400"
                >
                  -
                </button>
                <span className="px-4 py-1 text-lg">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="bg-gray-300 text-gray-800 px-3 py-1 rounded-r hover:bg-gray-400"
                >
                  +
                </button>
              </div>

              <p className="text-lg font-semibold">
                Sub Total: {item.price * item.quantity}
              </p>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-lg font-semibold">
            Your cart is empty.
          </p>
        )}

        {cartItems.length > 0 && (
          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-bold">Total: ${totalPrice}</p>
            <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewCart;
