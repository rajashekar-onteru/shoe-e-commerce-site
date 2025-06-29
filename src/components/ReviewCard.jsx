import React from "react";
import { star } from "../assets/icons";

function ReviewCard({ imgURL, customerName, rating, feedback }) {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover object-top w-[120px] h-[120px] "
      />
      <p className="mt-6 max-w-sm font-montserrat text-slate-gray text-lg leading-7">
        {feedback}
      </p>
      <div className="mt-3 flex justify-center align-center gap-2.5">
        <img src={star} width={24} height={24} className="object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
}

export default ReviewCard;
