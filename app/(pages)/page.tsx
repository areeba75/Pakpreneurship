import React from "react";
import Herosection from "./(Homepage)/components/Herosection";
import FeaturedPrograms from "./(Homepage)/components/FeaturedPrograms";
import HowItWorks from "./(Homepage)/components/HowItWorks";
import MeetOurMentors from "./(Homepage)/components/MeetOurMentors";
import SuccessStories from "./(Homepage)/components/SuccessStories";

const page = () => {
  return (
    <div>
      <Herosection />
      <FeaturedPrograms />
      <HowItWorks />
      <MeetOurMentors />
      <SuccessStories />
    </div>
  );
};

export default page;
