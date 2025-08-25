import React from "react";

const Hero = () => {
  return (
    <section className="bg-pink-100 py-16 text-center">
      <h1 className="text-5xl font-bold text-pink-700">Style Your Everyday</h1>
      <p className="mt-4 text-lg text-gray-700">
        Discover the latest fashion for men & women
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <a href="/men" className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700">
          Shop Men
        </a>
        <a href="/women" className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700">
          Shop Women
        </a>
      </div>
    </section>
  );
};

export default Hero;
