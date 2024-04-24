"use client";
import Hero from "./HeroSection/page";

import Normal from "./Carouzel/Normal/page";
import Imported from "./Carouzel/imported/page";
import Betta from "./Carouzel/Betta/page";
import Oranda from "./Carouzel/orenda/page";

export default function Home() {
  return (
    <main className="background">
      <div className=" container mx-auto px-10 ">
        <Hero />
        <hr />
        <Normal />
        <hr />
        <Imported/>
        <hr />
        <Betta/>
        <hr />
        <Oranda/>
      </div>
    </main>
  );
}
