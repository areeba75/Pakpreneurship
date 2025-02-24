import React from "react";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import WatchProcess from "./components/WatchProcess";
import ReviewSection from "./components/ReviewSection";

const page = () => {
  return (
    <>
      <div>
        <HeroSection />
        <HowItWorksSection />
        <WatchProcess />
        <ReviewSection />
      </div>
    </>
  );
};

export default page;
