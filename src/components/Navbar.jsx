import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">Clothify</h1>
      <div className="flex gap-6">
        <a href="/" className="hover:text-blue-600">Home</a>
        <a href="/men" className="hover:text-blue-600">Men</a>
        <a href="/women" className="hover:text-blue-600">Women</a>
        <a href="/cart" className="hover:text-blue-600">Cart</a>
      </div>
    </nav>
  );
};

export default Navbar;
