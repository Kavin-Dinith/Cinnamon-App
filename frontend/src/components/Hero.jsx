import hero from "../data/hero.json";

export default function Hero() {
  return (
    <section
      className="w-full h-[70vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${hero.image})` }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{hero.title}</h1>
        <p className="text-lg md:text-xl max-w-2xl">{hero.subtitle}</p>
      </div>
    </section>
  );
}
