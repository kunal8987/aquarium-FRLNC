"use client";

import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import fish1 from "../../../asset/oranda fish/fish1.jpg";
import fish2 from "../../../asset/oranda fish/fish2.jpg";
import fish3 from "../../../asset/oranda fish/fish3.jpg";
import fish4 from "../../../asset/oranda fish/fish4.jpg";
import fish5 from "../../../asset/oranda fish/fish5.jpg";

import Image from "next/image";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const Part = () => {
  return (
    <AliceCarousel
      mouseTracking
      infinite
      autoPlay
      autoPlayStrategy="none"
      autoPlayInterval={2000}
      animationDuration={3000}
      responsive={responsive}
      controlsStrategy="alternate"
    >
      <Image src={fish1} alt="fish pic" />
      <Image src={fish2} alt="fish pic" />
      <Image src={fish3} alt="fish pic" />
      <Image src={fish4} alt="fish pic" />
      <Image src={fish5} alt="fish pic" />
    </AliceCarousel>
  );
};

export default Part;
