import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

function SpecialOffers() {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h1 className="text-4xl font-bold font-palanquin lg:max-w-lg">
          <span className="text-coral-red "> Special </span>
          Offer
        </h1>
        <p className="mt-4 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals.From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg text-slate-gray text-lg leading-7">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exception.
        </p>
        <div className="mt-11">
          <Button imgURL={arrowRight} label="Shop now" />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;
