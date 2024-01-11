import { Video, Bell, ShoppingCart, CircleUserRound } from "lucide-react";
const Navbar = () => {
  return (
    <header className="relative w-full bg-gray-900">
      <div className="mx-auto flex items-center justify-between py-2 px-12 h-14">
        <div className="inline-flex items-center space-x-1">
          <span className="text-yellow-400">
            <Video />
          </span>
          <span className="font-bold">CineFlix</span>
        </div>

        <div className="hidden lg:block">
          <div className="inline-flex items-center space-x-4">
            <span className="text-gray-600">
              <Bell />
            </span>
            <span className="text-gray-600">
              <ShoppingCart />
            </span>
            <span className="text-gray-600">
              <CircleUserRound />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
