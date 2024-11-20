import React from "react";
import MainSlider from "../components/MainSlider";
import ProductSlider from "../components/ProductSlider";
import Benefit from "../components/Benefit";
import BlogMain from "../components/BlogMain";
import FlyingComponent from "../components/FlyingComponent"; // Import FlyingComponent

const Home = () => {
  return (
    <div>
      <FlyingComponent xOffset={100} yOffset={100} delay={0.2}>
        <MainSlider />
      </FlyingComponent>
      <FlyingComponent xOffset={100} yOffset={100} delay={0.4}>
        <ProductSlider />
      </FlyingComponent>
      <FlyingComponent xOffset={100} yOffset={100} delay={0.6}>
        <Benefit />
      </FlyingComponent>
      <FlyingComponent xOffset={100} yOffset={100} delay={0.8}>
        <BlogMain />
      </FlyingComponent>
    </div>
  );
};

export default Home;
