const ShoeCard = ({ shoe, changeBigShoeImage, bigShoeImg }) => {
  const HandleClick = () => {
    if (bigShoeImg !== shoe.bigShoe) {
      changeBigShoeImage(shoe.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl shadow-sm ${
        bigShoeImg === shoe.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={HandleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center sm:w-40 sm:*:h-40 rounded-xl max-sm:p-4">
        <img
          src={shoe.thumbnail}
          alt="shoe collection"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
