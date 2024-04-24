"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="pt-5 lg:pt-15">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="https://wallpapercave.com/wp/wp2752576.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className=" text-3xl font-bold sm:text-5xl text-white">
              FISHY-Kart
            </h2>

            <p className="mt-4 text-white text-md sm:text-xl leading-relaxed">
              FishyKart is a beloved online aquarium fish store that caters to
              fish enthusiasts. They offer a wide variety of aquarium fish,
              including popular species like Betta, Cichlids, Tetra, and Guppy.
              While specializing in freshwater aquarium fish, FishyKart also
              features an ever-growing range of saltwater aquarium fish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
