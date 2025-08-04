import React from "react";
import Hero from "./subComponents/Hero.jsx";
import Reviews from "./subComponents/Reviews.jsx";
import Gallery from "./subComponents/Gallery.jsx";
import ShopStatus from "./subComponents/ShopStatus.jsx";

const HomePage = ({ status }) => {
  return (
    <div>
      <ShopStatus status={status} />
      <Hero />
      <Gallery />
      <Reviews />
    </div>
  );
};

export default HomePage;
