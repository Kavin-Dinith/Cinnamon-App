import { GiHerbsBundle } from "react-icons/gi";
import { FaUserTie, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* Company Overview */}
        <div className="flex flex-col md:flex-row items-center gap-10">
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
              Cinamo369 is dedicated to providing the finest Ceylon Cinnamon,
              sourced sustainably from Sri Lanka. Our products are 100% organic,
              premium quality, and perfect for cooking, baking, teas, and wellness.
              We believe in quality, purity, and delivering a natural experience
              to our customers worldwide.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="text-center">
          <h3 className="font-stackSans text-2xl font-bold mb-4 text-amber-600">Our Mission</h3>
          <p className="font-googleSans text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            To deliver premium, organic Ceylon Cinnamon while promoting sustainable farming practices in Sri Lanka, and providing customers with a natural, high-quality experience.
          </p>
        </div>

        {/* Founders & Management */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="font-stackSans text-2xl font-bold mb-6 text-amber-600">Founders & Management</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-amber-600 text-5xl mb-2">
                <FaUserTie />
              </div>
              <h4 className="font-stackSans font-semibold text-lg">Kavin Dinith</h4>
              <p className="font-googleSans text-gray-600 text-sm">Founder & CEO</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-amber-600 text-5xl mb-2">
                <FaUserTie />
              </div>
              <h4 className="font-stackSans font-semibold text-lg">Nethmi Fernando</h4>
              <p className="font-googleSans text-gray-600 text-sm">Operations Manager</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-amber-600 text-5xl mb-2">
                <FaUserTie />
              </div>
              <h4 className="font-stackSans font-semibold text-lg">Lasindu Vimukthi</h4>
              <p className="font-googleSans text-gray-600 text-sm">Marketing Director</p>
            </div>
          </div>
        </div>

        {/* Developers & Tech Team */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="font-stackSans text-2xl font-bold mb-6 text-amber-600">Developers & Tech Team</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-amber-600 text-5xl mb-2">
                <FaLaptopCode />
              </div>
              <h4 className="font-stackSans font-semibold text-lg">Pinidu Pramudith</h4>
              <p className="font-googleSans text-gray-600 text-sm">Frontend Developer</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-amber-600 text-5xl mb-2">
                <FaLaptopCode />
              </div>
              <h4 className="font-stackSans font-semibold text-lg">Kavin Dinith</h4>
              <p className="font-googleSans text-gray-600 text-sm">UI/UX Designer</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-amber-600 text-5xl mb-2">
                <FaLaptopCode />
              </div>
              <h4 className="font-stackSans font-semibold text-lg">Nethmi Fernando</h4>
              <p className="font-googleSans text-gray-600 text-sm">QA Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
