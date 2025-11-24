import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // install react-icons
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-amber-700 text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Cinamo369 Logo"
            className="w-10 h-10 object-cover"
          />

          <h1 className="font-stackSans text-2xl font-bold tracking-wide">
            <Link to="/">Cinamo369</Link>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="font-googleSans hover:text-yellow-300">
            Home
          </Link>
          <Link
            to="/products"
            className="font-googleSans hover:text-yellow-300"
          >
            Products
          </Link>
          <Link to="/about" className="font-googleSans hover:text-yellow-300">
            About
          </Link>
          <Link to="/contact" className="font-googleSans hover:text-yellow-300">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-amber-600 px-4 pt-2 pb-4 space-y-2">
          <Link
            to="/"
            className="font-googleSans block hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="font-googleSans block hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/about"
            className="font-googleSans block hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="font-googleSans block hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
