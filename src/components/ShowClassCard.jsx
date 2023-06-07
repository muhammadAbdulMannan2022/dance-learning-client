const ShowClassCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
      <img className="w-full" src="product-image.jpg" alt="Product" />
      <div className="p-4">
        <h3 className="text-xl font-bold">Product Name</h3>
        <p className="text-gray-700 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          lectus nec elit laoreet venenatis.
        </p>
        <div className="flex items-center mt-4">
          <span className="text-gray-800 font-bold">$49.99</span>
          <button className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowClassCard;
