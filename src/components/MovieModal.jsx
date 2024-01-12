/* eslint-disable react/prop-types */
import { ShoppingCart, X, Star } from "lucide-react";
const MovieModal = ({ movie, onCloseModal, onAddToCart }) => {
  const {
    name,
    coverImage,
    rating,
    genre,
    price,
    description,
    yearOfRelease,
    duration,
  } = movie;

  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-900 opacity-65"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-3xl p-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 flex flex-col gap-y-4">
              <img
                src={coverImage}
                alt={name}
                className="w-full h-64 object-cover rounded-t-lg md:h-[400px] md:w-full"
              />
              <button
                className="w-full rounded-sm text-center bg-yellow-400 text-xs font-semibold text-gray-800 px-2 py-3 shadow-md inline-flex items-center justify-center space-x-1"
                onClick={onAddToCart}
              >
                <span>
                  <ShoppingCart size={16} />
                </span>
                <span className="font-bold">Add to Cart</span>
              </button>
            </div>

            <div className="md:w-2/3 md:pl-6">
              <div className="flex justify-end mt-3 md:mt-0">
                <button
                  onClick={onCloseModal}
                  className="text-gray-600 focus:outline-none"
                >
                  <X />
                </button>
              </div>
              <h2 className="text-lg font-semibold mb-2">{name}</h2>

              <div className=" flex gap-x-2 text-gray-400">
                <p>{yearOfRelease}</p>
                <span>&bull;</span>

                <p>{duration} minutes</p>
              </div>

              <div className="flex gap-x-2 text-gray-400">
                <p>{genre}</p>
                <span>&bull;</span>
                <div className="inline-flex justify-center items-center space-x-[2px]">
                  <span>
                    <Star size={15} />
                  </span>
                  <span>{rating}</span>
                </div>

                <span>&bull;</span>
                <p className="font-bold text-gray-300"> ${price}</p>
              </div>

              <div className="border border-gray-700 my-4" />
              <p className="text-gray-400">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
