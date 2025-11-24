import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products.json";
import { Minus, Plus, ShoppingCart, User, Mail, Phone, MapPin } from "lucide-react";

export default function Checkout() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  const [quantity, setQuantity] = useState(1);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Handle quantity increment/decrement
  const handleQuantity = (type) =>
    setQuantity((q) => Math.max(1, type === "inc" ? q + 1 : q - 1));

  // Validation function for individual fields
  const validateField = (name, value) => {
    let error = "";

    // Name
    if (name === "name" && !value.trim()) error = "Name is required";

    // Email
    if (name === "email") {
      const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!value.trim()) error = "Email is required";
      else if (!emailRegex.test(value)) error = "Enter a valid email address";
    }

    // Phone
    if (name === "phone") {
      if (!value.trim()) error = "Phone number is required";
      else {
        const phoneRegex = /^\+?\d+$/; // digits only, optional + at start
        if (!phoneRegex.test(value))
          error = "Phone can only contain digits (and + at start)";
        else if (value.startsWith("+94") && value.length !== 12)
          error = "Enter 9 digits after +94";
        else if (value.startsWith("0") && value.length !== 10)
          error = "Enter 10 digits starting with 0";
        else if (!value.startsWith("+94") && !value.startsWith("0"))
          error = "Phone must start with +94 or 0";
      }
    }

    // Address
    if (name === "address" && !value.trim()) error = "Address is required";

    setErrors((prev) => ({ ...prev, [name]: error }));
    return error === "";
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // Limit phone input
    if (name === "phone") {
      if (value.startsWith("+94")) newValue = value.slice(0, 12);
      else if (value.startsWith("0")) newValue = value.slice(0, 10);
      else newValue = value.replace(/[^+\d]/g, ""); // remove invalid chars
    }

    setCustomer((prev) => ({ ...prev, [name]: newValue }));
    validateField(name, newValue);
  };

  // Check if form is valid
  const isFormValid = () => {
    return (
      customer.name.trim() &&
      customer.email.trim() &&
      customer.phone.trim() &&
      customer.address.trim() &&
      Object.values(errors).every((err) => !err)
    );
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  // Place order via WhatsApp
  const placeOrder = () => {
    const isValid = Object.keys(customer).every((key) =>
      validateField(key, customer[key])
    );
    if (!isValid) return;

    const msg = `*Order Summary*
----------------------------
Product: *${product.name}*
Price (1): $${product.price.toFixed(2)}
Quantity: *${quantity}*
Total: *$${totalPrice}*
----------------------------
Customer
Name: *${customer.name}*
Email: *${customer.email}*
Phone: *${customer.phone}*
Address: *${customer.address}*`;

    window.open(
      `https://wa.me/94785369675?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-slate-50/70 py-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Product Card */}
        <div className="bg-white/70 backdrop-blur-xl rounded-xl shadow-md border border-slate-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-60 object-cover"
          />
          <div className="p-5 space-y-3">
            <h2 className="font-stackSans text-xl font-bold text-slate-900">{product.name}</h2>
            <p className="font-googleSans text-sm text-slate-600 leading-relaxed">{product.description}</p>
            <div className="font-stackSans text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 text-transparent bg-clip-text">
              ${product.price.toFixed(2)}
            </div>

            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => handleQuantity("dec")}
                className="p-2 rounded-lg bg-slate-200 hover:bg-slate-300 transition"
              >
                <Minus className="w-4 h-4 text-slate-700" />
              </button>
              <span className="font-stackSans text-base font-semibold">{quantity}</span>
              <button
                onClick={() => handleQuantity("inc")}
                className="p-2 rounded-lg bg-slate-200 hover:bg-slate-300 transition"
              >
                <Plus className="w-4 h-4 text-slate-700" />
              </button>
            </div>

            <p className="font-stackSans text-base font-semibold mt-1 text-slate-900">
              Total: <span className="text-green-600 font-bold">${totalPrice}</span>
            </p>
          </div>
        </div>

        {/* Customer Form */}
        <div className="bg-white/70 backdrop-blur-xl rounded-xl shadow-md border border-slate-100 p-6 flex flex-col gap-4">
          <h2 className="font-stackSans text-xl font-bold text-slate-900">Customer Information</h2>

          {/* Name */}
          <div className="flex flex-col">
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
            {errors.name && <span className="text-red-500 text-xs ml-1">{errors.name}</span>}
          </div>

          {/* Email */}
          <div className="flex flex-col">
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
            {errors.email && <span className="text-red-500 text-xs ml-1">{errors.email}</span>}
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 bg-slate-100 p-2.5 rounded-lg">
              <Phone className="w-4 h-4 text-slate-500" />
              <input
                type="tel"
                name="phone"
                placeholder="+94xxxxxxxxx or 0xxxxxxxxx"
                value={customer.phone}
                onChange={handleChange}
                className="font-googleSans bg-transparent w-full text-sm outline-none"
              />
            </div>
            {errors.phone && <span className="text-red-500 text-xs ml-1">{errors.phone}</span>}
          </div>

          {/* Address */}
          <div className="flex flex-col">
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
            {errors.address && <span className="text-red-500 text-xs ml-1">{errors.address}</span>}
          </div>

          <button
            onClick={placeOrder}
            disabled={!isFormValid()}
            className={`mt-2 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-sm font-semibold py-3 rounded-lg shadow-md transition-all ${
              !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ShoppingCart className="w-4 h-4" /> Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
