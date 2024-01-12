/* eslint-disable react/prop-types */
import { X, ShoppingCart } from "lucide-react";

const Cart = ({ cartItems, onRemoveFromCart, totalAmount, onCheckout }) => {
  return (
    <div className="absolute top-8 right-0 w-72 bg-gray-800 shadow-2xl rounded-md p-5">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between gap-x-3 mb-3 border-b border-gray-700 pb-3"
        >
          <div className="flex gap-3">
            <div>
              <img
                src={item.coverImage}
                className="w-12 h-14"
                alt={item.name}
              />
            </div>
            <div className="flex items-center flex-col">
              <p className="text-white font-bold">{item.name}</p>
              <p className="text-gray-400 font-bold">${item.price}</p>
            </div>
          </div>

          <div className="flex justify-end text-gray-600">
            <button onClick={() => onRemoveFromCart(item.id)}>
              <X />
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-between mt-2">
        <div>
          <p className="text-gray-400">Number of movies</p>
          <p className="font-bold text-gray-400">{cartItems.length}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-400">Total Cost</p>
          <p className="text-white font-bold">${totalAmount.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-3 mt-4 ">
        <button
          className="w-full rounded-sm text-center bg-yellow-400 text-xs font-semibold text-gray-800 px-2 py-3 shadow-md  focus:outline-none focus:ring-2 focus:ring-black inline-flex items-center justify-center space-x-1"
          onClick={onCheckout}
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
  );
};

export default Cart;
