import React from "react";
import { menProducts } from "../data/men";   // ✅ import from men.js
import ProductCard from "../components/ProductCard";

const Men = () => (
  <div className="min-h-screen p-6">
    <h2 className="text-3xl font-bold text-center text-sky-700 mb-8">
      Men's Collection
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {menProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default Men;
