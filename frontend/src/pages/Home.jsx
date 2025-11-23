import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutCinnamon from "../components/AboutCinnamon";
import Usage from "../components/Usage";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutCinnamon />
      <Usage />
      <Benefits />
      <Footer />
    </div>
  );
}
