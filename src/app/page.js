import Image from "next/image";
import Hero from "./componets/hero/Hero";
import AboutUs from "./componets/aboutus/AboutUs";
import Shop from "./componets/shop/Shop";
import Choos from "./componets/choos/Choos";
import Sale from "./componets/sale/Sale";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <Sale />
      <AboutUs />
      <Shop />
      <Choos />
    </main>
  );
}
