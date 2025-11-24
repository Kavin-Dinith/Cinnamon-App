import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";

export default function App() {
  return (
    <Router>
      <Navbar />

      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          {/* Nested product route */}
          <Route path="/products/:slug" element={<ProductDetail />} />
          {/* Nested checkout route */}
          <Route path="/products/:slug/checkout" element={<Checkout />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}
