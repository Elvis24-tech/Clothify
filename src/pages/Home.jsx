import React from "react";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";

const Home = () => {
  return (
    <div>
      {/* Hero Banner */}
      <Hero />

      {/* Categories Section */}
      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CategoryCard
            title="Men"
            img="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
            link="/men"
          />
          <CategoryCard
            title="Women"
            img="https://images.unsplash.com/photo-1520974749544-5f18f3cc2bb0"
            link="/women"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
