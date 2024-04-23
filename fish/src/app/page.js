import Image from "next/image";
import Navbar from "./Navbar/page";
import Hero from "./HeroSection/page";

export default function Home() {
  return (
    <main className="background">
      <div className=" container mx-auto px-10 ">
        <Navbar />
        <Hero/>
      </div>
    </main>
  );
}
