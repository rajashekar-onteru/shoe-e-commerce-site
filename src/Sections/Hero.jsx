import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../Constants";

function Hero() {
  const [bigShoeShown, setBigShoeShown] = useState(bigShoe1);
  return (
    <section className="width-full flex max-xl:flex-col flex-row min-h-screen max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center intems-start  max-xl:px-2 pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="text-8xl font-bold mt-10 max-sm:text-[72px] max-sm:leading-[82px] font-palanquin">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3"> Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-8 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort,and innovation for
          your active life.
        </p>
        <Button imgURL={arrowRight} label="Shop Now" />

        <div className="flex gap-16 max-sm:gap-10 justify-start items-start flex-wrap  mt-20 ">
          {statistics?.map((item, index) => {
            return (
              <div key={item.label}>
                <p className="text-4xl font-bold">{item.value}</p>
                <p className="leading-7 text-slate-gray">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeShown}
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute bottom-[-5%] sm:left-[10%]">
          {shoes.map((shoe, index) => {
            return (
              <ShoeCard
                key={index}
                imgURL={shoe}
                changeShoe={(shoe) => {
                  setBigShoeShown(shoe);
                }}
                bigShoe={bigShoeShown}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;
