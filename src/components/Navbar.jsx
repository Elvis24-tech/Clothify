import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { itemCount } = useCart();

  return (
    <nav className="flex justify-between items-center p-4 bg-sky-900 shadow-md text-white">
      <h1 className="text-2xl font-bold">Clothify</h1>
      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-sky-300">Home</Link>
        <Link to="/men" className="hover:text-sky-300">Men</Link>
        <Link to="/women" className="hover:text-sky-300">Women</Link>
        <Link to="/cart" className="hover:text-sky-300 relative">
          Cart
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[0.65rem] w-4 h-4 flex items-center justify-center rounded-full">
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
