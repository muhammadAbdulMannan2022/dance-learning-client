// eslint-disable-next-line react/prop-types
const ShowClassCard = ({ danceClass }) => {
  const {
    imageUrl,
    nameOfTheClass,
    availableSeats,
    info,
    instructorName,
    price,
  } = danceClass;
  const shortInfo = info.slice(0, 50);

  return (
    <div className="max-w-md mx-auto h-[500px] bg-white rounded-lg shadow-lg">
      <img
        style={{ height: "200px" }}
        className="w-full"
        src={imageUrl}
        alt="Product"
      />
      <div className="p-4 text-start">
        <h3 className="text-2xl font-bold">{nameOfTheClass}</h3>
        <h3 className="text-xl font-bold">By {instructorName}</h3>

        <p>Available Seats: {availableSeats}</p>
        <p className="text-gray-700 mt-2">{shortInfo}...</p>
        <div className="flex items-center mt-4">
          <span className="text-gray-800 font-bold">${price}</span>
          <button className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowClassCard;
