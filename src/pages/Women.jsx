import React from "react";
import { womenProducts } from "../data/women";   // ✅ import from women.js
import ProductCard from "../components/ProductCard";

const Women = () => (
  <div className="min-h-screen p-6">
    <h2 className="text-3xl font-bold text-center text-sky-700 mb-8">
      Women's Collection
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {womenProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default Women;
