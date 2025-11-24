import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products.json";

export default function Checkout() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleQuantity = (type) => {
    setQuantity((q) => Math.max(1, type === "inc" ? q + 1 : q - 1));
  };

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  const placeOrder = () => {
    const msg = `Order Summary:
Product: ${product.name}
Price (1): $${product.price.toFixed(2)}
Quantity: ${quantity}
Total: $${totalPrice}
Customer:
Name: ${customer.name}
Email: ${customer.email}
Phone: ${customer.phone}
Address: ${customer.address}`;

    const whatsappUrl = `https://wa.me/94785369675?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-20 py-16">
      <div className="bg-white rounded-2xl shadow-md p-6 max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* Left - Image */}
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-2xl object-cover"
          />
        </div>

        {/* Right - Info */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <h2 className="font-stackSans text-2xl font-bold">{product.name}</h2>
          <p className="text-gray-700">{product.description}</p>
          <p className="font-stackSans text-2xl font-semibold text-amber-700">
            ${product.price.toFixed(2)}
          </p>

          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={() => handleQuantity("dec")}
              className="bg-gray-300 px-3 py-1 rounded"
            >
              -
            </button>
            <span className="font-medium">{quantity}</span>
            <button
              onClick={() => handleQuantity("inc")}
              className="bg-gray-300 px-3 py-1 rounded"
            >
              +
            </button>
          </div>

          <p className="font-semibold mt-2">Total: ${totalPrice}</p>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={customer.name}
            onChange={handleChange}
            className="mt-2 p-2 border rounded w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={customer.email}
            onChange={handleChange}
            className="mt-2 p-2 border rounded w-full"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={customer.phone}
            onChange={handleChange}
            className="mt-2 p-2 border rounded w-full"
          />
          <textarea
            name="address"
            placeholder="Address"
            value={customer.address}
            onChange={handleChange}
            className="mt-2 p-2 border rounded w-full"
          ></textarea>

          <button
            onClick={placeOrder}
            className="mt-4 bg-amber-700 hover:bg-amber-800 text-white py-3 px-6 rounded-xl shadow-md font-medium"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
