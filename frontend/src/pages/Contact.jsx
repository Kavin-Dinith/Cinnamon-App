import { useState } from "react";
import { Mail, Phone } from "lucide-react";

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

    if (name === "name" && !value.trim()) error = "Name is required";

    if (name === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!value.trim()) error = "Email is required";
      else if (!emailRegex.test(value)) error = "Enter a valid email address";
    }

    if (name === "phone") {
      if (!value.trim()) error = "Phone number is required";
      else {
        const phoneRegex = /^\+?\d+$/;
        if (!phoneRegex.test(value)) error = "Only digits allowed";
        else if (value.startsWith("+94") && value.length !== 12)
          error = "Enter 9 digits after +94";
        else if (value.startsWith("0") && value.length !== 10)
          error = "Enter 10 digits starting with 0";
        else if (!value.startsWith("+94") && !value.startsWith("0"))
          error = "Phone must start with +94 or 0";
      }
    }

    if (name === "message" && !value.trim()) error = "Message cannot be empty";

    setErrors((prev) => ({ ...prev, [name]: error }));
    return error === "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "phone") {
      if (value.startsWith("+94")) newValue = value.slice(0, 12);
      else if (value.startsWith("0")) newValue = value.slice(0, 10);
      else newValue = value.replace(/[^+\d]/g, "");
    }

    setForm((prev) => ({ ...prev, [name]: newValue }));
    validateField(name, newValue);
  };

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

      {/* FIX: grid now forces equal column height */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
        {/* LEFT COLUMN - wrapped in full-height container */}
        <div className="flex flex-col justify-between h-full">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-amber-600" />
              <span className="font-googleSans text-gray-700">
                info@cinamo369.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-amber-600" />
              <a
                href="tel:+94785369675"
                className="font-googleSans text-gray-700 hover:text-amber-700 transition"
              >
                +94 785 369 675
              </a>
            </div>
          </div>

          {/* Business Hours pinned to bottom */}
          <div className="mt-6 w-full rounded-lg bg-amber-50 border border-amber-200 p-5 font-googleSans">
            <h3 className="text-xl font-semibold text-amber-800 mb-3">
              Business Hours
            </h3>

            <ul className="space-y-1 text-gray-700">
              <li className="flex justify-between">
                <span>Monday</span>
                <span>8 AM – 5 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Tuesday</span>
                <span>8 AM – 5 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Wednesday</span>
                <span>8 AM – 5 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Thursday</span>
                <span>8 AM – 5 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span>8 AM – 5 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9 AM – 3 PM</span>
              </li>
              <li className="flex justify-between text-red-600 font-semibold">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN - form stretches full height */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 h-full">
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
