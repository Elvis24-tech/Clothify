import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-sky-900 shadow-md">
      <h1 className="text-2xl font-bold text-white">Clothify</h1>
      <div className="flex gap-6">
        <a href="/" className="text-gray-200 hover:text-white transition">Home</a>
        <a href="/men" className="text-gray-200 hover:text-white transition">Men</a>
        <a href="/women" className="text-gray-200 hover:text-white transition">Women</a>
        <a href="/cart" className="text-gray-200 hover:text-white transition">Cart</a>
      </div>
    </nav>
  );
};

export default Navbar;
