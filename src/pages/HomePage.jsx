import React from "react";
import Hero from "./subComponents/Hero.jsx";
import Reviews from "./subComponents/Reviews.jsx";
import Gallery from "./subComponents/Gallery.jsx";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Gallery />
      <Reviews />
    </div>
  );
};

export default HomePage;
