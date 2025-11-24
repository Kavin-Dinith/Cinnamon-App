import { GiHerbsBundle } from "react-icons/gi";

export default function About() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Icon */}
        <div className="flex-shrink-0 text-amber-600 text-6xl md:text-8xl">
          <GiHerbsBundle />
        </div>

        {/* Content */}
        <div>
          <h2 className="font-stackSans text-3xl md:text-4xl font-bold mb-6">
            About Cinamo369
          </h2>
          <p className="font-googleSans text-gray-700 text-lg md:text-xl leading-relaxed">
            Cinamo369 is dedicated to providing the finest Ceylon Cinnamon
            sourced sustainably from Sri Lanka. Our products are 100% organic,
            premium quality, and perfect for cooking, baking, teas, and wellness.
            We believe in quality, purity, and delivering a natural experience
            to our customers.
          </p>
        </div>
      </div>
    </section>
  );
}
