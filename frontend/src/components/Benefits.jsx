import { GiCheckMark } from "react-icons/gi"; // replace with GiCheckMark valid

export default function Benefits() {
  const benefits = [
    "Helps maintain healthy blood sugar levels",
    "Rich in antioxidants that fight inflammation",
    "Promotes better digestion",
    "Supports heart health and circulation",
    "May boost the immune system",
    "Contains antibacterial and antifungal properties",
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Health Benefits
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="flex items-start p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition h-full"
          >
            <div className="flex-shrink-0 text-amber-600 text-3xl mr-4 mt-1">
              <GiCheckMark />
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
