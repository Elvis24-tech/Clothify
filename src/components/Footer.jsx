import React from "react";

const Footer = () => {
  return (
    <footer className="bg-sky-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-300">
          © {new Date().getFullYear()} Clothify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
