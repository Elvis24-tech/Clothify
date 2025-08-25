import React from "react";
import { womenProducts } from "../data/women";
import ProductCard from "../components/ProductCard";

const Women = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {womenProducts.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default Women;
