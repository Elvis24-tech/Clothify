import React from "react";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";

const Home = () => {
  return (
    <div className="bg-sky-100 min-h-screen"> {/* ✅ Sky blue background */}
      <Hero />
      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CategoryCard
            title="Men"
            img="https://myfz.in/wp-content/uploads/2023/05/1-Mens-Wear-Banner-Fashion-Zone-1-1024x576.jpg"
            link="/men"
          />
          <CategoryCard
            title="Women"
            img="https://safaaworld.com/cdn/shop/articles/Blog-Image_b21adffc-7377-40da-963c-8d43a00cd714.jpg?v=1726489198"
            link="/women"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
