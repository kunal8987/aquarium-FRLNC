import React from "react";
import PlantCard from "./plantCard";

const page = () => {
  return (
    <div className="background">
      <div className="container mx-auto px-10">
        <p className="text-white text-center text-2xl md:text-4xl font-bold p-5 md:p-10">
          Artificial-plant
        </p>
       <PlantCard/>
      </div>
    </div>
  );
};

export default page;
