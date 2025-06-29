import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

function SuperQualty() {
  return (
    <section
      id="abou-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h1 className="text-4xl font-bold font-palanquin lg:max-w-lg">
          We Provide You
          <span className="text-coral-red "> Super </span>
          <span className="text-coral-red "> Quality</span>Shoes
        </h1>
        <p className="mt-4 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7">
          Ensuring premium comfort and style, our meticulously created shoes are
          designed to meet your every need. Experience unmatched quality and
          durability with every step you take.
        </p>
        <p className="mt-6 lg:max-w-lg text-slate-gray text-lg leading-7">
          Our dedication to detail and excellence ensures your satisfaction{" "}
        </p>
        <div className="mt-11">
          <Button imgURL={arrowRight} label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} width={570} height={522} />
      </div>
    </section>
  );
}

export default SuperQualty;
