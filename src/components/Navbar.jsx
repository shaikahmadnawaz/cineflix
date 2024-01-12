/* eslint-disable react/prop-types */
import { Video, Bell, ShoppingCart, CircleUserRound } from "lucide-react";
import { useState } from "react";
import Cart from "./Cart";

const Navbar = ({ cartItems, onRemoveFromCart }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCheckout = () => {
    console.log("Checkout clicked");
  };

  return (
    <header className="w-full bg-gray-900">
      <div className="mx-auto flex items-center justify-between py-2 px-6 md:px-12 h-14">
        <div className="inline-flex items-center space-x-1">
          <span className="text-yellow-400">
            <Video />
          </span>
          <span className="font-bold">CineFlix</span>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="inline-flex items-center space-x-2 md:space-x-4">
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
                <Cart
                  cartItems={cartItems}
                  onRemoveFromCart={onRemoveFromCart}
                  totalAmount={totalAmount}
                  onCheckout={handleCheckout}
                />
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
