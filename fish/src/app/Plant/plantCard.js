import React from "react";
import plant1 from "../../asset/fish plant/plant1.jpg";
import plant2 from "../../asset/fish plant/plant2.jpg";
import plant3 from "../../asset/fish plant/plant3.jpg";
import plant4 from "../../asset/fish plant/plant4.jpg";
import plant5 from "../../asset/fish plant/plant5.jpg";
import plant6 from "../../asset/fish plant/plant6.jpg";
import Image from "next/image";

const PlantCard = () => {
  return (
    <div className="grid grid-cols-1 gap-4  lg:grid-cols-3 lg:gap-8 p-5">
      <div>
        <Image alt="plant pic" src={plant1} className=" object-cover " />
      </div>
      <div>
        <Image alt="plant pic" src={plant2} className=" object-cover" />
      </div>
      <div>
        <Image alt="plant pic" src={plant3} className="object-cover" />
      </div>
      <div>
        <Image alt="plant pic" src={plant4} className="object-cover" />
      </div>
      <div>
        <Image alt="plant pic" src={plant5} className="object-cover" />
      </div>
      <div>
        <Image alt="plant pic" src={plant6} className="object-cover" />
      </div>
    </div>
  );
};

export default PlantCard;
