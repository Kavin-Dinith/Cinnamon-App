import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products.json";
import {
  Minus,
  Plus,
  ShoppingCart,
  User,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

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
    const msg = `New Order:
Product: ${product.name}
Qty: ${quantity}
Total: $${totalPrice}

Customer:
${customer.name}
${customer.email}
${customer.phone}
${customer.address}`;

    const whatsappUrl = `https://wa.me/94785369675?text=${encodeURIComponent(
      msg
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50/70 px-4 py-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Product Card */}
        <div className="bg-white/70 backdrop-blur-xl rounded-xl shadow-md border border-slate-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-60 object-cover"
          />

          <div className="p-5 space-y-3">
            <h2 className="font-stackSans text-xl font-bold text-slate-900">
              {product.name}
            </h2>

            <p className="font-googleSans text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>

            <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 text-transparent bg-clip-text">
              ${product.price.toFixed(2)}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => handleQuantity("dec")}
                className="p-2 rounded-lg bg-slate-200 hover:bg-slate-300 transition"
              >
                <Minus className="w-4 h-4 text-slate-700" />
              </button>

              <span className="text-base font-semibold">{quantity}</span>

              <button
                onClick={() => handleQuantity("inc")}
                className="p-2 rounded-lg bg-slate-200 hover:bg-slate-300 transition"
              >
                <Plus className="w-4 h-4 text-slate-700" />
              </button>
            </div>

            <p className="font-stackSans text-base font-semibold mt-1 text-slate-900">
              Total:{" "}
              <span className="text-green-600 font-bold">${totalPrice}</span>
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white/70 backdrop-blur-xl rounded-xl shadow-md border border-slate-100 p-6 flex flex-col gap-4">
          <h2 className="font-stackSans text-xl font-bold text-slate-900">
            Customer Information
          </h2>

          {/* Input + Icon */}
          <div className="flex items-center gap-2 bg-slate-100 p-2.5 rounded-lg">
            <User className="w-4 h-4 text-slate-500" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={customer.name}
              onChange={handleChange}
              className="font-googleSans bg-transparent w-full text-sm outline-none"
            />
          </div>

          <div className="flex items-center gap-2 bg-slate-100 p-2.5 rounded-lg">
            <Mail className="w-4 h-4 text-slate-500" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={customer.email}
              onChange={handleChange}
              className="font-googleSans bg-transparent w-full text-sm outline-none"
            />
          </div>

          <div className="flex items-center gap-2 bg-slate-100 p-2.5 rounded-lg">
            <Phone className="w-4 h-4 text-slate-500" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={customer.phone}
              onChange={handleChange}
              className="font-googleSans bg-transparent w-full text-sm outline-none"
            />
          </div>

          <div className="flex items-center gap-2 bg-slate-100 p-2.5 rounded-lg">
            <MapPin className="w-4 h-4 text-slate-500 mt-1" />
            <textarea
              name="address"
              placeholder="Address"
              value={customer.address}
              onChange={handleChange}
              className="font-googleSans bg-transparent w-full text-sm outline-none h-20 resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            onClick={placeOrder}
            className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-sm font-semibold py-3 rounded-lg shadow-md transition-all"
          >
            <ShoppingCart className="w-4 h-4" />
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
