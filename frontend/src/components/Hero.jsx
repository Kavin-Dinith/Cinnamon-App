import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="w-full flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/301669/pexels-photo-301669.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "calc(100vh)", // full viewport minus navbar
      }}
    >
      {/* Overlay */}
      <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center px-6">
        <div className="text-center max-w-4xl space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg font-stackSans">
            Premium Ceylon Cinnamon
          </h1>

          <p className="text-lg md:text-2xl leading-relaxed drop-shadow-md font-stackSans">
            Experience the world's finest cinnamon, sustainably sourced from Sri
            Lanka.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
            {/* Scroll to About section */}
            <a
              href="#about-cinnamon"
              className="font-googleSans bg-amber-500 hover:bg-amber-600 transition text-white py-3 px-6 rounded-lg text-lg shadow-lg"
            >
              Explore About Cinnamon
            </a>

            {/* Navigate to Products page */}
            <Link
              to="/products"
              className="font-googleSans bg-amber-700 hover:bg-amber-800 transition text-white py-3 px-6 rounded-lg text-lg shadow-lg"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
