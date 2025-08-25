import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-60 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2 text-sky-800">
        {product.name}
      </h2>
      <p className="text-gray-600">KES {product.price}</p>
      <button className="mt-3 w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
