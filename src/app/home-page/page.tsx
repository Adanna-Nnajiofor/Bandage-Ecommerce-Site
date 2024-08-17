import React from "react";
import FeaturedPosts from "@/components/homepage/FeaturedPosts";
import FeaturedProducts from "@/components/homepage/FeaturedProducts";
import Hero from "@/components/homepage/Hero";
import ResolveConflict from "@/components/homepage/ResolveConflict";
import Services from "@/components/homepage/Services";
import Testimonial from "@/components/homepage/Testimonial";

const HomePage = () => {
  return (
    <div className="flex w-full h-auto flex-col ">
      <Hero />
      <FeaturedProducts />
      <Services />
      <FeaturedPosts />
      <Testimonial />
      <ResolveConflict />
    </div>
  );
};

export default HomePage;
