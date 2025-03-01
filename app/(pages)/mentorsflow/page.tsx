import React from "react";
import HeroSection from "./components/Herosection";
import Explorementors from "./components/Explorementors";

const page = () => {
  return (
    <>
      <div className="w-[95%] mx-auto">
        <HeroSection />
        <Explorementors />
      </div>
    </>
  );
};

export default page;
