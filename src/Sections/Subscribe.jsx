import Button from "../components/Button";

function Subscribe() {
  return (
    <section className="max-container flex flex-col justify-center items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl leading-[68px] text-wrap  font-palanquin font-bold text-center">
        Sign Up for <span className="text-coral-red">Updates</span> &
        Newsletters{" "}
      </h3>
      <div className="flex  lg:max-w-[60%] w-full items-center max-sm:flex-col gap-5 p-1  md:border md:border-slate-gray rounded-full justify-between">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="input w-full px-4 py-3 pt-2 rounded-full outline-none text-xl max-md:border max-md:border-slate-gray"
        />{" "}
        <div className="flex max-sm:justify-center items-center max-sm:w-full">
          <button className="gap-2 px-2 py-4 text-lg leading-none rounded-full bg-coral-red w-36 font-montserrat">
            Sign Up
          </button>
        </div>
      </div>{" "}
    </section>
  );
}

export default Subscribe;
