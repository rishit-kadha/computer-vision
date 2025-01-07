import Button from "../components/Button";
const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for<span className="text-coral-red"> Updates </span> & News
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center sm:border-slate-gray border-2 rounded-full p-2.5">
        <input
          type="email"
          placeholder="subscribe@nike.com"
          className="input"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full ">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
