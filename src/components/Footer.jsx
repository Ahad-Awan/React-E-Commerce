import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white mt-6 py-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <h1 className="text-2xl font-bold">Your Logo</h1>
        <p className="text-white text-sm mt-2 md:mt-0">
          © 2025 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
