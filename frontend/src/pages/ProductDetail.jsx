import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products.json";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();

  if (!product) return <p>Product not found</p>;

  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-20 py-16">
      {/* Left + Right section */}
      <div className="flex flex-col md:flex-row gap-10 mb-12 items-start">
        {/* Left - Image */}
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Right - Info */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <h2 className="font-stackSans text-3xl md:text-4xl font-bold text-gray-900">
            {product.name}
          </h2>
          <p className="text-gray-700 text-lg">{product.description}</p>
          <p className="font-stackSans text-2xl font-semibold text-amber-700">
            ${product.price.toFixed(2)}
          </p>
          <button
            onClick={() => navigate(`/checkout/${product.id}`)}
            className="bg-amber-700 hover:bg-amber-800 text-white py-3 px-6 rounded-xl shadow-md font-medium mt-4"
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Below - Long description & benefits */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="font-stackSans text-2xl font-bold mb-4">Description</h3>
        <p className="text-gray-700 mb-6">{product.longDescription}</p>

        <h3 className="font-stackSans text-2xl font-bold mb-4">Benefits</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {product.benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
