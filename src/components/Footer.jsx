import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h2 className="text-xl font-bold">Clothify</h2>
        <p className="text-gray-400">© 2025 Clothify. All rights reserved.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-pink-500">Facebook</a>
          <a href="#" className="hover:text-pink-500">Instagram</a>
          <a href="#" className="hover:text-pink-500">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
