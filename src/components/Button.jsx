import React from "react";

function Button({ label, imgURL }) {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 text-lg leading-none rounded-full bg-coral-red w-52 font-montserrat">
      {label} <img src={imgURL} alt="right arrow" className="ml-2  w-5 h-5" />
    </button>
  );
}

export default Button;
