import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"; // <-- import here

// Pages
import Home from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Navbar />

      <div className="pt-16">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Products */}
          <Route path="/products" element={<ProductsPage />} />

          {/* Nested product route */}
          <Route path="/products/:slug" element={<ProductDetail />} />

          {/* Nested checkout route */}
          <Route path="/products/:slug/checkout" element={<Checkout />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />

      {/* Add Analytics at the bottom of App */}
      <Analytics />
    </Router>
  );
}
