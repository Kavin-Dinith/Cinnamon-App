export default function Hero() {
  return (
    <section
      className="w-full flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/301669/pexels-photo-301669.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "calc(100vh)",
      }}
    >
      {/* Overlay */}
      <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Premium Ceylon Cinnamon
          </h1>
          <p className="text-lg md:text-2xl leading-relaxed drop-shadow-md">
            Experience the world's finest cinnamon, sustainably sourced from
            Sri Lanka.
          </p>
          <button className="mt-8 bg-amber-700 hover:bg-amber-800 transition text-white py-3 px-6 rounded-lg text-lg shadow-lg">
            Explore Products
          </button>
        </div>
      </div>
    </section>
  );
}
