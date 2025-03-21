import React from "react";

const Button = ({ onClick, className, text }) => {
  return (
    <div>
      <button
        className={`mt-5 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-70 ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
