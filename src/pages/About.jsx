import React from "react";
import { useNavigate } from "react-router";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleAbout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen  py-10 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          About <span className="text-blue-600">E-Commerce</span>
        </h2>
        <p className="text-lg text-center mb-10">
          Welcome to E-Commerce, your number one destination for high-quality
          products. We’re dedicated to giving you the best shopping experience,
          focusing on reliability, customer service, and uniqueness.
        </p>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">
              Our Mission
            </h3>
            <p className="text-white ">
              Our mission is to provide top-quality products at competitive
              prices while ensuring the best customer experience. We strive to
              be your most trusted online shopping destination.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">
              Our Vision
            </h3>
            <p className="text-white">
              We aim to revolutionize online shopping by making it effortless,
              affordable, and enjoyable. Our goal is to bring the best products
              from around the world right to your doorstep.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-10">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Why <span className="text-blue-600">Choose us?</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-semibold text-blue-600">
                High-Quality Products
              </h4>
              <p className="text-white mt-2">
                We offer a carefully curated selection of premium products.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-semibold text-blue-600">
                Fast & Secure Shipping
              </h4>
              <p className="text-white mt-2">
                Get your orders delivered quickly and securely.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-semibold text-blue-600">
                Excellent Customer Support
              </h4>
              <p className="text-white mt-2">
                Our support team is available 24/7 to assist you.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-6">Start Shopping Now!</h3>
          <p className="text-black mb-10">
            Explore our wide range of products and enjoy an amazing shopping
            experience.
          </p>
          <a
            // href="/products"
            onClick={handleAbout}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Browse Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
