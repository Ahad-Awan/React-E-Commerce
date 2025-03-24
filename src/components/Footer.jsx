import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 w-full border-t border-gray-200 dark:border-gray-600">
      <div className="p-6 mx-4 lg:mx-10 flex flex-col md:flex-row justify-center">
        <p className="text-white text-base mt-4 md:mt-0">
          © {new Date().getFullYear()} E-Commerce. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
