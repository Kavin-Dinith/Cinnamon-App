import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "+94",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    // Name
    if (name === "name" && !value.trim()) error = "Name is required";

    // Email
    if (name === "email") {
      const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!value.trim()) error = "Email is required";
      else if (!emailRegex.test(value))
        error = "Enter a valid email address";
    }

    // Phone
    if (name === "phone") {
      if (!value.trim()) error = "Phone number is required";
      else {
        const phoneRegex = /^\+?\d+$/; // only digits and optional + at start
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

    // Message
    if (name === "message" && !value.trim())
      error = "Message cannot be empty";

    setErrors((prev) => ({ ...prev, [name]: error }));
    return error === "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Limit phone input length
    let newValue = value;
    if (name === "phone") {
      if (value.startsWith("+94")) newValue = value.slice(0, 12);
      else if (value.startsWith("0")) newValue = value.slice(0, 10);
      else newValue = value.replace(/[^+\d]/g, ""); // remove invalid chars
    }

    setForm((prev) => ({ ...prev, [name]: newValue }));
    validateField(name, newValue);
  };

  // Check if there are any errors or empty required fields
  const isFormValid = () => {
    return (
      form.name.trim() &&
      form.email.trim() &&
      form.phone.trim() &&
      form.message.trim() &&
      Object.values(errors).every((err) => !err)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = Object.keys(form).every((key) =>
      validateField(key, form[key])
    );
    if (!isValid) return;

    const msg = `*Contact Request*
---------------------
Customer Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Message: ${form.message}`;

    window.open(
      `https://wa.me/94785369675?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    setForm({ name: "", email: "", phone: "+94", message: "" });
    setErrors({});
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-white min-h-screen">
      <h2 className="font-stackSans text-3xl md:text-4xl font-bold mb-12 text-center">
        Contact Us
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-amber-600" />
            <span className="font-googleSans text-gray-700">
              info@cinamo369.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-amber-600" />
            <span className="font-googleSans text-gray-700">
              +94 785 369 675
            </span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-amber-600" />
            <span className="font-googleSans text-gray-700">
              Akuressa, Sri Lanka
            </span>
          </div>

          {/* Google Map */}
          <div className="mt-4 w-full h-64 md:h-80 rounded-lg overflow-hidden">
            <iframe
              title="Kavin's Place Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9850692767814!2d80.39251307447849!3d6.132707927582328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae16900579bdbe9%3A0x7909b444e9760171!2sKavin's%20Place!5e0!3m2!1sen!2slk!4v1763983407394!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border font-googleSans focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border font-googleSans focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}

          <input
            type="text"
            name="phone"
            placeholder="+94xxxxxxxxx"
            value={form.phone}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border font-googleSans focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone}</span>
          )}

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border font-googleSans focus:outline-none focus:ring-2 focus:ring-amber-500 h-32 resize-none ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message}</span>
          )}

          <button
            type="submit"
            disabled={!isFormValid()}
            className={`bg-amber-700 text-white font-googleSans py-3 px-6 rounded-lg hover:bg-amber-800 transition duration-300 ${
              !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
