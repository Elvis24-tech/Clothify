import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
      <img src={product.img} alt={product.name} className="w-full h-60 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2 text-sky-800">{product.name}</h2>
      <p className="text-gray-600">KES {product.price}</p>
      <button
        onClick={handleAdd}
        className={`mt-3 w-full py-2 rounded-lg text-white ${
          added ? "bg-green-600" : "bg-sky-600 hover:bg-sky-700"
        }`}
      >
        {added ? "Added!" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
