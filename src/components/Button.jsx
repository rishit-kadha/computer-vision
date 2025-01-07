const Button = (props) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat leading-none text-lg ${
        props.bgColor || "bg-coral-red"
      } ${props.textColor || "text-white"} ${
        props.borderColor || "border-coral-red"
      } rounded-full border-2 ${props.fullWidth && "w-full"}`}
    >
      {props.label}
      {props.iconURL && (
        <img
          src={props.iconURL}
          alt={"arrow right icon"}
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
