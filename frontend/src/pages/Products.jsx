import products from "../data/products.json";
// At the top of Products.jsx
import { useNavigate } from "react-router-dom";


export default function ProductsPage() {
  const navigate = useNavigate()
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="py-16 px-4 md:px-20">
        <h2 className="font-stackSans text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight text-gray-800">
          Our Cinnamon Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden"
            >
              <div className="relative w-full h-60 md:h-52 lg:h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-stackSans text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="font-googleSans text-gray-600 text-sm md:text-base flex-grow">
                  {item.description}
                </p>

                <button
                  onClick={() => navigate(`/product/${item.id}`)}
                  className="font-googleSans mt-4 bg-amber-700 text-white py-2 px-4 rounded-xl hover:bg-amber-800 transition-colors duration-300 font-medium shadow-sm hover:shadow-md"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
