export default function Usage() {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold mb-10 text-center">Common Uses</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">Cooking & Baking</h3>
          <p className="text-gray-600">
            Add rich aroma and flavor to curries, desserts, baked goods,
            smoothies, teas, and more.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">Tea & Beverages</h3>
          <p className="text-gray-600">
            Cinnamon tea is known for its calming effect, digestive benefits,
            and natural sweetness.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-3">Health & Wellness</h3>
          <p className="text-gray-600">
            Used in Ayurveda and natural medicine for centuries due to its
            anti-inflammatory and antioxidant properties.
          </p>
        </div>
      </div>
    </section>
  );
}
