export default function Navbar() {
  return (
    <nav className="w-full bg-amber-700 text-white p-4 flex justify-between items-center shadow">
      <h1 className="text-2xl font-bold tracking-wide">Cinamo369</h1>
      <div className="space-x-6 hidden md:flex">
        <a href="/" className="hover:text-yellow-300">
          Home
        </a>
        <a href="/products" className="hover:text-yellow-300">
          Products
        </a>
        <a href="#" className="hover:text-yellow-300">
          About
        </a>
        <a href="#" className="hover:text-yellow-300">
          Contact
        </a>
      </div>
    </nav>
  );
}
