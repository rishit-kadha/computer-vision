import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="p-16 rounded-2xl shadow-lg">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <h3 className="text-bold text-2xl font-palanquin mt-3 text-coral-red">
        {customerName}
      </h3>
      <p className="info-text mt-1 mb-3 max-w-lg">{feedback}</p>
      <div className="flex justify-start items-start gap-2">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
          className="object-contain m-0"
        />

        <p className="info-text max-w-lg">({rating})</p>
      </div>
    </div>
  );
};

export default ReviewCard;
