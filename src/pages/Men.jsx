import React from "react";
import { menProducts } from "../data/men";
import ProductCard from "../components/ProductCard";

const Men = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {menProducts.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default Men;
