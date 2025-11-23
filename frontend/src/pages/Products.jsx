import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products.json";

export default function ProductsPage() {
  return (
    <div>
      <Navbar />

      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Cinnamon Products
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-xl p-5 hover:shadow-2xl transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-xl"
              />
              <h3 className="text-xl font-bold mt-4">{item.name}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>

              <button className="mt-4 bg-amber-700 text-white py-2 px-4 rounded-lg hover:bg-amber-800 transition">
                View More
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
