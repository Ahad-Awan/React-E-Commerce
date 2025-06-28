import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import Loader from "../components/Loader";

const Home = () => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("storeProduct")) || []
  );
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setFetchedProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = [
    "All",
    "Electronics",
    "Clothing",
    "Home & Furniture",
    "Beauty & Personal Care",
    "Toys & Games",
    "Sports & Outdoors",
  ];

  const combinedProducts = [...products, ...fetchedProducts];

  const filteredProducts =
    selectedCategory === "All"
      ? combinedProducts
      : combinedProducts.filter(
          (product) => product.category === selectedCategory
        );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPagination = () => (
    <div className="flex justify-center mt-8 gap-2 flex-wrap">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          className={`px-4 py-2 rounded-lg ${
            currentPage === i + 1
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-blue-300"
          }`}
          onClick={() => handlePageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );

  return (
    <div className="mt-10 mb-10 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">Our Products</h1>

      <div className="flex flex-wrap justify-center space-x-4 mb-8 gap-2">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } px-10 py-2 rounded-lg transition duration-300 hover:bg-blue-300 w-full sm:w-auto`}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[500px]">
          <Loader />
        </div>
      ) : (
        <>
          <Cards products={currentProducts} setProducts={setProducts} />
          {renderPagination()}
        </>
      )}
    </div>
  );
};

export default Home;
