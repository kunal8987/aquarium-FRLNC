
import React from "react";
import food1 from "../../asset/fish food/food1.jpg";
import food2 from "../../asset/fish food/food2.jpg";
import food3 from "../../asset/fish food/food3.jpg";
import food4 from "../../asset/fish food/food4.jpg";
import food5 from "../../asset/fish food/food5.jpg";
import food6 from "../../asset/fish food/food6.jpg";
import food7 from '../../asset/fish food/food7.jpg'
import food8 from '../../asset/fish food/food8.jpg'
import Image from "next/image";
const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 gap-4  lg:grid-cols-3 lg:gap-8 p-5">
      <div>
        <Image alt="food pic" src={food1} className=" object-cover rounded-lg" />
      </div>
      <div>
        <Image alt="food pic" src={food2} className=" object-cover rounded-lg" />
      </div>
      <div>
        <Image alt="food pic" src={food3} className="object-cover rounded-lg" />
      </div>
      <div>
        <Image alt="food pic" src={food4} className="object-cover rounded-lg" />
      </div>
      <div>
        <Image alt="food pic" src={food5} className="object-cover rounded-lg" />
      </div>
      <div>
        <Image alt="food pic" src={food6} className="object-cover rounded-lg" />
      </div>
      <div>
        <Image alt="food pic" src={food7} className="object-cover rounded-lg" />
      </div>
      <div>
        <Image alt="food pic" src={food8} className="object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default ProductCard;
