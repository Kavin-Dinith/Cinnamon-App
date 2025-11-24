import { useState } from "react";
import productsData from "../data/products.json";
import { useNavigate } from "react-router-dom";

export default function ProductsPage() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  // Filter and sort products
  const filteredProducts = productsData
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "name-asc") return a.name.localeCompare(b.name);
      if (sortOption === "name-desc") return b.name.localeCompare(a.name);
      if (sortOption === "price-low") return a.price - b.price;
      if (sortOption === "price-high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="py-12 px-4 md:px-16">
        <h2 className="font-stackSans text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
          Our Cinnamon Products
        </h2>

        {/* Search & Filter */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mb-6 gap-3">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="font-googleSans w-full md:w-1/3 px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-400 focus:outline-none transition"
          />

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="font-googleSans w-full md:w-1/4 px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-400 focus:outline-none transition"
          >
            <option value="">Sort By</option>
            <option value="name-asc">Name: A → Z</option>
            <option value="name-desc">Name: Z → A</option>
            <option value="price-low">Price: Low → High</option>
            <option value="price-high">Price: High → Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden"
            >
              <div className="relative w-full h-40 md:h-36 lg:h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-3 flex flex-col flex-grow">
                <h3 className="font-stackSans text-sm md:text-base font-semibold text-gray-900 mb-1">
                  {item.name}
                </h3>
                <p className="font-googleSans text-gray-600 text-xs md:text-sm flex-grow mb-1">
                  {item.description}
                </p>
                <p className="font-stackSans text-green-600 font-semibold text-sm md:text-base mb-2">
                  ${item.price.toFixed(2)}
                </p>

                <button
                  onClick={() => navigate(`/products/${item.slug}`)}
                  className="font-googleSans mt-auto bg-amber-700 text-white py-1.5 px-3 rounded-lg hover:bg-amber-800 transition-colors duration-300 text-xs md:text-sm font-medium shadow-sm hover:shadow-md"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="font-googleSans text-center text-gray-500 mt-8 text-lg">
            No products found.
          </p>
        )}
      </section>
    </div>
  );
}
