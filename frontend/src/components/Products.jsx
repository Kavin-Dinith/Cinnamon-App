import products from "../data/products.json";

export default function Products() {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>

      <div className="grid md:grid-cols-3 gap-10">
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
          </div>
        ))}
      </div>
    </section>
  );
}
