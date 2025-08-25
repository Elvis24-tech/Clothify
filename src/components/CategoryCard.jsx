import React from "react";

const CategoryCard = ({ title, img, link }) => {
  return (
    <a
      href={link}
      className="relative block overflow-hidden rounded-2xl shadow-lg group"
    >
      <img
        src={img}
        alt={title}
        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
      />
      {/* Gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-center justify-center">
        <h2 className="text-3xl text-white font-bold">{title}</h2>
      </div>
    </a>
  );
};

export default CategoryCard;
