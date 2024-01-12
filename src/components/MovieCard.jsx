/* eslint-disable react/prop-types */
import { ShoppingCart, Star } from "lucide-react";

const MovieCard = ({ movie, onAddToCart, onOpenModal }) => {
  const { name, coverImage, rating, genre, price } = movie;

  return (
    <div className="bg-gray-900 hover:bg-gray-800 rounded-md shadow-lg">
      <img
        src={coverImage}
        alt={name}
        className="h-64 w-full object-cover sm:h-80 lg:h-96"
      />
      <div className="p-4 flex flex-col gap-y-3">
        <h2 className="text-lg font-semibold sm:text-xl text-white">{name}</h2>
        <div className="flex gap-x-2 text-gray-400">
          <p>{genre}</p>
          <span>&bull;</span>
          <div className="inline-flex justify-center items-center space-x-[2px]">
            <span>
              <Star size={15} />
            </span>
            <span>{rating}</span>
          </div>

          <span className="">&bull;</span>
          <p> ${price}</p>
        </div>
        <div className="flex justify-between items-center">
          <button
            className="w-[140px] rounded-sm text-center bg-yellow-400 text-xs font-semibold text-gray-800 px-2 py-3 shadow-md  focus:outline-none focus:ring-2 focus:ring-black inline-flex items-center justify-center space-x-1"
            onClick={onAddToCart}
          >
            <span>
              <ShoppingCart size={16} />
            </span>
            <span className="font-bold">Add</span>
          </button>
          <button
            className="w-[140px] rounded-sm text-center  text-xs font-semibold border border-gray-700 px-2 py-3 shadow-md  focus:outline-none focus:ring-2 focus:ring-black inline-flex items-center justify-center space-x-1"
            onClick={onOpenModal}
          >
            <span>View details</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
