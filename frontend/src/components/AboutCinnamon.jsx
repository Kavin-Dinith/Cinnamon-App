import { GiHerbsBundle } from "react-icons/gi";

export default function AboutCinnamon() {
  return (
    <section
      id="about-cinnamon"
      className="py-12 md:py-16 px-6 md:px-20 bg-gray-50 relative"
      style={{ scrollMarginTop: "4rem" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <div className="flex-shrink-0 text-amber-600 text-5xl md:text-8xl">
          <GiHerbsBundle />
        </div>
        <div>
          <h2 className="font-stackSans text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            What is Ceylon Cinnamon?
          </h2>
          <p className="font-googleSans text-gray-700 text-base md:text-lg leading-relaxed">
            Ceylon Cinnamon, also known as “True Cinnamon,” is a natural spice
            native to Sri Lanka. It is harvested from the inner bark of the
            Cinnamomum verum tree and is widely recognized for its delicate
            aroma, health benefits, and premium quality. Unlike common cassia
            cinnamon, Ceylon Cinnamon contains very low levels of coumarin,
            making it safe for daily consumption.
          </p>
        </div>
      </div>
    </section>
  );
}
