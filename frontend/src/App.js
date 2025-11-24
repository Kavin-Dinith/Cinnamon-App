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
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-16"> {/* optional: padding to offset fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          {/* Add more routes here */}
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
}
