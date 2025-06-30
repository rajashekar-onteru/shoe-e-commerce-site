import React from "react";
import { star } from "../assets/icons";

function PopularProductCard({ imgURL, name, price }) {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} width={24} height={24} />
        <p className="font-montserrat text-xl leasing-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h1 className="mt-2 text-2xl leading-normalfont-semibold font-palanquin ">
        {name}
      </h1>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl">
        &#x20B9; {price}
      </p>
    </div>
  );
}

export default PopularProductCard;
