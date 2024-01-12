/* eslint-disable react/prop-types */
import { Video, Bell, ShoppingCart, CircleUserRound, X } from "lucide-react";
import { useState } from "react";

const Navbar = ({ cartItems, onRemoveFromCart }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="w-full bg-gray-900">
      <div className="mx-auto flex items-center justify-between py-2 px-12 h-14">
        <div className="inline-flex items-center space-x-1">
          <span className="text-yellow-400">
            <Video />
          </span>
          <span className="font-bold">CineFlix</span>
        </div>

        <div className="hidden lg:block relative">
          <div className="inline-flex items-center space-x-4">
            <span className="text-gray-500 cursor-pointer">
              <Bell />
            </span>
            <span
              className="text-gray-500 cursor-pointer relative"
              onClick={handleCartClick}
            >
              <ShoppingCart />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-yellow-400 text-gray-950 text-[8px] w-4 h-4 font-bold rounded-full flex items-center justify-center p-1">
                  {cartItems.length}
                </span>
              )}
              {isCartOpen && (
                <div className="absolute top-12 right-0 w-72 bg-gray-700 shadow-2xl rounded-md p-2">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-x-3 mb-2 border-b border-gray-600 pb-2"
                    >
                      <div className="flex gap-3">
                        <div>
                          <img
                            src={item.coverImage}
                            className="w-12 h-16"
                            alt={item.name}
                          />
                        </div>
                        <div className="flex items-center flex-col">
                          <p className="text-white font-bold">{item.name}</p>
                          <p className="text-gray-400 font-bold">
                            ${item.price}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <button onClick={() => onRemoveFromCart(item.id)}>
                          <X />
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-between mt-2">
                    <div>
                      <p className="text-gray-400">Number of movies</p>
                      <p className="font-bold text-gray-400">
                        {cartItems.length}
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-gray-400">Total Cost</p>
                      <p className="text-white font-bold">
                        ${totalAmount.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-y-3 mt-4 ">
                    <button
                      className="w-full rounded-sm text-center bg-yellow-400 text-xs font-semibold text-gray-800 px-2 py-3 shadow-md  focus:outline-none focus:ring-2 focus:ring-black inline-flex items-center justify-center space-x-1"
                      onClick={() => console.log("Checkout clicked")}
                    >
                      <span>
                        <ShoppingCart size={16} />
                      </span>
                      <span>Checkout</span>
                    </button>
                    <button className="w-full rounded-sm text-center  text-xs font-semibold border border-gray-400 px-2 py-3 shadow-md  focus:outline-none focus:ring-2 focus:ring-black inline-flex items-center justify-center space-x-1 text-white">
                      Continue Shopping
                    </button>
                  </div>
                </div>
              )}
            </span>
            <span className="text-gray-500 cursor-pointer">
              <CircleUserRound />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
