import { GiCookingPot, GiHealthPotion } from "react-icons/gi";
import { FaCoffee } from "react-icons/fa";

export default function Usage() {
  const usageData = [
    {
      title: "Cooking & Baking",
      description:
        "Add rich aroma and flavor to curries, desserts, baked goods, smoothies, teas, and more.",
      icon: <GiCookingPot className="w-12 h-12 text-amber-600 mb-4" />,
    },
    {
      title: "Tea & Beverages",
      description:
        "Cinnamon tea is known for its calming effect, digestive benefits, and natural sweetness.",
      icon: <FaCoffee className="w-12 h-12 text-amber-600 mb-4" />,
    },
    {
      title: "Health & Wellness",
      description:
        "Used in Ayurveda and natural medicine for centuries due to its anti-inflammatory and antioxidant properties.",
      icon: <GiHealthPotion className="w-12 h-12 text-amber-600 mb-4" />,
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold mb-12 text-center">Common Uses</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {usageData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 h-full"
          >
            {item.icon}
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
